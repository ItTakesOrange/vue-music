<template>
  <div class="music-list">
    <div class="back">
      <i class="icon-back"></i>
    </div>
    <div class="title" v-html="title"></div>
    <div class="bg-image" :style="bgStyle" ref="bgImage">
      <div class="filter"></div>
    </div>
    <scroll :data="songs" class="list" ref="list">
      <div class="song-list-wrapper">
        <song-list :songs="songs"></song-list>
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'base/scroll/scroll'
  import SongList from 'base/song-list/song-list'
  import { mapGetters } from 'vuex'

  export default {
    props: {
      bgImage: {
        type: String,
        default: ''
      },
      songs: {
        type: Array,
        default: []
      },
      title: {
        type: String,
        default: ''
      }
    },
    computed: {
      bgStyle () {
        return `background-image: url(${this.bgImage})`
      }
    },
    mounted () {
      this.$refs.list.$el.style.top = `${this.$refs.bgImage.clientHeight}px`
    },
    components: {
      Scroll,
      SongList
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"

  .music-list
    position: fixed
    z-index: 100
    left: 0
    top: 0
    right: 0
    bottom: 0
    background-color: $color-background 
    .back
      position: absolute
      top: 0
      left: 6px
      z-index: 50
      .icon-back
        display: block
        padding: 10px
        font-size: $font-size-large-x
        color: $color-theme
    .title
      position: absolute
      top: 0
      left: 10%
      z-index: 40
      width: 80%
      text-align: center
      line-height: 40px
      font-size: $font-size-large-x
      color: $color-text
    .bg-image
      position: relative
      width: 100%;
      height: 0
      padding-top: 70%
      transform-origin: top
      background-size: cover
      .filter
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        background: rgba(7, 17, 27, 0.4)
    .list
      position: fixed
      top: 0
      bottom: 0
      width: 100%
      background: $color-background
      .song-list-wrapper
        padding: 20px 30px
</style>
