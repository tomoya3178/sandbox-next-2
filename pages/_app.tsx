import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Box, Container, createTheme, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ThemeProvider } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';

const theme = createTheme()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Container>
      <Drawer variant="permanent">
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon><MailIcon /></ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </ Drawer>
      </Container>
      <Container component="main">
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  )
}

export default MyApp
