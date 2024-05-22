<script>
export default {
    name: 'DashboardTableItem',
    props: {
        file: Object,
    },
    computed: {
        isVideoMimeType() {
            return this.file.mimetype.startsWith('video');
        },
        isAudioMimeType() {
            return this.file.mimetype.startsWith('audio');
        },
    }

}
</script>
<template>
    <tr>
        <td>
            <span class="text-right font-semibold" href="#"> <!--Convert byte to MB -->
                {{ (file.original_size).toFixed(2) }} MB 
            </span>
        </td>
        <td>
            <span v-if="file.compression_status == 'COMPLETED'">
                {{ (file.new_size).toFixed(2) }} MB
            </span>
            <span v-else>
                N/A
            </span>
        </td>
        <td>
            <i v-if="isVideoMimeType" class="bi bi-film pe-1"></i>
            <i v-if="isAudioMimeType" class="bi bi-play pe-1"></i>
            <a class="text-heading font-semibold" href="#">
                {{ file.mimetype }}
            </a>
        </td>
        <td>
            {{ file.file_name }}
        </td>
        <td>
            <span class="badge badge-lg badge-dot">
                <i v-if="file.compression_status=='COMPLETED'" class="bg-success"></i>
                <i v-else-if="file.compression_status=='CANCELLED'" class="bg-danger"></i>
                <i v-else="file.compression_status=='COMPLETED'" class="bg-secondary"></i>
                {{file.compression_status}}
            </span>
        </td>
        <td class="text-center">
            <a v-if="file.compression_status=='COMPLETED'" :href="file.url"
             class="btn btn-sm btn-neutral" target="_blank">Compressed File</a>
            <span v-else>N/A</span>

        </td>
        <td class="text-center">
            <a v-if="file.compression_status=='COMPLETED' && isVideoMimeType" :href="file.preview" class="btn btn-sm btn-neutral" target="_blank">10s Preview</a>
            <span v-else>N/A</span>
        </td>

        <td class="text-right">
            <a v-if="file.compression_status=='COMPLETED' && isVideoMimeType" :href="file.thumbnail" class="btn btn-sm btn-neutral" target="_blank">Video thumbnail</a>
            <span v-else>N/A</span>
        </td>
        <td class="text-left">
            <span v-if="file.compression_status=='COMPLETED'" class="btn-sm btn-neutral">{{ file.duration }}</span>
            <span v-else>N/A</span>
    
        </td>

    </tr>
</template>
