import { useRouteError, useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ReplyIcon from '@mui/icons-material/Reply';


const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="sm"
        id="error-page"
        sx={{
          backgroundColor: "white",
          // position: "absolute",
          // left: "50%",
          // bottom: "50%",
          // padding: "20px",
          // transform: "translate(-50%)"
        }}
        className="MainItem"
      >
        <Button onClick={() => (navigate(-1))} variant="contained">
          <ReplyIcon/>
        </Button>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </Container>
    </>
  );
}

export default ErrorPage;



