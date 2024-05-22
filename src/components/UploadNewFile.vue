<template>
    <form @submit.prevent="onFileSubmit">
        <input type="file" class="file-upload" ref="fileInput" required> <!-- accept="audio/*,video/*" -->
        <button type="submit" class="btn d-inline-flex btn-sm btn-primary mx-1" :disabled="isBtnDisabled">
            <span v-if="isFileUploading" class="spinner-border spinner-border-sm " role="status" aria-hidden="true"></span>

            <span class="px-2">Upload & Compress</span>
            <span class="pe-2">
                <i class="bi bi-folder"></i>
            </span>
        </button>
    </form>
</template>
<script>
import { store } from '@/store';
import { useToast } from "vue-toastification";

export default {
    name: 'UploadNewFile',

    data() {
        return {
            store,
            isFileUploading: false,
            isBtnDisabled: false
        }
    },

    methods: {
        async onFileSubmit() {
           
            try {
                this.isBtnDisabled = true
                this.isFileUploading = true
                const file = this.$refs.fileInput.files[0];

                const formData = new FormData();
                formData.append("upload", file);
                formData.append("user", store.user)

                const response = await fetch(`http://127.0.0.1:8000/api/v1/files/`, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        Accept: "application/json",
                    },
                })
                if (!response.ok) {
                    throw new Error('Network response was not ok' + response.statusText);
                }
                const data = await response.json()
                const toast = useToast();
                toast.success("File uploaded successfully!",{position: "top-right"})
                this.isBtnDisabled = false;
                this.isFileUploading = false;
                store.progress_files = [data, ...store.progress_files];
                store.all_files = [data, ...store.all_files];
                store.stat.uploaded++;
                store.stat.in_progress++;
            } catch (error) {
                this.isBtnDisabled = false;
                this.isFileUploading = false;
                console.log("JS ERROR", error);
            }


        }
    }
};
</script>

<style scoped>
.file-upload {
    display: inline-block;
    padding: 8px 12px;
    margin-bottom: 2px;
    cursor: pointer;
}

.file-upload:hover {
    background-color: #e0e0e0;
}

.file-upload input[type="fcompression_statusile"] {
    display: none;
}
</style>