<template>
    <div class="card shadow border-0 mb-7">
        <div class="card-header">
            <h5 class="mb-0">Cancelled Media Overview <span @click="fetchFailedFiles(true)" style="cursor: pointer;"
                    class="m-5 bi bi-arrow-clockwise sm" aria-hidden="true"></span></h5>
        </div>
        <DashboardTable :isFetchingData="isFetchingData" :files="store.failed_files"></DashboardTable>
    </div>
</template>
<script>
import DashboardTable from './DashboardTable.vue'
import { store } from '@/store'
import { fetchData } from '@/apiService';
export default {
    name: "Cancelled",
    components: {
        DashboardTable,
    },
    data() {
        return {
            store,
            isFetchingData: false,
        }
    },

    methods: {
        async fetchFailedFiles(call_from_refresh = false) {
            this.isFetchingData = true
            try {
                const data = await fetchData(`/files/?user=${store.user}&compression_status=CANCELLED`);
                const results = data.results
                this.isFetchingData = false
                if (call_from_refresh) {
                    this.store.failed_files = results
                    return results
                }
                return results

            } catch (error) {
                console.log("Error:", error)
                this.isFetchingData = false
            }
        },
    },
    async created() {
        if (this.store.failed_files && this.store.failed_files.length) return
        this.store.failed_files = await this.fetchFailedFiles()
    },
}
</script>