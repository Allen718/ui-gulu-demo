<template>
  <div class="collapse">
    <slot>

    </slot>
  </div>
</template>

<script>
  import Vue from "vue"

  export default {
    name: "Collapse",
    props: {
      single: {
        type: Boolean,
        default: true

      },
      selected: {
        type: String,

      }
    },

    data() {
      return {eventBus: new Vue()}
    },
    provide() {
        return {eventBus: this.eventBus}
    },
    mounted() {
      this.eventBus.$emit('update:selected',this.name)
    }

  }
</script>

<style lang="scss" scoped>
  $border-color: grey;
  $border-radius: 4px;
  .collapse {
    border: 1px solid $border-color;
    border-radius: $border-radius;

  }
</style>