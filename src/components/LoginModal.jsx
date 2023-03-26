import React, { useState } from 'react';
import { Button, Stack, TextField, Typography } from '@mui/material';

// const data = [
//   { id: 1, name: 'FDA' },
//   { id: 2, name: 'Jane Hopkins' },
//   { id: 3, name: 'Bavaria' },
// ];

const LoginModal = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // perform login logic here
  };

  return (
    <div className="modal">
      <Typography
        align = "center"
        sx = {{ color: "#fff" }}
        variant = "h1"
      >
        {props.name}
      </Typography>
      <Typography
        align = "center"
        sx = {{ color: "#fff"}}
        variant = "h2"
      >
        Login
      </Typography>
      <Stack
        spacing = {4}
      >
        <TextField
        sx={{
          input: {
            fontWeight: '500',
            border: 'none',
            borderRadius: '4px'
          },
          width: '400px',
          backgroundColor: '#fff',
          borderRadius: '40px'
        }}
        height="76px"
        //value={search}
        //onChange={(e) => setSearch(e.target.value.toLowerCase())}
        placeholder="E-mail Address"
        type="text"
        />
        <TextField
          sx={{
            input: {
              fontWeight: '500',
              border: 'none',
              borderRadius: '4px'
            },
            width: '400px',
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
          height="76px"
          //value={search}
          //onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Password"
          type="text"
        />
        <Button
          sx = {{
            bgcolor: "#004000",
            width: "100px"
          }}
          variant = "contained"
        >
          Submit
        </Button>
        <Button
          sx = {{ 
            bgcolor: "#004000",
            width: "100px"
          }}
          variant = "contained"
        >
          Register
        </Button>
      </Stack>
      
    </div>
  );
};

export default LoginModal;

      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />

        <button type="submit">Login</button>
      </form> */}