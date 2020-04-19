<template>
  <div id="app">
    <div class="header">
      <span>Login | Signup</span>
      <!-- <img alt src="https://www17.gogoanime.io/img/bg/share_link_4.png" /> -->
      <div class="share-link">Request | Contact</div>
    </div>
    <div id="nav">
      <img alt src="@/assets/logo.png" />
      <div class="nav-list">
        <router-link to="/">Home</router-link>
        <router-link to="/anime-list">Anime List</router-link>
        <a @mouseout="()=>{visible.display = 'none'}" @mouseover="()=>{visible.display = 'flex'}" id="genre">
          Genre
          <div :style="visible" class="dropdown">
            <a :key="index" href v-for="(item, index) in genre">{{item}}</a>
          </div>
        </a>
        <router-link to="/new-seasons">New Season</router-link>
        <router-link to="/movies">Movies</router-link>
        <router-link to="/popular">Popular</router-link>
      </div>
      <div class="search-bar">
        <input id="search-bar" name="search" type="text" />
        <img alt src="https://www17.gogoanime.io/img/icon/searcch.png" />
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

.header {
  cursor: default;
  width: 100%;
  max-width: 1000px;
  // height: 20px;
  // padding: 0 50px;
  padding: 10px 200px;
  display: flex;
  flex-flow: roww nowrap;
  position: absolute;
  justify-content: space-between;
  font-size: 12px;
  color: grey;
  .share-link {
    text-align: start;
    width: 250px;
    height: 20px;
    // display: block;s
    background-image: url("https://www17.gogoanime.io/img/bg/share_link_4.png");
    background-repeat: no-repeat;
    background-position-x: 80%;
    // background-size: cover;
    // background-clip: padding-box;
    // overflow: hidden;
  }
}
#nav {
  padding: 30px 0;
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
    // width: 500px;
    @extend .flex-row;
    justify-content: center;
    a {
      // font-weight: bold;
      font-size: 16px;
      color: #fff;
      text-decoration: none;
      padding: 2px 0;
      text-transform: uppercase;
      transition: color 0.1s ease-out;
      margin: 0 10px;
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
      right: calc(50% - 200px);
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
  .search-bar {
    margin-left: 120px;
    margin-right: 60px;

    padding: 2px;
    width: fit-content;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: start;
    border: grey 1px solid;
    input {
      background-color: #000;
      line-height: 20px;
      border: none;
    }
    // width: 30px;
    img {
      width: 20px;
      height: 18px;
      padding: 2px 5px;
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