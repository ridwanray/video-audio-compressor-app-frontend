<template>
    <header class="bg-surface-primary border-bottom pt-6">
        <div class="container-fluid">
            <div class="mb-npx">
                <div class="row align-items-center">
                    <div class="col-sm-6 col-12 mb-4 mb-sm-0">
                        <h1 class="h2 mb-0 ls-tight">Hi {{ store.user }},</h1>
                    </div>

                    <div class="col-sm-6 col-12 text-sm-end">
                        <div class="mx-n1">
                            <UploadNewFile />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import UploadNewFile from './UploadNewFile.vue'
import { store } from '@/store';
export default {
    name: 'DashboardHeader',
    components: {
        UploadNewFile,
    },
    data() {
        return {
            store
        }
    },
}
</script>