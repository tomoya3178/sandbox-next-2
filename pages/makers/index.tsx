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
import { useEffect, useState } from "react";

export default function Home () {
  const [makers, setMakers] = useState<any[]>([])
  useEffect(() => {
    const fetchMakers = async () => {
      function createData(
        name: string,
        calories: number,
        fat: number,
        carbs: number,
        protein: number,
      ) {
        return { name, calories, fat, carbs, protein };
      }
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];
      setMakers(rows)
    }
    fetchMakers()
  },[])
  const columns = [
    'Dessert',
    'Calories',
    'Fat',
    'Carbs',
    'Protein'
  ]
  return (
    <Paper>
      <Stack>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell key={column}>{column}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {makers.map((maker) => (
                <TableRow
                  key={maker.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {maker.name}
                  </TableCell>
                  <TableCell align="right">{maker.calories}</TableCell>
                  <TableCell align="right">{maker.fat}</TableCell>
                  <TableCell align="right">{maker.carbs}</TableCell>
                  <TableCell align="right">{maker.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ TableContainer>
      </Stack>
    </ Paper>
  )
}
