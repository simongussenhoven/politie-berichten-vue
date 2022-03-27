<template>
    <Navbar/>
    <Header/>
    <News/>
</template>

<script>
import Navbar from './Navbar'
import Header from './Header'
import News from './News'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Navbar,
    Header,
    News
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
