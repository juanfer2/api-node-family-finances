import { ConnectionSocketIO } from '../interfaces/socket.io';
import ConnectionSocket from './connection_socket_io'

export const startConnectionSocket = (server: any) => {
  const connectionSocketIo: ConnectionSocketIO = new ConnectionSocket(server);

  connectionSocketIo.connected();
  connectionSocketIo.disconnected();
}
