<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
    <svg v-if='name' class="icon" aria-hidden="true">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
    <div class="content">
      <slot/>
    </div>
  </button>
</template>
<script>
  export default {
props:['name','iconPosition']
  }
</script>
<style lang="scss">
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
    >.icon{
        width: 1em;
        height: 1em;
        fill: currentColor;
        overflow: hidden;
      order:1;
margin-right: 0.3em;
    }
    &.icon-right{
      >.content{
        order:1
      }
      >.icon{
        width: 1em;
        height: 1em;
        fill: currentColor;
        overflow: hidden;
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