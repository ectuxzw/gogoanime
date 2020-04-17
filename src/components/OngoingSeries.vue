<template>
  <div class="ongoing-series">
    <div class="title-bar">
      <img alt src="@/assets/bg/ongoing.png" />
      <span>OngoingSeries</span>
    </div>
    <div class="content">
      <div class="wrapper">
        <a :key="index" href v-for="(item, index) in series">{{item}}</a>
      </div>
    </div>
  </div>
</template>

<style lang='scss' >
.ongoing-series {
  // max-height: 3000px;
  width: 298px;
  color: #fff;
  border: #a1a1a1 1px solid;
  //   text-overflow: ellipsis;

  .title-bar {
    background-color: #ffc119;
    max-height: 40px;
    display: flex;
    flex-flow: row nowrap;
    overflow-y: clip;
    overflow: visible;
    img {
      width: 60px;
      margin-top: -25px;
      margin-left: 5px;
      height: 75px;
    }
    span {
      padding-left: 5px;
      text-transform: uppercase;
      align-self: start;
      text-align: start;
      line-height: 40px;
      font-size: 14px;
      font-weight: bold;
      text-shadow: grey 1px 1px 2px;
    }
  }
  .content {
    overflow: scroll;
    padding: 10px;
    height: 610px;
    // white-space: nowrap;
    // overflow: hidden;
    .wrapper {
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-start;
      a {
        // height: 40px;
        width: 100%;
        text-align: start;
        margin: 3px 0 0 0;
        text-decoration: none;
        color: #ffc119;
        font-size: 14px;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        transition: all 0.2s ease-out;

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
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class OngoingSeries extends Vue {
  public series: string[] = [
    '6HP (Six Hearts Princess)',
    'A3! Season Spring & Summer',
    'A3! Season Spring & Summer (Dub)',
    'Ahiru no Sora',
    'Ahiru no Sora (Dub)',
    'Aikatsu on Parade! (ONA)',
    'Appare-Ranman!',
    'Argonavis from BanG Dream!	',
    'ARP Backstage Pass',
    'Arte',
    'Asatir: Mirai no Mukashibanashi',
    'Azur Lane (Dub)',
    'Bakugan: Battle Planet (Dub)',
    'Battle Spirits: Saga Brave',
    'Beyblade Burst Super King	',
    'Black Clover (TV)',
    'Black Clover (TV) (Dub)',
    'BNA',
    'Boku no Hero Academia 4th Season (Dub)',
    'Boruto: Naruto Next Generations',
    'Boruto: Naruto Next Generations (Dub)',
    'Breakers',
    'Bungou to Alchemist: Shinpan no Haguruma',
    'Cardfight!! Vanguard Gaiden: If',
    'Cardfight!! Vanguard: Zoku Koukousei-hen (Dub)',
    'Castlevania 3nd Season (Dub)',
    'Chokotto Anime Kemono Friends 3',
    'Crayon Shin Chan',
    'Darwin\'s Game (Dub)',
    'Detective Conan',
    'Digimon Adventure (2020)',
    'Douluo Dalu 2nd Season',
    'Fate/Grand Order: Zettai Majuu Sensen Babylonia (Dub)',
    'Fruits Basket 2nd Season',
    'Fruits Basket 2nd Season (Dub)',
    'Fugou Keiji: Balance:Unlimited',
    'Future Card Buddyfight Ace (Dub)',
    'Gal to Kyouryuu',
    'Gal-gaku.: Hijiri Girls Square Gakuin',
    'Gleipnir',
    'Gundam Build Divers Re:Rise 2nd Season',
    'Hachi-nan tte, Sore wa Nai deshou!',
    'Han Hua Ri Ji',
    'Happy Sugar Life (Dub)',
    'Hatena☆Illusion (Dub)',
    'Healin\' Good♡Precure',
    'Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen 2nd Season',
    'Houkago Teibou Nisshi',
    'Hulaing Babies Petit',
    'ID:Invaded (Dub)',
    'IDOLiSH7: Second Beat!',
    'Inazuma Eleven: Orion no Kokuin',
    'Infinite Dendrogram',
    'Infinite Dendrogram (Dub)',
    'Isekai Quartet 2nd Season (Dub)',
    'Ishuzoku Reviewers (Dub)',
    'Itai no wa Iya nano de Bougyoryoku ni Kyokufuri Shitai to Omoimasu. (Dub)',
    'Jibaku Shounen Hanako-kun (Dub)',
    'Jie Yao',
    'Jue Ming Xiang Ying',
    'Kabukichou Sherlock (Dub)',
    'Kaguya-sama wa Kokurasetai?: Tensai-tachi no Renai Zunousen 2',
    'Kakushigoto (TV)',
    'Kami no Tou',
    'Kimetsu no Yaiba (Dub)',
    'Kingdom 3rd Season',
    'Kiratto Pri☆chan 2nd Season',
    'Kiratto Pri☆chan Season 3',
    'Kitsutsuki Tanteidokoro',
    'Koisuru Asteroid (Dub)',
    'Konpeki no Kantai',
    'Kyokou Suiri (Dub)',
    'Ling Long: Incarnation',
    'Ling Yu - Spirit Realm S6',
    'Listeners',
    'Listeners (Dub)',
    'Magia Record: Mahou Shoujo Madoka☆Magica Gaiden (TV) (Dub)',
    'Mairimashita! Iruma-kun (Dub)',
    'Maison Ikkoku: Shiki Utsuriyuku Kisetsu no Naka de',
    'Major 2nd (TV) 2nd Season',
    'Majutsushi Orphen Hagure Tabi (Dub)',
    'Masamune Datenicle',
    'Mewkledreamy',
    'Monster Strike the Animation',
    'Mu Wang Zhi Wang: You Du Zhan',
    'Mugyutto! Black Clover',
    'Nami yo Kiitekure',
    'Naruto Shippuuden (Dub)',
    'Neko no Nyagh: Nya Misérables',
    'Nekopara (Dub)',
    'No Guns Life 2nd Season',
    'number24',
    'Obsolete',
    'Olympia Kyklos',
    'One Piece',
    'One Piece (Dub)',
    'One Punch Man 2nd Season Specials',
    'Oshi ga Budoukan Ittekuretara Shinu (Dub)',
    'Otome Game no Hametsu Flag shika Nai Akuyaku Reijou ni Tensei shiteshimatta...',
    'Plunderer',
    'Plunderer (Dub)',
    'Pokemon (2019)',
    'Pokemon Sun and Moon (Dub)',
    'Pokemon: Twilight Wings',
    'Pokemon: Twilight Wings (Dub)',
    'Princess Connect! Re:Dive',
    'Qin Shi Ming Yue: Tian Xing Jiu Ge 2nd Season',
    'Queen\'s Blade: Unlimited',
    'Rebirth',
    'Rikei ga Koi ni Ochita no de Shoumei shitemita. (Dub)',
    'Runway de Waratte (Dub)',
    'RWBY Volume 7',
    'SD Gundam World: Sangoku Souketsuden',
    'Shachou, Battle no Jikan Desu!',
    'Shadowverse (TV)',
    'Shin Sakura Taisen the Animation',
    'Shironeko Project: Zero Chronicle',
    'Shokugeki no Souma: Gou no Sara',
    'Shounen Ashibe: Go! Go! Goma-chan 4',
    'Somali to Mori no Kamisama (Dub)',
    'Strike the Blood IV',
    'Super Dragon Ball Heroes: Big Bang Mission',
    'Super Shiro',
    'Sword Art Online: Alicization - War of Underworld 2nd Season',
    'Tamayomi',
    'Tenchi Muyou! Ryououki 5th Season',
    'Toaru Kagaku no Railgun T',
    'Toaru Kagaku no Railgun T (Dub)',
    'Tomica Kizuna Gattai: Earth Granner',
    'Tsugu Tsugumomo',
    'Wan Jie Chun Qiu',
    'Wu Dong Qian Kun',
    'Wu Liuqi Zhi Zui Qiang Fa Xing Shi',
    'Wu Shen Zhu Zai',
    'Xian Wang de Richang Shenghuo',
    'Yahari Ore no Seishun Love Comedy wa Machigatteiru. Kan',
    'Yao Jing Zhong Zhi Shou Ce',
    'Yao Shen Ji 4th Season',
    'Yesterday wo Utatte',
    'Youkai Watch Jam: Youkai Gakuen Y - N to no Souguu',
    'Yu☆Gi☆Oh!: Sevens',
    'Zashiki Warashi no Tatami-chan',
    'Zenonzard The Animation',
    'Zhen Hun Jie 2',
    'Zoids Wild Zero',
  ];
}
</script>