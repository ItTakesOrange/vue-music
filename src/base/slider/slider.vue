
<template>
  <div class="slide">
    <div class="slide-group">
      <slot></slot>
    </div>
    <div class="dots">

    </div>
  </div>
</template>

<script>
export default {
  name: 'slider',
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 400
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'

.slider
  min-height: 1px
  .slide-group
    position: relative
    overflow: hidden
    white-space: nowrap
    .slide-item
      float: left
      box-sizing: border-box
      overflow: hidden
      text-align: center
      a
        display: block
        width: 100%
        overflow: hidden
        text-decoration: none
      img
        display: block
        width: 100%
</style>
