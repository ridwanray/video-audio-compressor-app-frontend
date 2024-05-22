<template>
    <div class="card shadow border-0 mb-7">
        <div class="card-header">
            <h5 class="mb-0">Completed Media Overview  <span  @click="fetchCompressedFiles(true)" style="cursor: pointer;" class="m-5 bi bi-arrow-clockwise sm" aria-hidden="true"></span></h5>
        </div>
        <DashboardTable :isFetchingData="isFetchingData" :files="store.compressed_files"></DashboardTable>
    </div>
</template>
<script>
import DashboardTable from './DashboardTable.vue'
import { store } from '@/store'
import { fetchData } from '@/apiService';

export default {
    name: "Completed",
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
        async fetchCompressedFiles(call_from_refresh = false) {
            this.isFetchingData = true
            try {
                const data = await fetchData(`/files/?user=${store.user}&compression_status=COMPLETED`);
                const results = data.results
                this.isFetchingData = false
                if (call_from_refresh) {
                    this.store.compressed_files = results
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
        if (this.store.compressed_files && this.store.compressed_files.length) return
        this.store.compressed_files = await this.fetchCompressedFiles()
    },

}
</script>