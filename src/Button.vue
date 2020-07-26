<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <icon  v-if="loading"   class="loading icon" name="load-5"></icon>
    <icon class="icon"  v-if='icon&&!loading' :name='icon'></icon>
    <div class="content">
      <slot/>
    </div>
  </button>
</template>
<script>
  import Vue from 'vue'
  import icon from './Icon'
  Vue.component('icon',icon)
  export default {
    name:'Button',
props:{
icon:{},
  loading:{
  type:Boolean,
    default:false,
  },
  iconPosition:{
    type:String,
    default:'left',
    validator(value){
      return value === 'left' || value === 'right'
    }
  }
}
  }
</script>
<style lang="scss" scoped>
  @keyframes spin {
   0%{transform: rotate(0deg)}

  100%{transform:rotate(360deg);
  }}
  .g-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    >.content{
      order:2
    }
    >.loading{
      animation: spin 1s infinite linear;
    }
    >.icon{
      order:1;
      margin-right: 0.3em;
    }
    &.icon-right{
      >.content{
        order:1
      }
      >.icon{
        order:2;
        margin-right: 0;
        margin-left: 0.3em;

      }
    }
    &:hover {
      border-color: var(--border-color-hover);
    }

    &:active {
      background-color: var(--button-active-bg);
    }

    &:focus {
      outline: none;
    }
  }

</style>