import { Button, TextField, Stack } from '@mui/material';

const sendHomePage: React.FC = () => {
  return (
    <Stack spacing={10} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: '35px', height: '50%' }}>
      <Stack spacing={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div>Upload a file to get started</div>
          <div> Suported file types: doc, pdf, jpeg, wav, png, mp3</div>
        </div>
        <Button variant="contained" color="primary" sx={{ marginBottom: '20px', width: '300px', fontSize: '17px', bgcolor: 'white', color: 'black', fontWeight: 'bold' }}>
          Upload File
        </Button>
      </Stack>
      <Stack spacing={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TextField label="ENTER FILE LINK HERE" variant="filled" sx={{ bgcolor: 'white', width: '400px', marginBottom: '10px' }} />
        <Button variant="contained" sx={{ width: '300px', fontSize: '17px', bgcolor: 'white', color: 'black', fontWeight: 'bold' }}>
          Download File
        </Button>
      </Stack>
    </Stack>
  );
};
export default sendHomePage;
