// // mport React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { TextField, Button, Box, Typography, Paper } from '@mui/material';
// import Aos from 'aos';
// import 'aos/dist/aos.css';
// import axios from "axios";
// import { message } from "antd";

// // Import the logo image
// import logo from './assets/logoTWC.png'; // Replace with your actual path to the logo image

// function LoginDesign() {
//   useEffect(() => {
//     Aos.init({ duration: 2000 });
//   }, []);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   // ... (Rest of your handleInputChange and handleSubmit functions)

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: '100vh',
//         backgroundColor: 'darkslategray' // Or any other color you want for the background
//       }}
//     >
//       <Paper
//         elevation={10}
//         sx={{
//           p: 4,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           borderRadius: 2
//         }}
//       >
//         <img src={logo} alt="Logo" style={{ marginBottom: '20px' }} />
//         <Typography component="h1" variant="h5" sx={{ color: 'black', mb: 2 }}>
//           Hi there,
//           <br />
//           Welcome to our contacts portal
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="E-mail"
//             name="email"
//             autoComplete="email"
//             autoFocus
//             onChange={handleInputChange}
//             variant="outlined"
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             onChange={handleInputChange}
//             variant="outlined"
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2, bgcolor: 'red' }}
//           >
//             Login
//           </Button>
//           <Link to="/SignUp" style={{ textDecoration: 'none', color: 'red' }}>
//             Click here to Register
//           </Link>
//         </Box>
//       </Paper>
//     </Box>
//   );
// }

// export default LoginDesign;

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, Button, CssBaseline, TextField, Paper, Box, Typography, Grid } from '@mui/material';
import Aos from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";
import { message } from "antd";

function LoginDesign() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email, password };
    setLoading(true);
    
    // Replace the axios post URL with your backend endpoint
    axios.post("http://your-backend-endpoint/users/login", data)
      .then((response) => {
        setLoading(false);
        if (response.status === 200) {
          message.success("Login successful");
          navigate("/home");
        } else {
          message.error("Login failed");
        }
      })
      .catch((error) => {
        setLoading(false);
        message.error("Error during login");
      });
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid item xs={12} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%'
          }}
        >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZD7NTa2ZeYUoSBDgOQD4xRa7GFLz4qTMyOtQY1DOw2g&s" alt="logo" style={{ marginBottom: '20px' }}/>
          <Typography component="h1" variant="h5">
            Hi there, Welcome to our contacts portal
          </Typography>
          <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: 8 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleInputChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleInputChange}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/forgot-password" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/SignUp" variant="body2">
                  {'Click here to Register'}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default LoginDesign;