import SocketIO from "socket.io";
import { ConnectionSocketIO } from '../interfaces/socket.io';
import { CONNECTION, GET_EXPENSES, DISCONNECT } from '../constants/socket.io'
import ExpensesService from "../services/v1/expenses_service";

class ConnectionSocket implements ConnectionSocketIO{
  private io: any;
  public socketIO: SocketIO.Socket;

  constructor(
    public serverHttp: any,
    private expensesService = new ExpensesService
  ) {
    console.log("Socket connected!");
    this.io = new SocketIO.Server(serverHttp, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"]
      }
    })
  }

  public connected(){
    this.io.on(CONNECTION, (connectSocket: SocketIO.Socket) => {
      this.socketIO = connectSocket;

      this.socketIO.on("healt", (data:any) => {
        //console.log('healt')
        //console.log(data)
        this.io.emit("healt", {status: "ok"});
      })

      this.socketIO.on("get_expenses", async(data:any) => {
        //console.log('get_expenses')
        //console.log(data)
        const expenses = await this.expensesService.expenses(5)
        this.io.emit("get_expenses", expenses);
      })

       //this.socketIO.on('get_expenses', async (data: any) =>{
       //  console.log('expenses')
       //   console.log(data)
       //   //const expenses = await this.expensesService.expenses(4)
       //   this.io.emit('get_expenses', 'expenses');
       //  
       //})
    })
  }

  public disconnected(){
    this.io.on(DISCONNECT, function() {
      console.log("Disconnected!");
    });
  }

  public getSocket(): any{
    return this.socketIO;
  }
}

export default ConnectionSocket;
