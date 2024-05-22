<template>
    <div class="card shadow border-0 mb-7">
        <div class="card-header">
            <h5 class="mb-0">All Media Overview
                <span @click="fetchAllFiles(true)" style="cursor: pointer;" class="m-5 bi bi-arrow-clockwise sm"
                    aria-hidden="true"></span>

            </h5>
        </div>
        <DashboardTable :isFetchingData="isFetchingData" :files="store.all_files"></DashboardTable>
    </div>
</template>
<script>
import DashboardTable from './DashboardTable.vue'
import { fetchData } from '@/apiService';
import { store } from '@/store'
export default {
    name: "All",
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
        async fetchAllFiles(call_from_refresh = false) {
            this.isFetchingData = true
            try {
                const data = await fetchData(`/files/?user=${this.store.user}`);
                const results = data.results
                this.isFetchingData = false
                if (call_from_refresh) {
                    this.store.all_files = results
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
        if (this.store.all_files && this.store.all_files.length) return
        this.store.all_files = await this.fetchAllFiles()
    },
}
</script>