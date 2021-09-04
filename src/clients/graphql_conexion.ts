import { request, gql, GraphQLClient } from 'graphql-request'

// https://family-finances-backend.herokuapp.com/api/v1/graphql
// http://localhost:3000//api/v1/graphql

// Run GraphQL queries/mutations using a static function
// ... or create a GraphQL client instance to send requests
const Client = new GraphQLClient('http://localhost:3000//api/v1/graphql', { 
  headers: {
    Authorization: 'dQ6mrGdtaCF2JxyhWaqh',
  }
})
//client.request(query, variables).then((data) => console.log(data))

export default Client
