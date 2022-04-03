<template>
    <Navbar/>
    <News/>
</template>

<script>
import Navbar from './Navbar'
import News from './News'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Navbar,
    News
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
