import { Button, TextField, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const videoHomePage: React.FC = () => {
  return (
    <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: '35px', height: '50%' }}>
      <Link to="/videoSession" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary" sx={{ marginBottom: '20px', width: '400px', fontSize: '17px', bgcolor: 'white', color: 'black', fontWeight: 'bold' }}>
          GENERATE VIDEO SESSION
        </Button>
      </Link>
      <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TextField label="ENTER VIDEO SESSION LINK" variant="filled" sx={{ bgcolor: 'white', width: '400px', marginBottom: '10px' }} />
        <Button variant="contained" sx={{ width: '150px', fontSize: '17px', bgcolor: 'white', color: 'black', fontWeight: 'bold' }}>
          JOIN
        </Button>
      </Stack>
    </Stack>
  );
};
export default videoHomePage;
