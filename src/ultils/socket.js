import io from "socket.io-client";
const SOCKET_HOST = process.env.REACT_APP_SRC_HOST;
const SOCKET_PORT = process.env.REACT_APP_API_PORT;
export default () => {
  return io(`${SOCKET_HOST}:${SOCKET_PORT}`);
};
