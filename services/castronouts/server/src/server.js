const { ApolloServer, MockList } = require('apollo-server');
const resolvers = require('./resolvers');
const typeDefs = require('./schema');
const TrackAPI = require('./track-api');

const mocks = {
  Query: () => ({
    tracksForHome: () => new MockList([6, 9])
  }),
  Track: () => ({
    id: () => 'track_01',
    title: () => 'Astro Kitty, Space Explorer',
    author: () => {
      return {
        name: 'Grumpy Cat',
        photo:
          'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg'
      };
    },
    thumbnail: () =>
      'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
    length: () => 1210,
    modulesCount: () => 6
  })
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      trackAPI: new TrackAPI()
    };
  }  
})

server.listen({
  port: 4005,
}).then(({ url }) => {
  console.log(`🚀 accounts Server ready at ${url}`);
})