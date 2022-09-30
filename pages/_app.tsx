import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Box, Container, createTheme, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ThemeProvider } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import Layout from '../components/Layout';

const theme = createTheme()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
