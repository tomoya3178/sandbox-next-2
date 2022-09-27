import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import MailIcon from '@mui/icons-material/Mail';
import { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <Stack>
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
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Dessert</TableCell>
              <TableCell>Calories</TableCell>
              <TableCell>Fat</TableCell>
              <TableCell>Carbs</TableCell>
              <TableCell>Protein</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          </TableBody>
        </Table>
      </ TableContainer>
    </Stack>
  )
}

export default Home
