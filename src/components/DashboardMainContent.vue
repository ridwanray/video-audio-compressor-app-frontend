<script>
import DashboardStat from './DashboardStat.vue';
import All from './All.vue';
import Cancelled from './Cancelled.vue';
import Completed from './Completed.vue';
import Progress from './Progress.vue';

export default {
    name: 'DashboardMainContent',
    components: {
        DashboardStat,
        All,
        Cancelled,
        Completed,
        Progress,
    },
    data() {
        return {
            currentTab: 'All',
            tabs: ['All', 'Completed', 'Progress', 'Cancelled']
        }
    }
}

</script>

<template>
    <main class="py-6 bg-surface-secondary">
        <div class="container-fluid">
            <!-- Stats -->
            <DashboardStat />

            <ul class="nav nav-tabs mt-4 overflow-x border-0">

                <li class="nav-item" v-for="tab in tabs" :key="tab" @click="currentTab = tab">
                    <a href="#" :class="['nav-link', { active: currentTab === tab }]">{{ tab }}</a>
                </li>
            </ul>

            <component :is="currentTab" class="tab"></component>
        </div>
    </main>
</template>

<style></style>