import { 
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material"

export default function Home () {
  return (
    <Paper>
      <Stack>
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
    </ Paper>
  )
}
