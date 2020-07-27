<template>
  <div class="g-row"><slot/></div>
</template>

<script>
  export default {
    name: "Row"
  }
</script>

<style scoped>
.g-row{
  display:flex
}
</style>