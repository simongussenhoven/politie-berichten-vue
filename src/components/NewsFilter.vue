<template>
  <div class="filterbar bg-white">
    <form class="d-flex flex-row justify-content-center w-100">
      <div class="d-flex flex-column text-left p-1">
        <span class="text-muted">Van</span>
        <input
          type="date"
          name="fromdate"
          :value="fromDate"
          @change="this.$emit('updateFromDate', event.target.value)"
        />
      </div>
      <div class="d-flex flex-column text-left p-1">
        <span class="text-muted">Tot</span>
        <input
          type="date"
          name="todate"
          :value="toDate"
          @change="this.$emit('updateFromDate', event.target.value)"
        />
      </div>
      <div class="d-flex flex-column text-left p-1">
        <span class="text-muted">Zoekterm</span>
        <input type="text" name="search" />
      </div>
      <div class="d-flex flex-column flex-end text-left p-1">
        <input class="mb-0 mt-auto" type="submit" name="submit" value="submit" />
      </div>
    </form>
  </div>
</template>
<script lang="ts">
export default {
  name: "NewsFilter",
  props: {
    fromDate: String,
    toDate: String,
    searchQuery: String,
  },
};
</script>
<style scoped>
.text-muted {
  font-size: 11px;
}
.filterbar {
  position: sticky;
  top: 0;
  z-index: 100;
}
</style>