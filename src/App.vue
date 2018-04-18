<template>
  <div id="app">
    <v-header></v-header>
    <transition name="show">
      <router-view></router-view>
    </transition>
    <play-bar></play-bar>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import PlayBar from './components/PlayBar.vue'
export default {
  name: 'App',
  components: {
    'v-header': Header,
    'play-bar': PlayBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.show-enter-active {
  transition: all .4s ease;
}
.show-leave-active {
  transition: all 0 ease-out;
}
.show-enter, .show-leave-active {
  transform: translateX(-350px);
  opacity: 0;
}
</style>
