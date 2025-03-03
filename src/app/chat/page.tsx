'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button, TextField, Stack } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const ChatHomePage: React.FC = () => {
  const [sessionLink, setSessionLink] = useState<string>(''); // To store the generated session link
  const router = useRouter();

  const generateSessionLink = () => {
    const newUUID = uuidv4(); // Generate a new UUID for the session
    setSessionLink(newUUID); // Set the session link for display (optional)
    router.push(`/chat/session/${newUUID}`); // Navigate to the session page
  };

  useEffect(() => {
    console.log('Session Link:', sessionLink);
  }, [sessionLink]);

  return (
    <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: '35px', height: '50%' }}>
      <Button variant="contained" color="primary" sx={{ marginBottom: '20px', width: '400px', fontSize: '17px', bgcolor: 'white', color: 'black', fontWeight: 'bold' }} onClick={generateSessionLink}>
        GENERATE CHAT SESSION
      </Button>
      <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TextField label="ENTER CHAT SESSION LINK" variant="filled" sx={{ bgcolor: 'white', width: '400px', marginBottom: '10px' }} />
        <Button variant="contained" sx={{ width: '150px', fontSize: '17px', bgcolor: 'white', color: 'black', fontWeight: 'bold' }}>
          JOIN
        </Button>
      </Stack>
    </Stack>
  );
};
export default ChatHomePage;
