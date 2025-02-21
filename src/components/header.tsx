'use client';
import React from 'react';
import { Box, Button, Stack } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const header: React.FC = () => {
  return (
    <Stack spacing={0} direction="row" sx={{ bgcolor: 'white', px: 2, height: '7vh' }}>
      <Box sx={{ flex: '0 1 auto', width: '20vw', color: '#1a1a1a', fontSize: 52, display: 'flex', alignItems: 'center', fontFamily: 'monospace' }}>
        <Link href="/">FluxSend</Link>
      </Box>
      <Box sx={{ flex: '1 1 auto', width: '60vw', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Image src="/img/FluxSendLogo.png" alt="FLUX" height={100} width={100} />
      </Box>
      <Box sx={{ flex: '0 1 auto', width: '20vw', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/send">
          <Button
            variant="contained"
            sx={{
              bgcolor: '#808080',
              height: '40%',
              width: '17%',
              '&:hover': {
                bgcolor: '#A9A9A9', // Change this to the desired hover color
              },
            }}
          >
            SEND
          </Button>
        </Link>
        <Link href="/chat">
          <Button
            variant="contained"
            sx={{
              bgcolor: '#808080',
              height: '40%',
              width: '17%',
              '&:hover': {
                bgcolor: '#A9A9A9', // Change this to the desired hover color
              },
            }}
          >
            CHAT
          </Button>
        </Link>
        <Link href="/video">
          <Button
            variant="contained"
            sx={{
              bgcolor: '#808080',
              height: '40%',
              width: '17%',
              '&:hover': {
                bgcolor: '#A9A9A9', // Change this to the desired hover color
              },
            }}
          >
            VIDEO
          </Button>
        </Link>
      </Box>
    </Stack>
  );
};

export default header;
