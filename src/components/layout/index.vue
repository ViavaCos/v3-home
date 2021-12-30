<template>
  <div class="layout">
    <Header />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
export default {
  name: 'Layout',
  components: {
    Header
  }
}
</script>

<style>

</style>