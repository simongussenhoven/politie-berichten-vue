<template>
  <main class="container">
    <h3 class="p-5">Nieuwsberichten</h3>
    <ul class="news-list">
      <li v-for="item in newsItems" :key="item.uid">
        <Newsitem :item="item" @open-modal="openModal"/>
      </li>
    </ul>
    <NewsModal v-if="showModal" @close-modal="closeModal" :modalData="modalData"/>
  </main>
</template>

<script>
import Newsitem from "./Newsitem.vue";
import NewsModal from "./NewsModal.vue"

export default {
  name: "News",
  components: {
    Newsitem,
    NewsModal,
  },
  async created() {
    this.getNewsData();
    
  },
  async mounted() {
    this.modalData = this.newsItems[0];
  },
  data: function () {
    return {
      newsItems: [],
      isLoading: true,
      showModal: false,
      modalData: {},
    };
  },
  methods: {
    async getNewsData() {
      await fetch(`/.netlify/functions/getNewsItems`)
        .then((x) => x.json())
        .then((result) => {
          result.data.nieuwsberichten.forEach(item => {
            this.newsItems.push(item)
          })
        })
        .catch((err) => {
          console.log(err);
        });
    },
    openModal(item){
      this.modalData = item;
      this.showModal = true;
    },
    closeModal(){
      console.log("close modal!")
      this.showModal = false;
    }
  },
};
</script>
<style scoped>
  .news-list {
    list-style-type:none;
  }
</style>