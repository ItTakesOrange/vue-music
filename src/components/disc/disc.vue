<template>
  <transition name="slide">
    <music-list v-if="songs.length > 0" :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>

<script>
  import MusicList from 'components/music-list/music-list'
  import { getSongList } from 'api/recommend'
  import { ERR_OK } from 'api/config'
  import { createSong } from 'common/js/song'
  import { mapGetters } from 'vuex'

  export default {
    name: 'Disc',
    data () {
      return {
        songs: []
      }
    },
    computed: {
      title () {
        return this.disc.dissname
      },
      bgImage () {
        return this.disc.imgurl
      },
      ...mapGetters([
        'disc'
      ])
    },
    created () {
      this._getSongList()
    },
    methods: {
      _getSongList () {
        if (!this.disc.dissid) {
          this.$router.push('/recommend')
          return
        }
        getSongList(this.disc.dissid).then(res => {
          if (res.code === ERR_OK) {
            this.songs = this._normalizeSongs(res.cdlist[0].songlist)
          }
        })
      },
      _normalizeSongs (list) {
        let ret = []
        list.forEach(item => {
          let musicData = {
            songid: item.id,
            songmid: item.mid,
            singer: item.singer,
            songname: item.name,
            albummid: item.album.mid,
            albumname: item.album.name,
            interval: item.interval,
            image: `https://p.qpic.cn/music_cover/z6iaBQ7jDmibXhEAlvTSQvnxCL0D1HPLcrP0eKibibp3Htnc0ajsKwnhkA/300?n=1`
          }

          if (musicData.songid && musicData.albummid) {
            ret.push(createSong(musicData))
          }
        })
        return ret
      }
    },
    components: {
      MusicList
    }
  }
</script>

<style lang="stylus" scoped>
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
