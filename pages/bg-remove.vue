<template>
  <div>
    <h1>Background Remover</h1>
    <input type="file" @change="uploadImage" accept="image/*">
    <img v-if="imageUrl" :src="imageUrl" alt="Uploaded Image" style="max-width: 300px;">
    <button @click="removeBackground" :disabled="!imageUrl">Remove Background</button>
    <img v-if="removedBgUrl" :src="removedBgUrl" alt="Background Removed" style="max-width: 300px;">
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: null,
      removedBgUrl: null
    };
  },
  methods: {
    uploadImage(event) {
      const file = event.target.files[0];
      this.imageUrl = URL.createObjectURL(file);
    },
    async removeBackground() {
      // Simulate background removal
      this.removedBgUrl = 'https://via.placeholder.com/300x200/0000FF/808080%20C/O%20https://placeholder.com/'; // Replace with actual API call later
    }
  }
};
</script>
