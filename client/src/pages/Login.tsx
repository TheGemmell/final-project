import * as React from 'react';
import { Link, Grid,
         Box, Typography, Container, Avatar, Button,
         CssBaseline, TextField } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { loginUser } from '../utils/calls';
import Loader from '../components/Spinner';
import { toast } from 'react-hot-toast';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { actions } from '../store';

const theme = createTheme();

export default function SignIn(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const AllActions = bindActionCreators(actions, dispatch);
  const { logIn } = AllActions;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      user: {
        username: data.get('username'),
        password: data.get('password'),
      }
    };

    const user = loginUser(userData)
    toast.promise(user, {
      loading: <Loader show />,
      success: (data) => {
        console.log(data)
        logIn(data)
        navigate('/')
        return `Welcome ${data.user.firstname}!`
      },
      error: (err) => `Error: ${err.statusText}`,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
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
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}