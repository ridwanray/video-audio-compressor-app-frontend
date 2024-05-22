<template>
    <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <DashboardVerticalNav />

        <div class="h-screen flex-grow-1 overflow-y-lg-auto">
            <DashboardHeader />
            <DashboardMainContent />
        </div>
    </div>
</template>

<script>
import DashboardVerticalNav from '../components/DashboardVerticalNav.vue'
import DashboardHeader from '../components/DashboardHeader.vue'
import DashboardMainContent from '../components/DashboardMainContent.vue'

export default {
  name: 'Dashboard',

  components: {
    DashboardVerticalNav,
    DashboardHeader,
    DashboardMainContent,
  },
}

</script>


<style scoped>
@import url(https://unpkg.com/@webpixels/css@1.1.5/dist/index.css);
@import url("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.4.0/font/bootstrap-icons.min.css");
</style>