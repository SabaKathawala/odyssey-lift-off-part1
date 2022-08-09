const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const mockedData = require('./mocks/mockedData');

const server = new ApolloServer({
    typeDefs: typeDefs,
    // This instructs Apollo Server to populate every queried schema field with a
    // placeholder value (such as Hello World for String fields).
    mocks: mockedData
});

server.listen().then(() => {
    console.log(`
        🚀 Server is running!
        🔉  Listening on port 4000
        📭  Query at "http://localhost:4000"
    `)
});
