<template>
  <header
    class="jumbotron jumbotron-fluid text-light header"
  >
    <div class="container p-5">
      <h1 class="display-1">Politie info</h1>
      <h2>Een React app met data representatie van api.politie.nl</h2>
      <a href="#topmenu">
        <button type="button" class="my-3 mx-1 btn btn-primary">
          Bekijk info
        </button></a
      >
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.politie.nl/algemeen/open-data.html"
        ><button type="button" class="my-3 btn btn-outline-light">
          Over de API
        </button></a
      >
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.header {
  background-image: url("~@/assets/politie-big.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
}
.dark-box {
  background-color: rgba(60, 60, 60, 0.4);
}
</style>