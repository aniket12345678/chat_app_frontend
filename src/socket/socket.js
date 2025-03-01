import io from 'socket.io-client';
const socket_client = io('http://localhost:5000/');
export { socket_client }