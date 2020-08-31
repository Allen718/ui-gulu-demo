<template>
  <div class="collapse-item">
    <div class="title" @click="toggle">
      {{title}}
    </div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Vue from "vue"
  export default {
    name: "Collapse-item",
    inject:['eventBus'],
    props: {
      title: {
        type: String,
        required: true,
      },
      name:{
        type:String,
        required:true
      }
    },

    data() {
      return {
        open: false,

      }
    },

    methods: {
      toggle() {
        if (this.open === false) {
          this.eventBus && this.eventBus.$emit("add:selected", this.name)
        } else {
          this.eventBus.$emit('remove:selected',this.name)
           this.open = false
        }
      }
    },
    mounted() {
      this.eventBus && this.eventBus.$on("update:selected", (names) => {
        if (names.indexOf(this.name)>=0) {
          this.open=true
        }else{
          this.open=false
        }
      })
    }
  }

</script>

<style lang="scss" scoped>
  .collapse-item {
    > .title {
      border: 1px solid grey;
      margin-top: -1px;
      margin-right: -1px;
      margin-left: -1px;
      min-height: 32px;
      padding: 0 8px;
    }

    > .content {
      padding: 0 8px;
    }

    &:first-child {
      > .title {

        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }


    }

    &:last-child {
      > .title:last-child {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        border-bottom: none;


      }
    }
  }
</style>