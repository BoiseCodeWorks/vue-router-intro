<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <h1>Re<img src="./assets/logo.png">ues</h1>
        <hello class="col-md-6"></hello>
        <!--v-show on ads vs reviews-->
        <review-cards class="col-md-6"></review-cards>
      </div>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'
import ReviewCards from './components/Review-Cards'

export default {
  name: 'app',
  components: {
    Hello,
    ReviewCards
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
p {
  color: red;
}
</style>
