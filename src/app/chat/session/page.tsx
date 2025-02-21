import { Button, TextField, Stack, Box } from '@mui/material';

const chatSession: React.FC = () => {
  return (
    <Stack sx={{ height: '60vh', width: '100%' }}>
      <Box sx={{ bgcolor: 'black', height: '5%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Button variant="text" sx={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
          X
        </Button>
      </Box>
      <Stack sx={{ bgcolor: 'white', height: '95%' }}>
        <Stack sx={{ bgcolor: 'grey', height: '85%' }}></Stack>
        <Stack direction={'row'} sx={{ alignItems: 'center', justifyContent: 'center', height: '15%' }}>
          <TextField label="" variant="filled" sx={{ bgcolor: 'white', width: '85%', marginBottom: '10px' }} />
          <Button variant="text" sx={{ color: 'black', fontSize: '20px', fontWeight: 'bold' }}>
            SEND
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default chatSession;
