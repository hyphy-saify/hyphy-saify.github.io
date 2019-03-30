<template>
  <div class="about">
    
    
    <div class="about__head">
      <img src="./img/profilepic.jpg"> 
      <div>
        <h2>Abdur Saif Rahman</h2>
        <p>
          <i>“The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.”</i>
        </p>
        <p>
          - Ralph Waldo Emerson
        </p>
      </div>
    </div>
    <template v-for="thing in things">
      <h3 :key="`${thing.title}-title`">{{thing.title}}</h3>
      <template v-for="item in thing.items">
        <p :key="item" class="about__item">- {{item}}</p>
      </template>
    </template>
  </div>
</template>

<style lang="sass">
.about {
  &__head {
    margin-top: 20px;
    display: flex;
    align-items: flex-end;
    img {   
      width: 100px;
      height: 100px;
      margin-right: 10px;
    }
    p {
      max-width: 70%;
    }
  }
  padding: 10px;
  h3 {
    margin-top: 20px;
  }
  &__item {
    max-width: 50%;
    margin-left: 10px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      things: [
        {
          title: "Credentials",
          items: [
            "Frontend (more and more Fullstack every day) Software Engineer @ SonicWALL",
            "UCSD CS '17",
          ],
        },
        {
          title: "Things I Like - Front End Development",
          items: [
            "VueJS",
            "Typescript",
            "Webpack",
            "CSS Flexbox / CSS Grid",
            "BEM Methodology"
          ]
        },
        {
          title: "Things I Like - Back End Development",
          items: [
            "NodeJS (TSNode)",
            "REST APIs",
          ]
        },
        {
          title: "Things I'm Interested In Professionally (Abridged Version)",
          items: [
            "Gall's Law",
            "WET (Write Everything Twice)",
            "Cloud/DevOPS and fault tolerant systems",
            "UI / UX",
            "WebAssembly and the future of rich front end web applications",
            "Startups",
            "Interpersonal Relationships",
          ]
        },
        {
          title: "Things I'm Interested In Non Professionally (Abridged Version)",
          items: [
            "Outdoor activities, fitness",
            "Smelling the flowers",
            "Interpersonal Relationships",
          ],
        },
        {
          title: "Todos",
          items: [
            "Add professional links",
            "Setup blog page, add a blog post - 'Thoughts on Getting my AWS Cert - From a Front end developer Perspective'",
            "add portfolio page",
          ]
        },

      ],
    };
  },
  mounted() {},
  methods: {},
  computed: {}
};
</script>