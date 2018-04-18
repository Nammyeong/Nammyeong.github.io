<template>
  <div class="recommend">
    <div class="rec-wrap">
      <div class="title">推荐歌单</div>
      <div class="rec-ul">
        <div class="rec-ul-li" v-for="item in recList" :key="item.id">
          <a href="">
            <div class="rec-img">
              <img :src="item.img" alt="">
              <span>{{item.lnum}}</span>
            </div>
            <p>{{item.text}}</p>
          </a>
        </div>
      </div>
    </div>
    <div class="new-wrap">
      <div class="title">最新音乐</div>
      <ul class="new-ul">
        <li v-for="item in newList" :key="item.id" class="f-bd f-bd-btm">
          <div class="song">
            <p class="name">{{item.name}} <span>{{item.song.alias.length>0 ? item.song.alias[0]:''}}</span> </p>
            <p class="artists">{{item.song.artists[0].name}}-{{item.song.album.name}}</p>
          </div>
          <div class="play-btn"><span></span></div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import mockRec from '../mock/rec.js'
import mockNew from '../mock/newSong.js'
export default {
  name: 'Recommend',
  data () {
    return {
      recList: [],
      newList: []
    }
  },
  created () {
    this.getRecList()
    this.getNewList()
  },
  methods: {
    getRecList () {
      // get data
      this.recList = mockRec
    },
    getNewList () {
      this.newList = mockNew.result
    }
  }
}
</script>
<style lang="scss" scoped>
  .recommend {
    .title {
      font-size: 0.34rem;
      padding-left: 0.1rem;
      margin: 0.2rem 0;
      position: relative;
      &:before {
        content: " ";
        position: absolute;
        left: 0;
        top: 50%;
        margin-top: -9px;
        width: 2px;
        height: 16px;
        background-color: #d33a31;
      }
    }
    .rec-ul {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .rec-ul-li {
        width: 2.45rem;
        margin-bottom: 0.3rem;
        a{
          color: #000;
          font-size: 0.24rem;
          .rec-img{
            position: relative;
            img{
              width: 2.45rem;
              height: 2.45rem;
            }
            span{
              position: absolute;
              top: 2px;
              right: 2px;
              color: #fff;
              text-shadow: 1px 0 0 rgba(0,0,0,.15);
            }
          }
          p{
            padding: 5px 0 0 5px;
          }
        }
      }
    }
    .new-ul {
      li {
        display: flex;
        padding:0 0.1rem;
        .song{
          flex: 1;
          padding: 5px 0;
          overflow: hidden;
          .name {
            font-size: 0.34rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-break: break-all;
            span{
              color: #888;
              padding-left: 0.1rem;
            }
          }
          .artists {
            font-size: 0.24rem;
            color: #888888;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-break: normal;
          }
        }
        .play-btn{
          display: flex;
          align-items: center;
          padding: 0 0.1rem;
          span{
            display: inline-block;
            width: 0.44rem;
            height: 0.44rem;
            background: url(//s3.music.126.net/m/s/img/index_icon_2x.png?5207a28…) no-repeat;
            background-position: -18px 0;
            background-size: 2.9rem 1.7rem;
          }
        }
      }
    }
  }
</style>
