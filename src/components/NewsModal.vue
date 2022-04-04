<template>
  <div class="news-modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ modalData.titel }}</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="closeModal"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p v-for="alinea, index in modalData.alineas" :key="index" v-html="alinea.opgemaaktetekst" class="text-left"></p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
            @click="closeModal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NewsModal",
  mounted () {
  document.body.classList.add('modal-open')
  },
  beforeUnmount () {
    document.body.classList.remove('modal-open', 'login')
  },
  props: {
    displayed: {
      type: Boolean,
      default: true,
    },
    modalData: {
      type: Object,
      default: () => {},
    }
  },
  methods: {
      closeModal() {
        console.log("close modal modal lever")
        this.$emit("close-modal")
      },
  },
};
</script>
<style>
.news-modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow: scroll;
  outline: 0;
}
b {
  font-weight: bold;
  font-size: 14px !important;
}
</style>
