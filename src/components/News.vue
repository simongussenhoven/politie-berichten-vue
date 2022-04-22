<template>
  <main>
    <h3 class="pt-3 text-center">Nieuwsberichten</h3>
    <NewsFilter
      :fromDate="fromDate"
      :toDate="toDate"
      :searchQuery="searchQuery"
      @updateFromDate="updateFromDate"
      @updateToDate="updateToDate"
    />
    <div class="container">
      <ul class="news-list">
        <li v-for="item in newsItems" :key="item.uid">
          <Newsitem :item="item" @open-modal="openModal" />
        </li>
      </ul>
    </div>
    <NewsModal
      v-if="showModal"
      @close-modal="closeModal"
      :modalData="modalData"
    />
    <MapContainer />
  </main>
</template>

<script>
import NewsFilter from "./NewsFilter";
import Newsitem from "./Newsitem.vue";
import NewsModal from "./NewsModal.vue";
import MapContainer from "./MapContainer.vue";

export default {
  name: "News",
  components: {
    Newsitem,
    NewsModal,
    NewsFilter,
    MapContainer,
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
      fromDate: "",
      toDate: "",
      searchQuery: "",
    };
  },
  methods: {
    async getNewsData() {
      await fetch(`/.netlify/functions/getNewsItems`)
        .then((x) => x.json())
        .then((result) => {
          result.data.nieuwsberichten.forEach((item) => {
            this.newsItems.push(item);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    openModal(item) {
      this.modalData = item;
      this.showModal = true;
    },
    closeModal() {
      console.log("close modal!");
      this.showModal = false;
    },
    updateFromDate(date) {
      console.log(date)
    }
  },
};
</script>
<style scoped>
.news-list {
  list-style-type: none;
  padding: 0;
}
</style>