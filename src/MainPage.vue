<template>
  <div :class="['about']">
    <div class="about__head" v-if="!isMobile">
      <img class="about__head__profile-pic" src="./img/profilepic.jpg"> 
      <div>
        <div class="about__head__name-and-links">
          <h2>Abdur Saif Rahman</h2>
          <a class="about__head__name-and-links__link" v-for="iconLink in iconLinks" :key="iconLink.src" :href="iconLink.href" target="_blank">
            <Icon :type="iconLink.type" />  
          </a>
        </div>
        <p>
          <i>“The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.”</i>
        </p>
        <p>
          - Ralph Waldo Emerson
        </p>
      </div>
    </div>
    <div class="about__mobile-head" v-else>
      <img class="about__mobile-head__profile-pic" src="./img/profilepic.jpg">
      <div class="about__mobile-head__name-and-links">
        <h2>Abdur Saif Rahman</h2>
        <a class="about__mobile-head__name-and-links__link" v-for="iconLink in iconLinks" :key="iconLink.src" :href="iconLink.href" target="_blank">
          <Icon :type="iconLink.type" />  
        </a>
      </div>
      <p>
        <i>“The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.”</i>
      </p>
      <p>
        - Ralph Waldo Emerson
      </p>
    </div>
    <template v-for="thing in things">
      <h3 :key="`${thing.title}-title`">{{thing.title}}</h3>
      <template v-for="item in thing.items">
        <p :key="`${thing.title}-${item}`" class="about__item">- {{item}}</p>
      </template>
    </template>
  </div>
</template>

<style lang="sass">
.about {
  margin-top:30px;
  border-bottom: solid 1px #fff6bc;
  padding-bottom: 20px;
  h3 {
    color: #fff6bc;
    margin-top: 20px;
  }
  &__mobile-head {
    &__profile-pic {
      width: 30vw;
      height: 30vw;
      border-radius: 4px;
    }
    &__name-and-links {
      display: flex;
      align-items: flex-end;
      img {
        width: 14px;
        height: 14px;
        margin-left: 5px;
      }
      &__link {
        font-size: 16px;
        margin-left: 3px;
      }
    }
  }
  &__head {
    display: flex;
    align-items: flex-end;
    &__name-and-links {
      display: flex;
      align-items: flex-end;
      img {
        width: 14px;
        height: 14px;
        margin-left: 5px;
      }
      &__link {
        font-size: 16px;
        margin-left: 3px;
      }
    }
    &__profile-pic { 
      border-radius: 4px;
      width: 100px;
      height: 100px;
      margin-right: 10px;
    }
  }
  &__item {
    margin-left: 10px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      iconLinks: [
        {
          href: "https://twitter.com/probablysaif",
          type: "logo-twitter"
        },
        {
          href: "https://www.linkedin.com/in/a5rahman/",
          type: "logo-linkedin"
        },
      ],
      things: [
        {
          title: "Credentials",
          items: [
            "Frontend (and some Backend) Software Engineer @ SonicWALL",
            "UCSD CS '17",
          ],
        },
        {
          title: "Email",
          items: [
            "probablysaif @ gmail dot com",
          ],
        },
        {
          title: "Things I Like - Front End Development",
          items: [
            "VueJS, Typescript, Webpack",
            "CSS Flexbox / CSS Grid, BEM Methodology"
          ]
        },
        {
          title: "Things I Like - Back End Development",
          items: [
            "NodeJS (TSNode), REST APIs",
          ]
        },
        {
          title: "Things I'm Interested In Professionally (Abridged Version)",
          items: [
            "Gall's Law",
            "WET (Write Everything Twice)",
            "Cloud/DevOPS and fault tolerant systems",
            "UI / UX",
            "React, GraphQL, WebAssembly, and the future of rich web applications",
            "Startups",
            "Interpersonal Relationships",
          ]
        },
        {
          title: "Things I'm Interested In Non Professionally (Abridged Version)",
          items: [
            "Outdoor activities, fitness, high speed chess",
            "Smelling the flowers",
            "Interpersonal Relationships",
          ],
        },
        {
          title: "Todos",
          items: [
            "write blog posts",
            "setup google analytics",
            "add portfolio page",
            "look into adding website thumbnails",
            "Look into SEO",
            "Look into adding some commenting ability; disqus, etc",
            "Look into what other features most blogs have, i.e. sharing, searching posts, etc"
          ]
        },

      ],
    };
  },
  mounted() {},
  methods: {},
  computed: {
    isMobile () {
      var check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    }
  }
};
</script>