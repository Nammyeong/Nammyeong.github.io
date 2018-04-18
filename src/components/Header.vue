<template>
<div class="header" :style="{backgroundColor: backgroundColor}">
  <div class="title line-bottom">云音乐</div>
  <div class="tab">
    <div class="item">
      <router-link to="/rec">推荐音乐</router-link>
    </div>
    <div class="item">
      <router-link to="/hot">热歌榜</router-link>
    </div>
    <div class="item">
      <router-link to="/search">搜索</router-link>
    </div>
  </div>
</div>
</template>
<script type="text/ecmascript-6">
/* eslint-disable */ 
export default {
	data () {
		return {
			backgroundColor: '#d43c33'
		}
	}
}
</script>
<style lang="scss">
	.header {
		font-size: 0.36rem;
		height: 1.8rem;
		color: #fff;
		.title {
			text-align: center;
			height: 0.9rem;
			line-height: 0.9rem;
		}
		.tab {
			display: flex;
			align-items: center;
      justify-content: space-around;
      a {
        color: #fff;
        padding: 0.1rem;
        display: inline-block;
        border-bottom: 1px solid transparent;
        &.router-link-active {
          border-bottom: 1px solid #fff;
        }
      }
		}
	}
</style>
