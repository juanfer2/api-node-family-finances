import Client from "./graphql_conexion";

export interface IGraphqlClient {
  query(queryString: string, variables: any): any;
  mutation(queryString: string, variables: any): any;
}

class GraphqlClient implements IGraphqlClient{
  private client: any;

  constructor(){
    this.client = Client
  }

  public async query(queryString: string, variables: any) {
    this.client.query({
      variables,
      query: queryString
    });
  }

  public async mutation(mutationString: string, variables: any) {
    this.client.mutate({
      variables,
      mutation: mutationString,
    });
  }
}

export default GraphqlClient;
