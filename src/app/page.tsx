'use client';
import { Container } from '@mui/material';
import io from 'socket.io-client';

export default function Home() {
  const socket = io('https://localhost:3001');
  // Example signaling data
  socket.emit('signal', { type: 'offer', sdp: '...' });
  socket.on('signal', (data) => {
    console.log('Received signaling data:', data);
    //Testing purposes only above^^^
  });
  return (
    <Container sx={{ bgcolor: '#1a1a1a', height: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: '35px' }}>
      <h1>Welcome To FluxSend! </h1>
      <h2>Select an option at the top right.</h2>
    </Container>
  );
}
