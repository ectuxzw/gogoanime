<template>
  <div class="gallery">
    <div class="title-bar">
      <img alt class="anime_name_img_recent_release" src="@/assets/bg/recent_release.png" />
      <span>{{title}}</span>
      <div class="pages">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
    </div>
    <div class="content">
      <anime-item
        :imgUrl="item.imgUrl"
        :key="index"
        :latestEpisode="item.latestEpisode"
        :name="item.name"
        v-for="(item, index) in animeList"
      ></anime-item>
    </div>
  </div>
</template>

<style lang='scss' >
.gallery {
  width: 100%;
  border: #a1a1a1 1px solid;
  .title-bar {
    background-color: #ffc119;
    max-height: 40px;
    display: flex;
    flex-flow: row nowrap;
    img {
      // position: relative;
      // margin-bottom: 0;
      width: 60px;
      margin-top: -17px;
      margin-left: 5px;
      height: 56px;
    }
    span {
      flex: 1;

      padding-left: 5px;
      text-transform: uppercase;
      align-self: start;
      text-align: start;
      // align-items: center;
      line-height: 40px;
      font-size: 14px;
      font-weight: bold;
      text-shadow: grey 1px 1px 2px;
    }
    .pages {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-end;
      :nth-child(1) {
        background-color: #00a651;
        color: #fff;
      }
      div {
        cursor: pointer;
        font-size: 12px;
        padding: 8px 10px;

        // background-color: #fff;
        color: #000;
        align-self: center;
        text-align: center;
      }
    }
  }

  .content {
    padding: 0 0 0 15px;
    display: flex;
    flex-flow: row wrap;
    // flex-wrap: wrap;
  }
}
</style>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
import AnimeItem from '@/components/sub-components/AnimeItem.vue';
@Component({
  components: {
    AnimeItem,
  },
})
export default class Gallery extends Vue {
  @Prop()
  public title!: string;

  @Prop()
  public animeList!: any[];
}
</script>