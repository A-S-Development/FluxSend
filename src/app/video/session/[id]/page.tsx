import { Button, Stack, Box } from '@mui/material';

const VideoSession: React.FC = () => {
  return (
    <Stack sx={{ height: '60vh', width: '100%' }}>
      <Box sx={{ bgcolor: 'black', height: '5%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Button variant="text" sx={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
          X
        </Button>
      </Box>
      <Stack sx={{ bgcolor: 'white', height: '95%' }}></Stack>
    </Stack>
  );
};
export default VideoSession;
