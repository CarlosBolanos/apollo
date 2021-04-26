module.exports = {
  Query: {
    reviews:(_, __, ___, ____) => {
      console.log('f: ping reviews')
      return [];
    }
  },        
  Product: {
    reviews: (parent) => {
      console.log('f: ping reviews', {parent});
      return [
        {id: '1', rating: 4.5, content: 'best product ever!'},          
        {id: '2', rating: 4.5, content: 'best product ever!'},
      ]
    },
    reviewSummary: () => ({
      totalReviews: 50,
      averageRating: 4
    })
  }
}
