(function(e){function t(t){for(var n,r,s=t[0],u=t[1],c=t[2],l=0,g=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&g.push(i[r][0]),i[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);d&&d(t);while(g.length)g.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,r=1;r<a.length;r++){var u=a[r];0!==i[u]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},i={app:0},o=[];function r(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"6b2c0b9c"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a=i[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=n);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=r(e);var c=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(l);var a=i[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",c.name="ChunkLoadError",c.type=n,c.request=o,a[1](c)}i[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"1b67":function(e,t,a){},"21bb":function(e,t,a){"use strict";var n=a("2dad"),i=a.n(n);i.a},"2dad":function(e,t,a){},"39b1":function(e,t,a){},4530:function(e,t,a){},"4f66":function(e,t,a){},"4ff5":function(e,t,a){},"5baa":function(e,t,a){"use strict";var n=a("1b67"),i=a.n(n);i.a},"5c0b":function(e,t,a){"use strict";var n=a("9c0c"),i=a.n(n);i.a},"5c30":function(e,t,a){"use strict";var n=a("4f66"),i=a.n(n);i.a},"66da":function(e,t,a){"use strict";var n=a("4530"),i=a.n(n);i.a},"793d":function(e,t,a){},"81c2":function(e,t,a){e.exports=a.p+"img/ongoing.382f1648.png"},8364:function(e,t,a){e.exports=a.p+"img/recent_release.b281e035.png"},"9c0c":function(e,t,a){},a6dd:function(e,t,a){"use strict";var n=a("4ff5"),i=a.n(n);i.a},abd0:function(e,t,a){"use strict";var n=a("b55c"),i=a.n(n);i.a},ad30:function(e,t,a){"use strict";var n=a("793d"),i=a.n(n);i.a},b55c:function(e,t,a){},c491:function(e,t,a){"use strict";var n=a("e3c1"),i=a.n(n);i.a},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),n("div",{attrs:{id:"nav"}},[n("img",{attrs:{alt:"",src:a("cf05")}}),n("div",{staticClass:"nav-list"},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),n("router-link",{attrs:{to:"/anime-list"}},[e._v("Anime List")]),n("a",{attrs:{id:"genre"},on:{mouseout:function(){e.visible.display="none"},mouseover:function(){e.visible.display="flex"}}},[e._v(" Genre "),n("div",{staticClass:"dropdown",style:e.visible},e._l(e.genre,(function(t,a){return n("a",{key:a,attrs:{href:""}},[e._v(e._s(t))])})),0)]),n("router-link",{attrs:{to:"/new-seasons"}},[e._v("New Season")]),n("router-link",{attrs:{to:"/movies"}},[e._v("Movies")]),n("router-link",{attrs:{to:"/popular"}},[e._v("Popular")])],1),e._m(1)]),n("router-view"),n("footer",[n("router-link",{attrs:{to:"/about"}},[e._v("Abouts us |")]),n("img",{attrs:{alt:"top",src:"https://www17.gogoanime.io/img/bg/croll.png"},on:{click:function(t){return e.scrollToTop()}}})],1)],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("span",[e._v("Login | Signup")]),a("div",{staticClass:"share-link"},[e._v("Request | Contact")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"search-bar"},[a("input",{attrs:{id:"search-bar",name:"search",type:"text"}}),a("img",{attrs:{alt:"",src:"https://www17.gogoanime.io/img/icon/searcch.png"}})])}],r=(a("96cf"),a("1da1")),s=a("d4ec"),u=a("bee2"),c=a("262e"),l=a("2caf"),d=a("9ab4"),g=a("60a3"),m=function(e){Object(c["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.visible={display:"none"},e.genre=["Action","Adventure","Cars","Comedy","Dementia","Demons","Drama","Ecchi","Fantasy","Game","Harem","Historical","Horror","Josei","Kids","Magic","Martial Arts","Mecha","Military","Music","Mystery","Parody","Police","Psychological","Romance","Samurai","School","Sci-Fi","Seinen","Shoujo","Shoujo Ai","Shounen","Shounen Ai","Slice of Life","Space","Sports","Super Power","Supernatural","Thriller","Vampire","Yaoi","Yuri"],e}return Object(u["a"])(a,[{key:"scrollToTop",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:window.pageYOffset,window.scrollTo(0,0);case 2:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}]),a}(g["c"]);m=Object(d["a"])([Object(g["a"])({})],m);var p=m,v=p,h=(a("5c0b"),a("2877")),b=Object(h["a"])(v,i,o,!1,null,null,null),f=b.exports,S=(a("d3b7"),a("8c4f")),y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("main",[a("gallery",{staticClass:"recent-release",attrs:{animeList:e.recentRelease,title:"Recent Release"}}),a("popular-ongoing")],1),a("aside",[a("ongoing-series"),a("recent-added")],1)])},A=[],k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"gallery"},[n("div",{staticClass:"title-bar"},[n("img",{staticClass:"anime_name_img_recent_release",attrs:{alt:"",src:a("8364")}}),n("span",[e._v(e._s(e.title))]),e._m(0)]),n("div",{staticClass:"content"},e._l(e.animeList,(function(e,t){return n("anime-item",{key:t,attrs:{imgUrl:e.imgUrl,latestEpisode:e.latestEpisode,name:e.name}})})),1)])},O=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pages"},[a("div",[e._v("1")]),a("div",[e._v("2")]),a("div",[e._v("3")]),a("div",[e._v("4")]),a("div",[e._v("5")])])}],D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"anime-item",attrs:{href:""}},[a("div",{staticClass:"img"},[a("img",{attrs:{src:e.imgUrl,alt:""}})]),a("span",{staticClass:"name"},[e._v(e._s(e.name))]),a("span",[e._v("Episode "+e._s(e.latestEpisode))]),a("div",{staticClass:"overview"},[a("div",{staticClass:"img-wrapper"},[a("img",{attrs:{src:e.imgUrl}})]),a("aside",[a("div",{staticClass:"name"},[e._v(e._s(e.name))]),a("div",{staticClass:"genre"},[e._v("Action, Adventure, Drama, Historical, Seinen")]),a("div",{staticClass:"date-aired"},[e._v("Jul 08, 2019 to Dec 30, 2019")]),a("div",{staticClass:"latest"},[e._v(e._s(e.latestEpisode))]),a("div",{staticClass:"status"},[e._v("Completed")]),a("div",{staticClass:"summary"},[e._v("Young Thorfinn grew up listening to the stories of old sailors that had traveled the ocean and reached the place of legend, Vinland.")])])])])},w=[],j=function(e){Object(c["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return a}(g["c"]);Object(d["a"])([Object(g["b"])()],j.prototype,"imgUrl",void 0),Object(d["a"])([Object(g["b"])()],j.prototype,"name",void 0),Object(d["a"])([Object(g["b"])()],j.prototype,"latestEpisode",void 0),j=Object(d["a"])([Object(g["a"])({})],j);var C=j,E=C,T=(a("5c30"),Object(h["a"])(E,D,w,!1,null,"3ab5975e",null)),z=T.exports,B=function(e){Object(c["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return a}(g["c"]);Object(d["a"])([Object(g["b"])()],B.prototype,"title",void 0),Object(d["a"])([Object(g["b"])()],B.prototype,"animeList",void 0),B=Object(d["a"])([Object(g["a"])({components:{AnimeItem:z}})],B);var U=B,M=U,G=(a("5baa"),Object(h["a"])(M,k,O,!1,null,null,null)),P=G.exports,H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ongoing-series"},[e._m(0),a("div",{staticClass:"content"},[a("div",{staticClass:"wrapper"},e._l(e.series,(function(t,n){return a("a",{key:n,attrs:{href:""}},[e._v(e._s(t))])})),0)])])},Y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title-bar"},[n("img",{attrs:{alt:"",src:a("81c2")}}),n("span",[e._v("OngoingSeries")])])}],K=function(e){Object(c["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.series=["6HP (Six Hearts Princess)","A3! Season Spring & Summer","A3! Season Spring & Summer (Dub)","Ahiru no Sora","Ahiru no Sora (Dub)","Aikatsu on Parade! (ONA)","Appare-Ranman!","Argonavis from BanG Dream!\t","ARP Backstage Pass","Arte","Asatir: Mirai no Mukashibanashi","Azur Lane (Dub)","Bakugan: Battle Planet (Dub)","Battle Spirits: Saga Brave","Beyblade Burst Super King\t","Black Clover (TV)","Black Clover (TV) (Dub)","BNA","Boku no Hero Academia 4th Season (Dub)","Boruto: Naruto Next Generations","Boruto: Naruto Next Generations (Dub)","Breakers","Bungou to Alchemist: Shinpan no Haguruma","Cardfight!! Vanguard Gaiden: If","Cardfight!! Vanguard: Zoku Koukousei-hen (Dub)","Castlevania 3nd Season (Dub)","Chokotto Anime Kemono Friends 3","Crayon Shin Chan","Darwin's Game (Dub)","Detective Conan","Digimon Adventure (2020)","Douluo Dalu 2nd Season","Fate/Grand Order: Zettai Majuu Sensen Babylonia (Dub)","Fruits Basket 2nd Season","Fruits Basket 2nd Season (Dub)","Fugou Keiji: Balance:Unlimited","Future Card Buddyfight Ace (Dub)","Gal to Kyouryuu","Gal-gaku.: Hijiri Girls Square Gakuin","Gleipnir","Gundam Build Divers Re:Rise 2nd Season","Hachi-nan tte, Sore wa Nai deshou!","Han Hua Ri Ji","Happy Sugar Life (Dub)","Hatena☆Illusion (Dub)","Healin' Good♡Precure","Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen 2nd Season","Houkago Teibou Nisshi","Hulaing Babies Petit","ID:Invaded (Dub)","IDOLiSH7: Second Beat!","Inazuma Eleven: Orion no Kokuin","Infinite Dendrogram","Infinite Dendrogram (Dub)","Isekai Quartet 2nd Season (Dub)","Ishuzoku Reviewers (Dub)","Itai no wa Iya nano de Bougyoryoku ni Kyokufuri Shitai to Omoimasu. (Dub)","Jibaku Shounen Hanako-kun (Dub)","Jie Yao","Jue Ming Xiang Ying","Kabukichou Sherlock (Dub)","Kaguya-sama wa Kokurasetai?: Tensai-tachi no Renai Zunousen 2","Kakushigoto (TV)","Kami no Tou","Kimetsu no Yaiba (Dub)","Kingdom 3rd Season","Kiratto Pri☆chan 2nd Season","Kiratto Pri☆chan Season 3","Kitsutsuki Tanteidokoro","Koisuru Asteroid (Dub)","Konpeki no Kantai","Kyokou Suiri (Dub)","Ling Long: Incarnation","Ling Yu - Spirit Realm S6","Listeners","Listeners (Dub)","Magia Record: Mahou Shoujo Madoka☆Magica Gaiden (TV) (Dub)","Mairimashita! Iruma-kun (Dub)","Maison Ikkoku: Shiki Utsuriyuku Kisetsu no Naka de","Major 2nd (TV) 2nd Season","Majutsushi Orphen Hagure Tabi (Dub)","Masamune Datenicle","Mewkledreamy","Monster Strike the Animation","Mu Wang Zhi Wang: You Du Zhan","Mugyutto! Black Clover","Nami yo Kiitekure","Naruto Shippuuden (Dub)","Neko no Nyagh: Nya Misérables","Nekopara (Dub)","No Guns Life 2nd Season","number24","Obsolete","Olympia Kyklos","One Piece","One Piece (Dub)","One Punch Man 2nd Season Specials","Oshi ga Budoukan Ittekuretara Shinu (Dub)","Otome Game no Hametsu Flag shika Nai Akuyaku Reijou ni Tensei shiteshimatta...","Plunderer","Plunderer (Dub)","Pokemon (2019)","Pokemon Sun and Moon (Dub)","Pokemon: Twilight Wings","Pokemon: Twilight Wings (Dub)","Princess Connect! Re:Dive","Qin Shi Ming Yue: Tian Xing Jiu Ge 2nd Season","Queen's Blade: Unlimited","Rebirth","Rikei ga Koi ni Ochita no de Shoumei shitemita. (Dub)","Runway de Waratte (Dub)","RWBY Volume 7","SD Gundam World: Sangoku Souketsuden","Shachou, Battle no Jikan Desu!","Shadowverse (TV)","Shin Sakura Taisen the Animation","Shironeko Project: Zero Chronicle","Shokugeki no Souma: Gou no Sara","Shounen Ashibe: Go! Go! Goma-chan 4","Somali to Mori no Kamisama (Dub)","Strike the Blood IV","Super Dragon Ball Heroes: Big Bang Mission","Super Shiro","Sword Art Online: Alicization - War of Underworld 2nd Season","Tamayomi","Tenchi Muyou! Ryououki 5th Season","Toaru Kagaku no Railgun T","Toaru Kagaku no Railgun T (Dub)","Tomica Kizuna Gattai: Earth Granner","Tsugu Tsugumomo","Wan Jie Chun Qiu","Wu Dong Qian Kun","Wu Liuqi Zhi Zui Qiang Fa Xing Shi","Wu Shen Zhu Zai","Xian Wang de Richang Shenghuo","Yahari Ore no Seishun Love Comedy wa Machigatteiru. Kan","Yao Jing Zhong Zhi Shou Ce","Yao Shen Ji 4th Season","Yesterday wo Utatte","Youkai Watch Jam: Youkai Gakuen Y - N to no Souguu","Yu☆Gi☆Oh!: Sevens","Zashiki Warashi no Tatami-chan","Zenonzard The Animation","Zhen Hun Jie 2","Zoids Wild Zero"],e}return a}(g["c"]);K=Object(d["a"])([Object(g["a"])({})],K);var _=K,N=_,V=(a("abd0"),Object(h["a"])(N,H,Y,!1,null,null,null)),x=V.exports,Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"popular-ongoing"},[e._m(0),a("div",{staticClass:"content"},e._l(e.items,(function(e,t){return a("popular-item",{key:t,attrs:{genres:e.genres,imgUrl:e.imgUrl,latestEpisode:e.latestEpisode,name:e.name}})})),1)])},R=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title-bar"},[n("img",{staticClass:"anime_name_img_recent_release",attrs:{alt:"",src:a("8364")}}),n("span",[e._v("Popular Ongoing Updates")]),n("div",{staticClass:"pages"},[n("div",[e._v("1")]),n("div",[e._v("2")]),n("div",[e._v("3")]),n("div",[e._v("4")]),n("div",[e._v("5")])])])}],Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"popular-item"},[a("main",[a("img",{attrs:{src:e.imgUrl,alt:""}})]),a("aside",[a("span",{staticClass:"name fields"},[e._v(e._s(e.name))]),a("span",{staticClass:"genres fields"},[e._v("Genres: "+e._s(e.genres.join(", ")))]),a("span",{staticClass:"latest fields"},[e._v(" Latest: "),a("span",{staticClass:"episode"},[e._v("Episode "+e._s(e.latestEpisode))])])])])},I=[],F=function(e){Object(c["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return a}(g["c"]);Object(d["a"])([Object(g["b"])()],F.prototype,"imgUrl",void 0),Object(d["a"])([Object(g["b"])()],F.prototype,"name",void 0),Object(d["a"])([Object(g["b"])()],F.prototype,"genres",void 0),Object(d["a"])([Object(g["b"])()],F.prototype,"latestEpisode",void 0),F=Object(d["a"])([Object(g["a"])({})],F);var L=F,W=L,J=(a("e521"),Object(h["a"])(W,Z,I,!1,null,"54a60b92",null)),X=J.exports,q=function(e){Object(c["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.items=[{name:"Digimon Adventure (2020)",imgUrl:"https://cdnimg.xyz/cover/digimon-adventure-2020.png",genres:["Action","Adventure","Comedy"," Fantasy","Kids"],latestEpisode:2},{imgUrl:"https://cdnimg.xyz/cover/kingdom-3rd-season.png",name:"Kingdom 3rd Season",genres:["Action","Historical","Military","Seinen"],latestEpisode:2},{name:"Kami no Tou",imgUrl:"https://cdnimg.xyz/cover/kami-no-tou.png",genres:["Action","Adventure","Drama","Fantasy","Mystery"],latestEpisode:2},{name:"Digimon Adventure (2020)",imgUrl:"https://cdnimg.xyz/cover/digimon-adventure-2020.png",genres:["Action","Adventure","Comedy"," Fantasy","Kids"],latestEpisode:2},{imgUrl:"https://cdnimg.xyz/cover/kingdom-3rd-season.png",name:"Kingdom 3rd Season",genres:["Action","Historical","Military","Seinen"],latestEpisode:2},{name:"Kami no Tou",imgUrl:"https://cdnimg.xyz/cover/kami-no-tou.png",genres:["Action","Adventure","Drama","Fantasy","Mystery"],latestEpisode:2},{name:"Digimon Adventure (2020)",imgUrl:"https://cdnimg.xyz/cover/digimon-adventure-2020.png",genres:["Action","Adventure","Comedy"," Fantasy","Kids"],latestEpisode:2},{imgUrl:"https://cdnimg.xyz/cover/kingdom-3rd-season.png",name:"Kingdom 3rd Season",genres:["Action","Historical","Military","Seinen"],latestEpisode:2},{name:"Kami no Tou",imgUrl:"https://cdnimg.xyz/cover/kami-no-tou.png",genres:["Action","Adventure","Drama","Fantasy","Mystery"],latestEpisode:2},{name:"Digimon Adventure (2020)",imgUrl:"https://cdnimg.xyz/cover/digimon-adventure-2020.png",genres:["Action","Adventure","Comedy"," Fantasy","Kids"],latestEpisode:2},{imgUrl:"https://cdnimg.xyz/cover/kingdom-3rd-season.png",name:"Kingdom 3rd Season",genres:["Action","Historical","Military","Seinen"],latestEpisode:2},{name:"Kami no Tou",imgUrl:"https://cdnimg.xyz/cover/kami-no-tou.png",genres:["Action","Adventure","Drama","Fantasy","Mystery"],latestEpisode:2}],e}return a}(g["c"]);q=Object(d["a"])([Object(g["a"])({components:{PopularItem:X}})],q);var $=q,ee=$,te=(a("a6dd"),Object(h["a"])(ee,Q,R,!1,null,"16ad92ad",null)),ae=te.exports,ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"recent-added"},[n("div",{staticClass:"title-bar"},[n("img",{staticClass:"anime_name_img_recent_release",attrs:{alt:"",src:a("8364")}}),n("span",[e._v(e._s(e.title))])]),n("div",{staticClass:"content"},[n("div",{staticClass:"wrapper"},e._l(e.data,(function(t,a){return n("a",{key:a,attrs:{href:""}},[e._v(e._s(t))])})),0)])])},ie=[],oe=function(e){Object(c["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.title="RECENTLY ADDED SERIES",e.data=["Master Keaton","Hyper Police","High Score Girl II","Overman King Gainer","Watashi no Ashinaga Ojisan","Alps no Shoujo Heidi (1979)","Astro Boy (1963) (Dub)","Ojamajo Doremi Dokkaan!","Promare: Galo-hen","Detective Conan Movie 21: The Crimson Love Letter","Chocolat no Mahou","Bubblegum Crisis","Qin Shi Ming Yue Tian Xing Jiu Ge","Onigamiden","Aggressive Retsuko: We Wish You a Metal Christmas","Mazinkaiser (Dub)","Gall Force 3: Stardust War (Dub)","Fuma no Kojiro - Yasha-hen OVA","Uchuu Senkan Yamato 2202: Ai no Senshi-tachi","Full Metal Panic! Invisible Victory (Dub)","Douluo Dalu - Soul Land","Yaoguai Mingdan Season 1","Yaoguai Mingdan Season 2","Spiritpact S2","Isekai Izakaya - Koto Aitheria no Izakaya Nobu","Haguregumo","Mermaid Forest (Dub)","Onegai Twins (Dub)","Legend of Sirius (Dub)","Kurenai no Buta (Dub)","Prince of Stride: Alternative (Dub)","Alice to Zouroku Special","Kuragehime (Dub)","Koi☆Sento (Dub)","Petite Princess Yucie (Dub)","Witch Hunter Robin (Dub)","Wolverine (Dub)","Ai Mai Mii: Surgical Friends","Elsword: El Lady","Fate/Grand Order: First Order"],e}return a}(g["c"]);oe=Object(d["a"])([Object(g["a"])({})],oe);var re=oe,se=re,ue=(a("ad30"),Object(h["a"])(se,ne,ie,!1,null,"46f19c06",null)),ce=ue.exports,le=function(e){Object(c["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.recentRelease=[{imgUrl:"https://gogocdn.net/cover/black-clover-tv.png",latestEpisode:130,name:"Black Clover (TV)"},{imgUrl:"https://cdnimg.xyz/cover/wu-shen-zhu-zai.png",latestEpisode:13,name:"Wu Shen Zhu Zai"},{imgUrl:"https://gogocdn.net/cover/houkago-teibou-nisshi.png",latestEpisode:2,name:"Houkago Teibou Nisshi"},{imgUrl:"https://gogocdn.net/cover/shadowverse-tv.png",latestEpisode:2,name:"Shadowverse (TV)"},{imgUrl:"https://gogocdn.net/cover/black-clover-tv.png",latestEpisode:130,name:"Black Clover (TV)"},{imgUrl:"https://cdnimg.xyz/cover/wu-shen-zhu-zai.png",latestEpisode:13,name:"Wu Shen Zhu Zai"},{imgUrl:"https://gogocdn.net/cover/houkago-teibou-nisshi.png",latestEpisode:2,name:"Houkago Teibou Nisshi"},{imgUrl:"https://gogocdn.net/cover/shadowverse-tv.png",latestEpisode:2,name:"Shadowverse (TV)"},{imgUrl:"https://gogocdn.net/cover/black-clover-tv.png",latestEpisode:130,name:"Black Clover (TV)"},{imgUrl:"https://cdnimg.xyz/cover/wu-shen-zhu-zai.png",latestEpisode:13,name:"Wu Shen Zhu Zai"},{imgUrl:"https://gogocdn.net/cover/houkago-teibou-nisshi.png",latestEpisode:2,name:"Houkago Teibou Nisshi"},{imgUrl:"https://gogocdn.net/cover/shadowverse-tv.png",latestEpisode:2,name:"Shadowverse (TV)"},{imgUrl:"https://gogocdn.net/cover/black-clover-tv.png",latestEpisode:130,name:"Black Clover (TV)"},{imgUrl:"https://cdnimg.xyz/cover/wu-shen-zhu-zai.png",latestEpisode:13,name:"Wu Shen Zhu Zai"},{imgUrl:"https://gogocdn.net/cover/houkago-teibou-nisshi.png",latestEpisode:2,name:"Houkago Teibou Nisshi"},{imgUrl:"https://gogocdn.net/cover/shadowverse-tv.png",latestEpisode:2,name:"Shadowverse (TV)"}],e}return a}(g["c"]);le=Object(d["a"])([Object(g["a"])({components:{Gallery:P,OngoingSeries:x,PopularOngoing:ae,RecentAdded:ce}})],le);var de=le,ge=de,me=(a("21bb"),Object(h["a"])(ge,y,A,!1,null,null,null)),pe=me.exports,ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"new-seasons"},[a("gallery",{attrs:{animeList:e.newSeasons,title:"New Seasons"}})],1)},he=[],be=function(e){Object(c["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.newSeasons=[{imgUrl:"https://gogocdn.net/cover/black-clover-tv.png",latestEpisode:130,name:"Black Clover (TV)"},{imgUrl:"https://cdnimg.xyz/cover/wu-shen-zhu-zai.png",latestEpisode:13,name:"Wu Shen Zhu Zai"},{imgUrl:"https://gogocdn.net/cover/houkago-teibou-nisshi.png",latestEpisode:2,name:"Houkago Teibou Nisshi"},{imgUrl:"https://gogocdn.net/cover/shadowverse-tv.png",latestEpisode:2,name:"Shadowverse (TV)"},{imgUrl:"https://gogocdn.net/cover/black-clover-tv.png",latestEpisode:130,name:"Black Clover (TV)"},{imgUrl:"https://cdnimg.xyz/cover/wu-shen-zhu-zai.png",latestEpisode:13,name:"Wu Shen Zhu Zai"},{imgUrl:"https://gogocdn.net/cover/houkago-teibou-nisshi.png",latestEpisode:2,name:"Houkago Teibou Nisshi"},{imgUrl:"https://gogocdn.net/cover/shadowverse-tv.png",latestEpisode:2,name:"Shadowverse (TV)"},{imgUrl:"https://gogocdn.net/cover/black-clover-tv.png",latestEpisode:130,name:"Black Clover (TV)"},{imgUrl:"https://cdnimg.xyz/cover/wu-shen-zhu-zai.png",latestEpisode:13,name:"Wu Shen Zhu Zai"},{imgUrl:"https://gogocdn.net/cover/houkago-teibou-nisshi.png",latestEpisode:2,name:"Houkago Teibou Nisshi"},{imgUrl:"https://gogocdn.net/cover/shadowverse-tv.png",latestEpisode:2,name:"Shadowverse (TV)"},{imgUrl:"https://gogocdn.net/cover/black-clover-tv.png",latestEpisode:130,name:"Black Clover (TV)"},{imgUrl:"https://cdnimg.xyz/cover/wu-shen-zhu-zai.png",latestEpisode:13,name:"Wu Shen Zhu Zai"},{imgUrl:"https://gogocdn.net/cover/houkago-teibou-nisshi.png",latestEpisode:2,name:"Houkago Teibou Nisshi"},{imgUrl:"https://gogocdn.net/cover/shadowverse-tv.png",latestEpisode:2,name:"Shadowverse (TV)"}],e}return a}(g["c"]);be=Object(d["a"])([Object(g["a"])({components:{Gallery:P}})],be);var fe=be,Se=fe,ye=(a("c491"),Object(h["a"])(Se,ve,he,!1,null,"30f188ee",null)),Ae=ye.exports,ke=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"genre"},[a("div",{staticClass:"wrapper"},e._l(e.genre,(function(t,n){return a("a",{key:n,attrs:{title:t,href:""}},[e._v(e._s(t))])})),0)])},Oe=[],De=function(e){Object(c["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.genre=["Action","Adventure","Cars","Comedy","Dementia","Demons","Drama","Ecchi","Fantasy","Game","Harem","Historical","Horror","Josei","Kids","Magic","Martial Arts","Mecha","Military","Music","Mystery","Parody","Police","Psychological","Romance","Samurai","School","Sci-Fi","Seinen","Shoujo","Shoujo Ai","Shounen","Shounen Ai","Slice of Life","Space","Sports","Super Power","Supernatural","Thriller","Vampire","Yaoi","Yuri"],e}return a}(g["c"]);De=Object(d["a"])([Object(g["a"])({})],De);var we=De,je=we,Ce=(a("66da"),Object(h["a"])(je,ke,Oe,!1,null,"26c9a95e",null)),Ee=Ce.exports;n["a"].use(S["a"]);var Te=[{path:"/",name:"Home",component:pe},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/new-seasons",name:"NewSeasons",component:Ae},{path:"/genre",component:Ee}],ze=new S["a"]({routes:Te}),Be=ze,Ue=a("2f62");n["a"].use(Ue["a"]);var Me=new Ue["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:Be,store:Me,render:function(e){return e(f)}}).$mount("#app")},cf05:function(e,t){e.exports="data:image/png;base64,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"},e3c1:function(e,t,a){},e521:function(e,t,a){"use strict";var n=a("39b1"),i=a.n(n);i.a}});
//# sourceMappingURL=app.3255eb11.js.map