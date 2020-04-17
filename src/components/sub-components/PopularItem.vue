<template>
  <div class="popular-item">
    <main>
      <img :src="imgUrl" alt />
    </main>

    <aside>
      <span class="name fields">{{name}}</span>
      <span class="genres fields">Genres: {{genres.join(', ')}}</span>
      <span class="latest fields">
        Latest:
        <span class="episode">Episode {{latestEpisode}}</span>
      </span>
    </aside>
  </div>
</template>

<style lang='scss' scoped>
.popular-item {
  //   margin-top: 5px;
  width: calc(50% - 20.5px);
  padding: 15px 0 15px 20px;
  //   padding-inline: 5px;
  display: flex;
  flex-flow: row nowrap;
  main {
    min-width: 90px;
    width: 90px;
    min-height: 90px;
    height: 90px;

    overflow: hidden;
    img {
      width: 100%;
    }
  }
  aside {
    display: flex;
    flex-flow: column nowrap;
    .fields {
      margin: 0 0 0 15px;
      text-align: start;
      //   font-weight: 600;
      font-size: 13px;
      color: #909090;
      &.name {
        color: #ffc119;
        font-weight: bold;
        margin-bottom: 3px;
      }
      .episode {
        color: #fff;
        font-weight: 600;
      }
    }
  }
}
</style>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class PopularItem extends Vue {
  @Prop()
  public imgUrl!: string;
  @Prop()
  public name!: string;
  @Prop()
  public genres!: string[];
  @Prop()
  public latestEpisode!: number;
}
</script>