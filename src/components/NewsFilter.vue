<template>
  <div class="filterbar bg-white">
    <form class="d-flex flex-row justify-content-center w-100">
      <div class="d-flex flex-column text-left p-1">
        <span class="text-muted">Van</span>
        <input type="date" name="datefrom" />
      </div>
      <div class="d-flex flex-column text-left p-1">
        <span class="text-muted">Tot</span>
        <input type="date" name="dateto" />
      </div>
      <div class="d-flex flex-column text-left p-1">
        <span class="text-muted">Zoekterm</span>
        <input type="text" name="search" />
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "NewsFilter",
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