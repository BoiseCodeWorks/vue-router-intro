<template>
  <div class="review-cards">
    <p>
      <router-link to="/add-review">Add A Review</router-link>
    </p>
    <div v-for='review in reviews'>
      <p>{{review.username}} - {{review.restaurant}} - {{review.rating}}</p>
    </div>
  </div>
</template>

<script>
  import { store } from '../store/reviews-store'

  export default {
    name: 'review-cards',
    data() {
      return {
        reviews: store.getReviews(),
        showReviews: false
      }
    },
    methods: {
      showReviewsToggle() {
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