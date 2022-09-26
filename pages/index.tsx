import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import MailIcon from '@mui/icons-material/Mail';
import { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <Drawer
      variant="permanent"
    >
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
  )
}

export default Home
