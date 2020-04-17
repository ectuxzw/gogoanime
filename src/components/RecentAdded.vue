<template>
  <div class="recent-added">
    <div class="title-bar">
      <img alt class="anime_name_img_recent_release" src="@/assets/bg/recent_release.png" />
      <span>{{title}}</span>
    </div>
    <div class="content">
      <div class="wrapper">
        <a :key="index" href v-for="(item,index) in data">{{item}}</a>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.recent-added {
  width: 298px;
  // width: 100%;
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
    padding: 10px 0;

    .wrapper {
      display: flex;
      flex-flow: column nowrap;
      // > :nth-child(2n-1) {
      //   border-right: 1px solid #a1a1a1;
      // }
      // > :nth-child(2n) {
      //   // border-left: 0.5px solid #a1a1a1;
      // }
      a {
        // width: calc(50% - 45px);
        padding: 2px 20px;
        text-decoration: none;
        color: #ffc119;
        font-size: 14px;
        font-weight: 500;
        transition: all 0.2s ease-out;
        text-align: start;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        &:hover {
          color: #fff;
          transition: all 0.2s ease-in;
        }
      }
    }
  }
}
</style>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class RecentAdded extends Vue {
  public title: string = 'RECENTLY ADDED SERIES';

  public data: string[] = [
    'Master Keaton',
    'Hyper Police',
    'High Score Girl II',
    'Overman King Gainer',
    'Watashi no Ashinaga Ojisan',
    'Alps no Shoujo Heidi (1979)',
    'Astro Boy (1963) (Dub)',
    'Ojamajo Doremi Dokkaan!',
    'Promare: Galo-hen',
    'Detective Conan Movie 21: The Crimson Love Letter',
    'Chocolat no Mahou',
    'Bubblegum Crisis',
    'Qin Shi Ming Yue Tian Xing Jiu Ge',
    'Onigamiden',
    'Aggressive Retsuko: We Wish You a Metal Christmas',
    'Mazinkaiser (Dub)',
    'Gall Force 3: Stardust War (Dub)',
    'Fuma no Kojiro - Yasha-hen OVA',
    'Uchuu Senkan Yamato 2202: Ai no Senshi-tachi',
    'Full Metal Panic! Invisible Victory (Dub)',
    'Douluo Dalu - Soul Land',
    'Yaoguai Mingdan Season 1',
    'Yaoguai Mingdan Season 2',
    'Spiritpact S2',
    'Isekai Izakaya - Koto Aitheria no Izakaya Nobu',
    'Haguregumo',
    'Mermaid Forest (Dub)',
    'Onegai Twins (Dub)',
    'Legend of Sirius (Dub)',
    'Kurenai no Buta (Dub)',
    'Prince of Stride: Alternative (Dub)',
    'Alice to Zouroku Special',
    'Kuragehime (Dub)',
    'Koi☆Sento (Dub)',
    'Petite Princess Yucie (Dub)',
    'Witch Hunter Robin (Dub)',
    'Wolverine (Dub)',
    'Ai Mai Mii: Surgical Friends',
    'Elsword: El Lady',
    'Fate/Grand Order: First Order',
  ];
}
</script>