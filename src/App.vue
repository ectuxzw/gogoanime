<template>
  <div id="app">
    <div id="nav">
      <img alt src="@/assets/logo.png" />
      <div class="nav-list">
        <router-link to="/">Home</router-link>
        <router-link to="/anime-list">AnimeList</router-link>
        <!-- <router-link to="/genre">Genre</router-link> -->
        <a @mouseout="()=>{visible.display = 'none'}" @mouseover="()=>{visible.display = 'flex'}" id="genre">
          Genre
          <div :style="visible" class="dropdown">
            <a :key="index" href v-for="(item, index) in genre">{{item}}</a>
          </div>
        </a>
        <router-link to="/new-seasons">NewSeason</router-link>
        <router-link to="/popular">Popular</router-link>
      </div>
    </div>
    <router-view />
    <footer>
      <router-link to="/about">Abouts us |</router-link>
      <img @click="scrollToTop()" alt="top" src="https://www17.gogoanime.io/img/bg/croll.png" />
    </footer>
  </div>
</template>

<style lang="scss">
html {
  display: flex;
  flex-flow: column;
  body {
    font-family: myFirstFont, MyFont_IE, Tahoma, Geneva, sans-serif;
    font-weight: 400;

    align-self: center;
    background: #000;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    padding: 0;
    margin: 0;
  }
}
::-webkit-scrollbar {
  width: 0;
}
.flex-row {
  display: flex;
  flex-flow: row nowrap;
}
#app {
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  // align-self: center;
  // font-family: Tahoma, Geneva, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  min-height: 100vh;
}

#nav {
  padding: 30px;
  height: 60px;
  @extend .flex-row;
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  width: 100vw;
  img {
    // width: auto;
    padding: 0 40px;
    height: 54px;
    aspect-ratio: 1;
  }
  .nav-list {
    width: 500px;
    @extend .flex-row;
    justify-content: space-evenly;
    a {
      // font-weight: bold;
      font-size: 16px;
      color: #fff;
      text-decoration: none;
      padding: 2px 0;
      text-transform: uppercase;
      transition: color 0.1s ease-out;
      &:hover,
      &.router-link-exact-active {
        color: #ffc119;
        border-bottom: 2px solid #ffc119;
        transition: color 0.1s ease-in;
      }
    }
    .dropdown {
      background-color: #000;
      position: absolute;
      top: 73px;
      right: calc(50% - 400px);
      width: 400px;
      height: 400px;
      display: flex;
      flex-flow: column wrap;
      box-shadow: #111 -5px 5px 10px;
      padding: 20px 5px;
      transition: all 0.2s ease-in-out;

      a {
        text-transform: capitalize;
        font-size: 16px;
        // font-weight: normal;
        color: grey;
        &:hover {
          // background-color: ;
          color: #ffc119;
          border: none;
        }
      }
    }
  }
}
footer {
  // bottom: 0;
  width: 100%;
  align-self: center;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  a {
    margin: 0 10px;
    color: #fff;
    text-decoration: none;
  }
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component({})
export default class App extends Vue {
  public visible: any = { display: 'none' };

  public genre: any[] = [
    'Action',
    'Adventure',
    'Cars',
    'Comedy',
    'Dementia',
    'Demons',
    'Drama',
    'Ecchi',
    'Fantasy',
    'Game',
    'Harem',
    'Historical',
    'Horror',
    'Josei',
    'Kids',
    'Magic',
    'Martial Arts',
    'Mecha',
    'Military',
    'Music',
    'Mystery',
    'Parody',
    'Police',
    'Psychological',
    'Romance',
    'Samurai',
    'School',
    'Sci-Fi',
    'Seinen',
    'Shoujo',
    'Shoujo Ai',
    'Shounen',
    'Shounen Ai',
    'Slice of Life',
    'Space',
    'Sports',
    'Super Power',
    'Supernatural',
    'Thriller',
    'Vampire',
    'Yaoi',
    'Yuri',
  ];
  /**
   * scrollToTop
   */
  public async scrollToTop() {
    const y = window.pageYOffset;
    window.scrollTo(0, 0);
  }
}
</script>