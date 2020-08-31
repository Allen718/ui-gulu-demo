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
        type: Array,
        default(){
          return []
        }

      }
    },
    data() {
      return {eventBus: new Vue()}
    },

    provide() {
      return {eventBus: this.eventBus}
    },

    mounted() {
     let selectedCopy=JSON.parse(JSON.stringify(this.selected))
      this.eventBus.$emit("update:selected", selectedCopy)
      this.eventBus.$on("add:selected", (name) => {
        if (this.single) {
          selectedCopy = [name]
        } else {
          selectedCopy.push(name)}
        this.eventBus.$emit("update:selected", selectedCopy)
        this.$emit("update:selected", selectedCopy)
      })
      this.eventBus.$on("remove:selected", (name) => {
        const index = selectedCopy.indexOf(name)
        if(this.single){
          selectedCopy=[name]
        }else{
       selectedCopy.splice(index, 1)
        }
        this.eventBus.$emit("update:selected",  selectedCopy.splice(index, 1))
        this.$emit("update:selected", selectedCopy)
      })

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