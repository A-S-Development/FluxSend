'use client';
import Header from './header';
import Footer from './footer';
import { Container, Stack } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import SendHomePage from './send/sendHomePage';
import ChatHomePage from './chat/chatHomePage';
import ChatSession from './chat/chatSession';
import VideoHomePage from './video/videoHomePage';
import VideoSession from './video/videoSession';

export default function Home() {
  return (
    <Router>
      <Header />
      <Stack>
        <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', bgcolor: '#1a1a1a', height: '90vh', paddingBottom: '20vh' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/send" element={<SendHomePage />} />
            <Route path="/chat" element={<ChatHomePage />} />
            <Route path="/chatSession" element={<ChatSession />} />
            <Route path="/video" element={<VideoHomePage />} />
            <Route path="/videoSession" element={<VideoSession />} />
          </Routes>
        </Container>
      </Stack>
      <Footer />
    </Router>
  );
}
