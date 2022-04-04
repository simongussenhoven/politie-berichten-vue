<template>
  <div class="card d-flex flex-row shadow m-2 rounded">
    <div class="image-container">
      <img class="news-image" :src="getImage(item.afbeelding)" :alt="item.afbeelding.alttext" />
    </div>
    <div class="text-left p-3 flex-column">
      <h4>{{ item.titel }}</h4>
      <p class="text-muted">{{ item.publicatiedatum }}</p>
      <div v-html="item.introductie"></div>
      <button class="btn btn-primary mt-3" @click="openModal(item)">Lees meer</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Newsitem",
  data() {
    return {
      formattedTexts: {
        type: Array,
        default: [],
      },
    };
  },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    getImage: function (afbeelding) {
      if (afbeelding.url == "") {
        return "https://www.politie.nl/binaries/w98h130/content/gallery/politie/stock-oost-brabant/10.jpg";
      }
      return afbeelding.url;
    },
    openModal (item) {
      this.$emit("open-modal", item)
    }
  },
};
</script>
<style scoped>

.text-muted {
  font-size: 12px;
}
.news-image {
  object-fit: cover;
}
</style>