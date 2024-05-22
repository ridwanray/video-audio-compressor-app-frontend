import { reactive } from 'vue'


export const store = reactive({
  user: null,
  all_files:[],
  uploaded_files:[],
  compressed_files:[],
  failed_files:[],
  progress_files:[],
  stat: {
    uploaded: 0,
    compressed: 0,
    failed: 0,
    in_progress: 0
  }

})