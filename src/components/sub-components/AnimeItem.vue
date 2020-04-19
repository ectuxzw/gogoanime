<template>
  <div class="anime-item" href>
    <div class="img">
      <img :src="imgUrl" alt />
    </div>
    <span class="name">{{name}}</span>
    <span>Episode {{latestEpisode}}</span>
    <div class="overview">
      <div class="img-wrapper">
        <img :src="imgUrl" />
      </div>
      <aside>
        <div class="name">{{name}}</div>
        <div class="genre">Action, Adventure, Drama, Historical, Seinen</div>
        <div class="date-aired">Jul 08, 2019 to Dec 30, 2019</div>
        <div class="latest">{{latestEpisode}}</div>
        <div class="status">Completed</div>
        <div
          class="summary"
        >Young Thorfinn grew up listening to the stories of old sailors that had traveled the ocean and reached the place of legend, Vinland.</div>
      </aside>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.anime-item {
  cursor: pointer;
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
  .overview {
    padding-top: 10px;
    display: none;
    margin-left: 160px;
    width: 360px;
    position: absolute;
    overflow: hidden;
    border: 1px grey solid;
    background-color: #000;
    box-shadow: #000 -3px 3px 3px;
    .img-wrapper {
      overflow: hidden;
      width: 100px;
      img {
        height: 120px;
      }
    }
    aside {
      flex: 1;
      display: flex;
      flex-flow: column nowrap;
      align-items: start;
      font-size: 12px;
      text-align: start;
      padding: 5px;
      *::before {
        color: #00a651;
      }
      div {
        margin-top: 2px;
      }
      .name {
        font-size: 18px;
      }
      .genre {
        &::before {
          content: ("Genre: ");
        }
      }
      .latest {
        &::before {
          content: ("Episode: ");
        }
      }
      .status {
        &::before {
          content: ("Status: ");
        }
      }
      .date-aired {
        &::before {
          content: ("Date aired: ");
        }
      }
      .summary {
        &::before {
          content: ("Summary: ");
        }
      }
    }
  }
  &:hover .overview {
    display: flex;
    // left: 160px;
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