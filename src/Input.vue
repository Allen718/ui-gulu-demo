<template>
  <div class="wrapper" :class="{error}">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
    @change="$emit('change',$event)" @input="$emit('input',$event.target.value)"
       @blur="$emit('blur',$event)" @focus="$emit('focus',$event)"/>
    <template v-if="error">
      <icon class="icon-error" name="error"></icon>
      <span>{{error}}</span>
    </template>
  </div>
</template>
<script>
  import Vue from 'vue'
  import icon from './Icon'
  Vue.component('icon',icon)
  export default {
    name: "Input",
    props: {
      value: {
        type: String,
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false,

      },
      error: {
        type: String,
      }


    }
  }
</script>

<style lang="scss" scoped>
  $border-color: #999;
  $height: 32px;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 14px;
  $box-shadow-color: rgba(0, 0, 0, 0.5);
  $red: #F1453D;
  .wrapper {
    display: inline-block;align-items: center;justify-content: center;

    > input {
      height: $height;
      border: 1px solid $border-color;
      padding: 0 8px;
      border-radius: $border-radius;
      font-size: $font-size;

      &:hover {
        border-color: $border-color-hover;
      }

      &:focus {
        box-shadow: inset 0 1px 2px $box-shadow-color;
        outline: none;
      }

      &[disabled] {
        border-color: #aaa;
        color: #aaa;
        cursor: not-allowed;
      }

      &[readonly] {
        border-color: #aaa;
        color: #aaa;

      }
    }

    &.error {
      > input {
        border-color: $red;
      }

      > .icon-error {
        fill: $red
      }

      > span {
        color: $red;
      }
    }
  }

</style>