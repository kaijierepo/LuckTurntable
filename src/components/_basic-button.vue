<template>
  <div>
    <button style="width:200px, background: red" class="test">
      <slot />
    </button>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.test {
  background: red;
}
</style>
