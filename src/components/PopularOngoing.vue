<template>
  <div class="popular-ongoing">
    <div class="title-bar">
      <img alt class="anime_name_img_recent_release" src="@/assets/bg/recent_release.png" />
      <span>Popular Ongoing Updates</span>
    </div>
    <div class="content">
      <popular-item
        :genres="item.genres"
        :imgUrl="item.imgUrl"
        :key="index"
        :latestEpisode="item.latestEpisode"
        :name="item.name"
        v-for="(item, index) in items"
      />
      <!--
      :imgUrl="item.imgUrl"
        :key="index"
        :latestEpisode="item.latestEpisode"
        :name="item.name"
      v-for="(item, index) in animeList"-->
    </div>
  </div>
</template>

<style lang='scss' scoped>
.popular-ongoing {
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
  }

  .content {
    padding: 10px 0;
    display: flex;
    flex-flow: row wrap;
    > :nth-child(2n-1) {
      border-right: 1px solid #a1a1a1;
    }
    > :nth-child(2n) {
      // border-left: 0.5px solid #a1a1a1;
    }
  }
}
</style>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import PopularItem from '@/components/sub-components/PopularItem.vue';
@Component({
  components: {
    PopularItem,
  },
})
export default class PopularOngoing extends Vue {
  public items: any[] = [
    {
      name: 'Digimon Adventure (2020)',
      imgUrl: 'https://cdnimg.xyz/cover/digimon-adventure-2020.png',
      genres: ['Action', 'Adventure', 'Comedy', ' Fantasy', 'Kids'],
      latestEpisode: 2,
    },
    {
      imgUrl: 'https://cdnimg.xyz/cover/kingdom-3rd-season.png',
      name: 'Kingdom 3rd Season',
      genres: ['Action', 'Historical', 'Military', 'Seinen'],
      latestEpisode: 2,
    },
    {
      name: 'Kami no Tou',
      imgUrl: 'https://cdnimg.xyz/cover/kami-no-tou.png',
      genres: ['Action', 'Adventure', 'Drama', 'Fantasy', 'Mystery'],
      latestEpisode: 2,
    },
    {
      name: 'Digimon Adventure (2020)',
      imgUrl: 'https://cdnimg.xyz/cover/digimon-adventure-2020.png',
      genres: ['Action', 'Adventure', 'Comedy', ' Fantasy', 'Kids'],
      latestEpisode: 2,
    },
    {
      imgUrl: 'https://cdnimg.xyz/cover/kingdom-3rd-season.png',
      name: 'Kingdom 3rd Season',
      genres: ['Action', 'Historical', 'Military', 'Seinen'],
      latestEpisode: 2,
    },
    {
      name: 'Kami no Tou',
      imgUrl: 'https://cdnimg.xyz/cover/kami-no-tou.png',
      genres: ['Action', 'Adventure', 'Drama', 'Fantasy', 'Mystery'],
      latestEpisode: 2,
    },
    {
      name: 'Digimon Adventure (2020)',
      imgUrl: 'https://cdnimg.xyz/cover/digimon-adventure-2020.png',
      genres: ['Action', 'Adventure', 'Comedy', ' Fantasy', 'Kids'],
      latestEpisode: 2,
    },
    {
      imgUrl: 'https://cdnimg.xyz/cover/kingdom-3rd-season.png',
      name: 'Kingdom 3rd Season',
      genres: ['Action', 'Historical', 'Military', 'Seinen'],
      latestEpisode: 2,
    },
    {
      name: 'Kami no Tou',
      imgUrl: 'https://cdnimg.xyz/cover/kami-no-tou.png',
      genres: ['Action', 'Adventure', 'Drama', 'Fantasy', 'Mystery'],
      latestEpisode: 2,
    },
    {
      name: 'Digimon Adventure (2020)',
      imgUrl: 'https://cdnimg.xyz/cover/digimon-adventure-2020.png',
      genres: ['Action', 'Adventure', 'Comedy', ' Fantasy', 'Kids'],
      latestEpisode: 2,
    },
    {
      imgUrl: 'https://cdnimg.xyz/cover/kingdom-3rd-season.png',
      name: 'Kingdom 3rd Season',
      genres: ['Action', 'Historical', 'Military', 'Seinen'],
      latestEpisode: 2,
    },
    {
      name: 'Kami no Tou',
      imgUrl: 'https://cdnimg.xyz/cover/kami-no-tou.png',
      genres: ['Action', 'Adventure', 'Drama', 'Fantasy', 'Mystery'],
      latestEpisode: 2,
    },
  ];
}
</script>