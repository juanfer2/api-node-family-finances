import { request, gql, GraphQLClient } from 'graphql-request'

// https://family-finances-backend.herokuapp.com/api/v1/graphql
// http://localhost:3000//api/v1/graphql

// Run GraphQL queries/mutations using a static function
// ... or create a GraphQL client instance to send requests

const graphqlAPI: string = process.env.GRAPHQL_API || 'https://family-finances-backend.herokuapp.com/api/v1/graphql'

const Client = (token: string, url: string = graphqlAPI) => {
  
  return new GraphQLClient(url, { 
  headers: {
    Authorization: token || '',
  }
})}
//client.request(query, variables).then((data) => console.log(data))

export default Client
