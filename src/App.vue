<template>
  <div id="app">
    <div class="container">
      <div>
        <h1>Re<img src="./assets/logo.png">ues</h1>
      </div>
      <div class="row">
        <div class="col-md-8">
          <router-view></router-view>
        </div>
        <div class="col-md-4">
          <router-view name="ads"></router-view>
        </div>
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