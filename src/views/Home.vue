<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <main>
      <gallery :animeList="recentRelease" :title="'Recent Release'" class="recent-release" />
      <popular-ongoing />
    </main>
    <aside>
      <ongoing-series />
      <recent-added />
    </aside>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Gallery from '@/components/Gallery.vue';
import OngoingSeries from '@/components/OngoingSeries.vue';
import PopularOngoing from '@/components/PopularOngoing.vue';
import RecentAdded from '@/components/RecentAdded.vue';

@Component({
  components: {
    Gallery,
    OngoingSeries,
    PopularOngoing,
    RecentAdded,
  },
})
export default class Home extends Vue {
  public recentRelease: any[] = [
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


<style lang="scss">
.home {
  display: flex;
  flex-flow: row nowrap;
  height: fit-content;
  // justify-content: space-between;
  main {
    width: 715px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    .recent-release {
      height: fit-content;
      .content {
        height: 630px;
        overflow: scroll;
      }
      // overflow: scroll;
    }
    .popular-ongoing {
      margin: 40px 0 0 0;
    }
  }
  aside {
    // overflow: scroll;
    .ongoing-series {
      margin: 0 10px;
    }
    .recent-added {
      margin: 40px 10px 0 10px;
      .content {
        height: 720px;
        overflow: scroll;
      }
    }
  }
}
</style>
