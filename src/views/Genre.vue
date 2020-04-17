<template>
  <div class="genre">
    <div class="wrapper">
      <a :key="index" :title="item" href v-for="(item, index) in genre">{{item}}</a>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.genre {
  // TODO:
  width: 600px;
  flex: 1;
  // align-self: flex-start;
  .wrapper {
    height: 400px;
    display: flex;
    flex-flow: column wrap;
    a {
      color: #ffc119;
      font-size: 18px;
      // font-weight: 600;
      text-decoration: none;
    }
  }
}
</style>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class Genre extends Vue {
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
}
</script>