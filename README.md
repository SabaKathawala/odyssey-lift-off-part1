# Odyssey Lift-off II: Resolvers

Welcome to the companion app of Odyssey Lift-off II! You can [find the course lessons and instructions on Odyssey](https://odyssey.apollographql.com/lift-off-part2), Apollo's learning platform.

You can [preview the completed demo app here](https://lift-off-client-demo.netlify.app/).

## How to use this repo

The course will walk you step by step on how to implement the features you see in the demo app. This codebase is the starting point of your journey!

There are 3 main folders:

- `server`: The starting point of our GraphQL server.
- `client`: The starting point of our React application.
- `final`: The final stage of both the server and client folders, with all of the steps and code completed!

To get started:

1. Navigate to the `server` folder.
1. Run `npm install`.
1. Run `npm start`.

This will start the GraphQL API server.

In another Terminal window,

1. Navigate to the `client` folder.
1. Run `npm install`.
1. Run `npm start`.

This will open up `localhost:3000` in your web browser.

## Getting Help

For any issues or problems concerning the course content, please refer to the [Odyssey topic in our community forums](https://community.apollographql.com/tags/c/help/6/odyssey).

## Which npm packages did we use

### **apollo-datasource-rest**
- Data sources are classes that Apollo Server can use to encapsulate fetching data from a particular source, such as a database or a REST API.
- You can read more at [Data Sources - Apollo GraphQL Docs](https://www.apollographql.com/docs/apollo-server/data/data-sources/).

## What we learned:
AST: Abstract Syntax Trees
N+1 problem
GraphQL vs REST: When to use 
Using _ as convention for 
DataSources - how caching works and improves performance

As a best practice, when working on your resolvers and data sources, try to keep resolver functions as thin as possible. By doing so, you make your API more resilient to future changes. You can safely refactor your data fetching code, or change the source entirely from a REST API to a database, without breaking your API. This also keeps your resolvers readable and easier to understand, which comes in handy as you define more and more of them!

