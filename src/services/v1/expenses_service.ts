import { gql } from 'graphql-request'
import GraphqlClient, { IGraphqlClient } from "../../clients/graphql_client";
import Client from "../../clients/graphql_conexion";


export const CREATE_EXPENSE = gql`
  mutation createExpense(
    $name: String!
    $projectId: Int!
    $description: String
    $priceTotal: Float
    $totalPaid: Float
    $totalDept: Float
    $datePay: String
    $numberQuota: Int
  ) {
    createExpense(
      input: {
        expenseAttributes: {
          name: $name
          projectId: $projectId
          description: $description
          priceTotal: $priceTotal
          totalPaid: $totalPaid
          totalDept: $totalDept
          datePay: $datePay
          numberQuota: $numberQuota
        }
      }
    ) {
      success
    }
  }
`

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
  private client: IGraphqlClient;

  constructor(
    token:string
  ){
    this.client = new GraphqlClient(token)
  }

  public async expenses(id: any) {
    return await this.client.query(GET_PROJECT, {id})
  }

  public async createExpense(expense: any) {
    return await this.client.mutation(CREATE_EXPENSE, expense)
  }
}

export default ExpensesService;
