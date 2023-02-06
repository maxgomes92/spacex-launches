import ReactDOM from 'react-dom/client';
import LaunchesPage from './pages/launches';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { PATH } from './utils/constants';
import HomePage from './pages/home';
import RocketsPage from './pages/rockets';

// CSS imports
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const client = new ApolloClient({
  uri: "https://spacex-production.up.railway.app",
  cache: new InMemoryCache(),
});

root.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path={PATH.home} element={<HomePage />} />
          <Route path={PATH.launches} element={<LaunchesPage />} />
          <Route path={PATH.rockets} element={<RocketsPage />} />
          <Route path="*" element={<Navigate replace to={PATH.home} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </ApolloProvider>
);
