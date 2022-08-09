/**
What is a resolver?
- A resolver is a function.
- It has the same name as the field that it populates data for.
- It can fetch data from any data source, then transforms that data into the shape your client requires
*/

/**
Resolver functions have a specific signature with four optional parameters:
- parent
- args
- context
- info
*/

const resolvers = {
    // resolver for Query type
    Query: {
      // returns an array of Tracks that will be used to populate
      // the homepage grid of our web client

      // We don't need the first two parameters, so as a convention, we'll name them with underscores: one underscore for the first (parent) and two underscores for the second (args).
      tracksForHome: (_, __, { dataSources }) => {
        /*
        What is context?
         context is an object shared across all resolvers that are executing for a particular operation.
         The resolver needs this context argument to share state, like authentication information, a database connection, or in our case the RESTDataSource
        */
        return dataSources.trackAPI.getTracksForHome();
      }
    },

    // resolver for Field Type
    Track: {
        author: (parent, _, { dataSources }) => {
            /*
            What is parent
             parent is the returned value of the resolver for this field's parent.
             This will be useful when dealing with resolver chains.
            */

            /*
                Parent of author -> Track
                Resolver for Track -> tracksForHome
            */
            const authorId = parent.authorId;
            return dataSources.trackAPI.getAuthor(authorId);
        }
    }
};

module.exports = resolvers;
