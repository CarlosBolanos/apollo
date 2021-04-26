module.exports = {
  Product: {
    title(product){
      console.log('f: Product.title', product)
      return product.title;
    }
    // product:(_, __, ___, ____) => {
    //   console.log('f: ping reference product')
    //   return {
    //     id: "1",
    //     title: 'some product',
    //     url: 'some description',
    //     price: {
    //       cost: {
    //         amount: 8.0,
    //         currencyCode: 'USD'
    //       },
    //       deal: 10.0,
    //       dealSavings: {
    //         ammount: 5.0,
    //         currencyCode: 'USD'
    //       }
    //     },
    //     salesRank: 1,
    //     salesRankInCategory: 2,
    //     salesRankOverall: 3,
    //     category: 'ELECTRONICS'    
    //   }
    // }
  }
}
