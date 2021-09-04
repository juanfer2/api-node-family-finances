import { gql } from 'graphql-request'
import GraphqlClient, { IGraphqlClient } from "../../clients/graphql_client";
import Client from "../../clients/graphql_conexion";


export const GET_PROJECT = gql`
  query project($id: Int!) {
    project(id: $id) {
      id
      description
      title
      expenses {
        id
        name
        description
        priceTotal
        status
      }
    }
  }
`

class ExpensesService {
  constructor(
    private client = Client
  ){}

  public async expenses(id: number) {
    return await await this.client.request(GET_PROJECT, {id})
  }
}

export default ExpensesService;
