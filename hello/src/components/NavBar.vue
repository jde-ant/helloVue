<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <nav>
      <router-link :to="{ name: 'bio' }">About me</router-link> |
      <router-link :to="{ name: 'projects' }">Projects</router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  display: block;
}
</style>
