module.exports = {
  Query: {
    product:(parent, args, context, info) => {
      console.log('f: query product')
      console.log('f: parent', {parent})
      console.log('f: args', {args})
      console.log('f: context', {context})
      console.log('f: info', info.fieldNodes[0].selectionSet.selections.map(s => s.name))
      
      const product = {
        id: "1",
        title: 'some product',
        url: 'some description',
        price: {
          cost: {
            amount: 8.0,
            currencyCode: 'USD'
          },
          deal: 10.0,
          dealSavings: {
            ammount: 5.0,
            currencyCode: 'USD'
          }
        },
        salesRank: 1,
        salesRankInCategory: 2,
        salesRankOverall: 3,
        category: 'ELECTRONICS',
        images: ['https://api.cloudinary.com/cbolanos/product.png'],
        primaryImage: 'https://api.cloudinary.com/cbolanos/primary.png',        
      }
      console.log('f: query product return', product)
      return product;
    },
  }
}
