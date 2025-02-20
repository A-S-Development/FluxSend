import { Container } from '@mui/material';

const homePage: React.FC = () => {
  return (
    <Container sx={{ bgcolor: '#1a1a1a', height: '90vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: '35px' }}>
      <h1>Welcome To FluxSend! </h1>
      <h2>Select an option at the top right.</h2>
    </Container>
  );
};
export default homePage;
