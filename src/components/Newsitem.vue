<template>
  <div class="card d-flex flex-row">
    <img
      class="item-image"
      :src="item.afbeelding.url"
      :alt="item.afbeelding.alttext"
    />
    <div class="text-left p-3 flex-column">
      <h4>{{ item.titel }}</h4>
      <!-- <div v-html="this"></div> -->
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
};
</script>
<style scoped>
/* .item-image {
  width: 180px;
} */
</style>