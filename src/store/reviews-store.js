// PRIVATE PARTS
var state = {
  reviews: [{
    username: 'jake',
    restaurant: 'McMarks',
    rating: 3
  }]
}

// PUBLIC PARTS
let store = {
  getReviews() {
    return state.reviews
  },
  addReview(review) {
    // SOME GARBAGE TO VALIDATE THE REVIEW HERE
    // Lets not accept carrots
    if (!review || !review.username || !review.restaurant || !review.rating && review.rating > 5) { return }
    state.reviews.push(review)
  }
}


export { store }

