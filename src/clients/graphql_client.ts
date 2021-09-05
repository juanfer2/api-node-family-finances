import Client from "./graphql_conexion";

export interface IGraphqlClient {
  query(queryString: string, variables: any): any;
  mutation(queryString: string, variables: any): any;
}

class GraphqlClient implements IGraphqlClient{
  private client: any;

  constructor(token: string){
    this.client = Client(token)
  }

  public async query(queryString: string, variables: any) {
    return await this.client.request(queryString, variables)
  }

  public async mutation(mutationString: string, variables: any) {
    return await this.client.request(mutationString, variables)
  }
}

export default GraphqlClient;
