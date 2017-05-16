<template>
  <div class="review-cards">
    <p>Dis Loaded?</p>
    <button @click="showReviewsToggle">Show Reviews</button>
    <div v-for='review in reviews' v-show='showReviews'>
      <p>{{review.username}} - {{review.restaurant}} - {{review.rating}}</p>
    </div>
    <div v-show='!showReviews'>
      <p>ADVERTISEMENT!!!!</p>
    </div>
  </div>
</template>

<script>
import { store } from '../store/reviews-store'

export default{
  name: 'review-cards',
  data () {
    return{
      reviews: store.getReviews(),
      showReviews: false
    }
  },
  methods: {
    showReviewsToggle(){
      this.showReviews = !this.showReviews
    }
  }
}
</script>


<style scoped>
p {
  color: green;
}
</style>