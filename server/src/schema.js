// gql
// 1. It's a tagged template literal, used for wrapping GraphQL strings like the schema definition below
// 2. It converts GraphQL strings into the format that Apollo libraries expect when working with operations and schemas, and it also enables syntax highlighting
const { gql } = require('apollo-server');

const typeDefs = gql`
    "The Query type's fields define which data clients can query from our schema."
    type Query {
        "Get Tracks for Home Page"
        tracksForHome: [Track!]!
    }

    "Track: represents a particular learning track"
    type Track {
        "Unique Identifier of a Track"
        id: ID!

        "Title of Track"
        title: String!

        "Author of Track"
        author: Author!

        "Track thumbnail URL"
        thumbnail: String

        "Track duration"
        length: Int

        "Number of modules in Track"
        modulesCount: Int
    }

    "Author of a complete Track or a Module"
    type Author {
        "Unique Identifier of an Author"
        id: ID!

        "Author's first ad last name"
        name: String!

        "Author's profile picture URL"
        photo: String
    }
`;

module.exports = typeDefs;
