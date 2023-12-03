import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import useMediaQuery from '@mui/material/useMediaQuery';

const Footer = () => {
  const isActive = useMediaQuery('(max-width: 500px)');
  const buttons = [
    {
      link: "https://github.com/BredyByte",
      icon: <GitHubIcon/>,
      color: "#BDB3FFFF",
    },
    {
      link: "https://www.instagram.com/davyd_bredikhin/",
      icon: <InstagramIcon/>,
      color: "#FFF5B3FF",
    },
    {
      link: "https://www.linkedin.com/in/davyd-bredykhin-1u961/",
      icon: <LinkedInIcon/>,
      color: "#B3FFB7FF",
    }
  ];

  const styledFunc = (color) => {
    return {
      mr: 2,
      backgroundColor: "white",
      boxShadow: "0px 10px 20px 2px rgba(0, 0, 0, 0.25)",
      transition: "all ease 0.3s",
      ...(isActive && {width: "45px", height: "45px", mr: 1}),
      "&:hover": {
        backgroundColor: `${color}`,
        transform: "translateY(5px)",
        boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)",
      },
    }
  }

  return (
    <Box
      maxHeight="55px"
      bgcolor="secondary.different"
      zIndex="2"
      position="fixed"
      width="100%"
      bottom="0"
      sx={{
        boxShadow: "2px 0px 4px 1px rgb(0 0 0 / 20%), 4px 0px 5px 1px rgb(0 0 0 / 14%), 1px 0px 10px 1px rgb(0 0 0 / 12%)",
        ...(isActive ? {pt:1, pb:1} : {pt:2, pb:2})
      }}
    >
      <Container maxWidth="xl">
        <Box position="relative">
          <Typography variant="p" sx={{
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.1rem',
           }} >
            Created by David Bredykhin
          </Typography>
          <Box
            position="absolute"
            sx={{
              bottom: "10px",
              right: "0",
              ...(isActive && {bottom: "25px"}),
            }}
          >
            {
              buttons.map((i, index) => (
                <span key={index}>
                  <Fab
                    className="Icon"
                    href={i.link}
                    target="_blank"
                    aria-label="add"
                    sx={styledFunc(i.color)}
                  >
                    {i.icon}
                  </Fab>
                </span>
              ))
            }
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
export default Footer
