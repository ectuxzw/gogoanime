<template>
  <div class="new-seasons">
    <gallery :animeList="newSeasons" :title="'New Seasons'" />
  </div>
</template>

<style lang='scss' scoped>
.new-seasons {
  width: 715px;
}
</style>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import Gallery from '@/components/Gallery.vue';

@Component({
  components: {
    Gallery,
  },
})
export default class NewSeasons extends Vue {
  public newSeasons: any[] = [
    {
      imgUrl: 'https://gogocdn.net/cover/black-clover-tv.png',
      latestEpisode: 130,
      name: 'Black Clover (TV)',
    },
    {
      imgUrl: 'https://cdnimg.xyz/cover/wu-shen-zhu-zai.png',
      latestEpisode: 13,
      name: 'Wu Shen Zhu Zai',
    },
    {
      imgUrl: 'https://gogocdn.net/cover/houkago-teibou-nisshi.png',
      latestEpisode: 2,
      name: 'Houkago Teibou Nisshi',
    },
    {
      imgUrl: 'https://gogocdn.net/cover/shadowverse-tv.png',
      latestEpisode: 2,
      name: 'Shadowverse (TV)',
    },
    {
      imgUrl: 'https://gogocdn.net/cover/black-clover-tv.png',
      latestEpisode: 130,
      name: 'Black Clover (TV)',
    },
    {
      imgUrl: 'https://cdnimg.xyz/cover/wu-shen-zhu-zai.png',
      latestEpisode: 13,
      name: 'Wu Shen Zhu Zai',
    },
    {
      imgUrl: 'https://gogocdn.net/cover/houkago-teibou-nisshi.png',
      latestEpisode: 2,
      name: 'Houkago Teibou Nisshi',
    },
    {
      imgUrl: 'https://gogocdn.net/cover/shadowverse-tv.png',
      latestEpisode: 2,
      name: 'Shadowverse (TV)',
    },
    {
      imgUrl: 'https://gogocdn.net/cover/black-clover-tv.png',
      latestEpisode: 130,
      name: 'Black Clover (TV)',
    },
    {
      imgUrl: 'https://cdnimg.xyz/cover/wu-shen-zhu-zai.png',
      latestEpisode: 13,
      name: 'Wu Shen Zhu Zai',
    },
    {
      imgUrl: 'https://gogocdn.net/cover/houkago-teibou-nisshi.png',
      latestEpisode: 2,
      name: 'Houkago Teibou Nisshi',
    },
    {
      imgUrl: 'https://gogocdn.net/cover/shadowverse-tv.png',
      latestEpisode: 2,
      name: 'Shadowverse (TV)',
    },
    {
      imgUrl: 'https://gogocdn.net/cover/black-clover-tv.png',
      latestEpisode: 130,
      name: 'Black Clover (TV)',
    },
    {
      imgUrl: 'https://cdnimg.xyz/cover/wu-shen-zhu-zai.png',
      latestEpisode: 13,
      name: 'Wu Shen Zhu Zai',
    },
    {
      imgUrl: 'https://gogocdn.net/cover/houkago-teibou-nisshi.png',
      latestEpisode: 2,
      name: 'Houkago Teibou Nisshi',
    },
    {
      imgUrl: 'https://gogocdn.net/cover/shadowverse-tv.png',
      latestEpisode: 2,
      name: 'Shadowverse (TV)',
    },
  ];
}
</script>