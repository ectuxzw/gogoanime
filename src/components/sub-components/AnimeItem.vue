<template>
  <a class="anime-item" href>
    <div class="img">
      <img :src="imgUrl" alt />
    </div>
    <span class="name">{{name}}</span>
    <span>Episode {{latestEpisode}}</span>
  </a>
</template>

<style lang='scss' scoped>
.anime-item {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  margin: 20px 15px 20px 0;
  width: 160px;
  height: 280px;

  font-weight: bold;
  text-decoration: none;
  .img {
    height: 210px;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
    }
  }
  .name {
    margin: 2px 0;
    color: #f6c348;
    font-size: 14px;
    max-height: 34px;

    overflow: hidden;
    text-overflow: ellipsis;
    // height: ;
    transition: color 0.2s ease-out;

    &:hover {
      color: #fff;
      transition: all 0.2s ease-in;
    }
  }
  span {
    color: #fff;
    font-size: 12px;
    // justify-self: flex-end;
  }
}
</style>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class AnimeItem extends Vue {
  @Prop()
  public imgUrl!: string;
  @Prop()
  public name!: string;
  @Prop()
  public latestEpisode!: number;
}
</script>