<template>
  <div class="review-cards">
    <p>Dis Loaded?</p>
    {{reviews}}
  </div>
</template>

<script>
import { store } from '../store/reviews-store'

export default{
  name: 'review-cards',
  data () {
    return{
      reviews: store.getReviews()
    }
  },
  
}
</script>


<style scoped>

</style>