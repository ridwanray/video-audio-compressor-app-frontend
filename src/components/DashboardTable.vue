<template>
    <div class="table-responsive">
        <table class="table table-hover table-nowrap">
    <DashboardTableHeader />
    <tbody>
        <tr v-if="isFetchingData">
            <td colspan="100" style="text-align: center;">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            </td>
        </tr>
        <DashboardTableItem :key="file.id" v-else v-for="file in files" :file="file" />

        <tr class="text-right" v-if="!files.length">
            <td colspan="100" class="h1 font-bold">
                No file to show here.
            </td>
        </tr>
    </tbody>
</table>

    </div>
</template>
<script>
import DashboardTableHeader from './DashboardTableHeader.vue';
import DashboardTableItem from './DashboardTableItem.vue';
export default {
    name: 'DashboardTable',
    components: {
        DashboardTableHeader,
        DashboardTableItem,
    },
    props: {
        files:{
            type:Array,
            default:[],
        },
        isFetchingData: {
            type: Boolean,
            default: false
        },
    },
}
</script>
