import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

import './Main.css';

const Main = () => {
  const isActive = useMediaQuery('(max-width: 500px)');
  return (
    <div className="Main">
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }} >
        <div
          style={{
            position: "relative",
            minWidth: "100%",
          }} >
          <Outlet/>
        </div>
      </Container>
    </div>
  )
}

export default Main
