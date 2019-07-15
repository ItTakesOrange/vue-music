export default class Song {
  constructor ({ id, mid, singer, name, album, duration, image, url }) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }
}

export function createSong (musicData) {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    url: `http://ws.stream.qqmusic.qq.com/C400003iHc0e2UIgMC.m4a?guid=7134196724&vkey=67B6268A61FD21B0CABFA4662ADD51BFD82940A1DA747AC5CB594563D634447F74F128EB2950F4BF7F02F7BCDADF4B8CD31DB657FD34F92F&uin=0&fromtag=66`
  })
}

function filterSinger (singer) {
  let ret = []
  if (!singer) return ''
  singer.forEach(s => {
    ret.push(s.name)
  })
  return ret.join('/')
}
