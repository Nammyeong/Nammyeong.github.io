<template>
  <div>
    <div class="play-bar" :style="{backgroundColor: backgroundColor}" >
      <img :src="song.img" alt="">
      <div class="playing" @click="showPanel">
        <p class="name">{{song.name}}</p>
        <p class="author">{{song.author}}</p>
      </div>
      <div class="tool">
        <i class="fa fa-backward" aria-hidden="true"></i>
        <i :class="classObj" aria-hidden="true" id="play-btn" @click="tooglePlay"></i>
        <i class="fa fa-forward" aria-hidden="true"></i>
      </div>
    </div>
    <transition name="slide">
      <div class="play-panel" v-show="isPanel">
        <i class="fa fa-chevron-down close-btn" aria-hidden="true" @click="hidePanel"></i>
        <div class="bg"></div>
        <div class="song-img">
          <div class="turn-wrap">
            <div class="rollwrap">
              <div class="default-img" :class="{circle:playing}">
                <img :src="song.img" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="song-detail">
          <p class="name">{{song.name}}</p>
          <p class="author">{{song.author}}</p>
          <p class="lyric">***暂无歌词***</p>
        </div>
        <div class="tool">
          <i class="fa fa-backward" aria-hidden="true"></i>
          <i :class="classObj" aria-hidden="true" class="play-btn" @click="tooglePlay"></i>
          <i class="fa fa-forward" aria-hidden="true"></i>
        </div>
      </div>
    </transition>
    <audio
    :src="song.songUrl"
    id="audio"
    ></audio>
  </div>
</template>
<script>
export default {
  data () {
    return {
      song: {
        img: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001QwIsj0sYA0A.jpg?max_age=2592000',
        name: '山海',
        author: '华晨宇',
        songUrl: 'http://dl.stream.qqmusic.qq.com/C400002PttbC4ShLBP.m4a?vkey=7D9AB2E8E45F841297D9DCE4975BA8C7E92C7C21B85CC9878EDC95B808C06FFF1D0F61E64DDE9F380C93575F8A9769ED6C51750F953B7B46&guid=101568130&uin=0&fromtag=66'
      },
      backgroundColor: '#d43c33',
      playing: false,
      isPanel: false
    }
  },
  computed: {
    classObj: function () {
      return {
        'fa': true,
        'fa-play-circle-o': !this.playing,
        'fa-pause-circle-o': this.playing
      }
    }
  },
  methods: {
    tooglePlay () {
      let audio = document.getElementById('audio')
      if (this.playing) {
        audio.pause()
      } else {
        audio.play()
      }
      this.playing = !this.playing
    },
    showPanel () {
      this.isPanel = true
    },
    hidePanel () {
      this.isPanel = false
    }
  }
}
</script>
<style lang="scss" scoped>
.play-bar{
  height: 1rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  z-index: 2;
  img{
    width: 0.6rem;
    height: 0.6rem;
    margin: 0 0.2rem;
  }
  .playing{
    color: #fff;
    flex: 1;
    .name{
      font-size: 0.32rem;
    }
    .author{
      font-size: 0.24rem;
    }
  }
  .tool{
    font-size: 0.6rem;
    color: #fff;
    margin-right: 0.4rem;
    #play-btn{
      padding: 0 0.3rem
    }
  }
}

@-webkit-keyframes circling {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg)
  }
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn)
  }
}

  @keyframes circling {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg)
  }

  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn)
  }
}
.play-panel{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-width: 6.4rem;
  overflow: hidden;
  z-index: 3;
  .close-btn{
    color: #fff;
    z-index: 4;
    position: relative;
    top: 0;
    left: 0.2rem;
    font-size: 0.62rem;
  }
  .bg{
    background-image: url("//music.163.com/api/img/blur/109951163253315098");
    background-color: #20add8;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: auto 100%;
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    -webkit-transform-origin: center top;
    transform-origin: center top;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 100%;
    overflow: hidden;
    z-index: 3;
    -webkit-transition: opacity .3s linear;
    transition: opacity .3s linear;
    &:after{
      content: ''; 
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      background-color: rgba(0,0,0,.5);
    }
  }
  .song-img{
    width: 5.92rem;
    height: 5.92rem;
    margin: 0 auto;
    position: relative;
    &:after{
      content: " ";
      position: absolute;
      top: -63px;
      left: 107px;
      z-index: 5;
      width: 84px;
      height: 122px;
      background: url(//s3.music.126.net/m/s/img/needle.png?702cf6d…) no-repeat;
      background-size: contain;
    }
    .turn-wrap{
      width: 100%;
      height: 100%;
      &:before{
        content: " ";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 3;
        background: url(//s3.music.126.net/m/s/img/disc.png?d3bdd10…) no-repeat;
        background-size: contain;
      }
      .rollwrap{
        width: 184px;
        height: 184px;
        margin: -92px 0 0 -92px;
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 3;
        .circle{
          animation: circling 20s infinite linear;
        }
        .default-img{
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          background: url(//s3.music.126.net/m/s/img/disc_default.png?7c9b3ad…) no-repeat;
          background-size: contain;
          img{
            width: 100%;
            vertical-align: middle;
          }
        }
      }
    }
  }
  .song-detail{
    position: relative;
    z-index: 3;
    margin-top: 0.4rem;
    p{
      font-size: 0.36rem;
      color: #fff;
      text-align: center;
      &.lyric{
        font-size: 0.24rem;
        margin-top: 0.3rem;
      }
    }
  }
  .tool{
    position: absolute;
    bottom: 1rem;
    z-index: 3;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    font-size: 0.8rem;
    .play-btn{
      padding: 0 0.2rem;
    }
  }
}
</style>
