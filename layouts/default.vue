<template>
  <Header />
  <slot />
  <Footer />
</template>

<script setup lang="ts">
import Footer from '@/layouts/footer.vue'
import Header from '@/layouts/header.vue'
</script>

