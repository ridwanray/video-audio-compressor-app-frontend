
<template>
  <div class="home-container">
    <h2 style="text-decoration-line: overline underline; font-family: 'Courier New', Courier, monospace;">EasyCompress
    </h2>
    <h1>Video & Audio Compressor</h1>
    <p>Reduce the size of your videos and audio files without losing quality.</p>

    <form @submit.prevent="proceedToDashboard">
      <input v-model.trim="user" type="text" autocomplete="off" placeholder="Enter your name" required>
      <button type="submit">Proceed</button>
    </form>
  </div>
</template>

<script>
import { store } from '@/store.js'

export default {
  
  name: 'Home',
  data() {
    return {
      user:"",
      store,
    }
  },

  methods: {
    proceedToDashboard() {
      this.store.user = this.user
      this.$router.push("/dashboard");
    }
  },
}
</script>


<style scoped>
.home-container {
  align-items: center;
  width: 40%;
  margin: 0 auto;
  justify-content: center;
  text-align: center;
  margin-top: 250px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgb(213, 205, 205);
  padding: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  color: #888;
}

input[type="text"] {
  width: 80%;
  padding: 10px 15px;
  margin-top: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 15px;
}

button:hover {
  background-color: #0067cc;
}
</style>
