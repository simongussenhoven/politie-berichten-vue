<template>
  <main class="container">
    <h3 class="p-5">Nieuwsberichten</h3>
    <ul>
      <li v-for="item in newsItems" :key="item.uid">
        <Newsitem :item="item" />
      </li>
    </ul>
  </main>
</template>

<script>
import Newsitem from "./Newsitem.vue";

export default {
  name: "News",
  components: {
    Newsitem,
  },
  async created() {
    this.getNewsData();
  },
  data: function () {
    return {
      newsItems: [],
      isLoading: true,
    };
  },
  methods: {
    async getNewsData() {
      await fetch(`/.netlify/functions/getNewsItems`)
        .then((x) => x.json())
        .then((result) => {
          this.newsItems = result.data.nieuwsberichten;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>