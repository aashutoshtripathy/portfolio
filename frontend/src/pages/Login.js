import { Avatar, Button, Container, IconButton, Input, Paper, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import CameraIcon from '@mui/icons-material/CameraAlt';
import VisuallyHiddenInput from '../components/styles/styledComponent.js'



const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [inputValue, setVnputValue] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    pass: "",
    cpass: ""
  })

  const handleChange = (identifier,value) => {
        setVnputValue(prevVal => ({
            ...prevVal,
            [identifier]: value
        }))
  }


  const toggleLogin = () => setIsLogin((prev) => !prev) 
  return (
    <div>
      <Container component={"main"} maxWidth="xs" sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {isLogin ? (
            <>
              <Typography variant="h5">Login</Typography>
              <form>
                <TextField
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                >
                  Login
                </Button>
                <Typography align="center" sx={{marginTop: "1rem"}}>Or</Typography>
                <Button
                  sx={{ marginTop: "1rem" }}
                  varient="contained"
                  color="primary"
                  fullWidth
                  onClick={toggleLogin}
                >
                  Sign Up Instead
                </Button>
              </form>
            </>
          ) : (
            <>
            <Typography variant="h5">Sign Up</Typography>
            <form>
                <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain"
                }}/>
                <IconButton sx={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    color: "white",
                    bgcolor: "rgba(0,0,0,0.5)",
                    "hover" : {
                        bgcolor: "rgba(0,0,0,0.7)",
                    }
                }}
                component="label"
                >
                    <>
                    <CameraIcon/>
                    <VisuallyHiddenInput type="file"/>
                    </>
                </IconButton>
                </Stack>
              <TextField
                required
                fullWidth
                name="fname"
                value={inputValue.fname}
                onChange={(e) => handleChange('fname',e.target.value)}
                label="First Name"
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                value={inputValue.lname}
                onChange={(e) => handleChange('lname',e.target.value)}
                name="lname"
                label="Last Name"
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                value={inputValue.email}
                onChange={(e) => handleChange('email',e.target.value)}
                name="email"
                label="E-Mail"
                type="email"
                margin="normal"
                variant="outlined"
              />
                <TextField
                required
                fullWidth
                value={inputValue.mobile}
                onChange={(e) => handleChange('mobile',e.target.value)}
                name="mobile"
                label="Mobile No."
                type="number"
                margin="normal"
                variant="outlined"
              />
               <TextField
                required
                fullWidth
                value={inputValue.pass}
                onChange={(e) => handleChange('pass',e.target.value)}
                name="pass"
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
              />
               <TextField
                required
                fullWidth
                value={inputValue.cpass}
                onChange={(e) => handleChange('cpass',e.target.value)}
                name="cpass"
                label="Re-Password"
                type="password"
                margin="normal"
                variant="outlined"
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                color="primary"
                sx={{ marginTop: "1rem" }}
              >
                Sign Up
              </Button>
              <Typography align="center" sx={{marginTop: "1rem"}}>Or</Typography>
              <Button
                sx={{ marginTop: "1rem" }}
                varient="contained"
                fullWidth
                color="primary"
                onClick={toggleLogin}
              >
                Login Instead
              </Button>
            </form>
          </>
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
