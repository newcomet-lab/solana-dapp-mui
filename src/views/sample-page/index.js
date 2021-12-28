import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, cohort, amount, vested, start, end, cliffDate, status) {
    return { name, cohort, amount, vested, start, end, cliffDate, status };
}

const rows = [
    createData('John Doe', 'Team', '10,000', 2708.33, '01/01/2022', '12/31/2025', '01/01/2023', 'Activated'),
    createData('Coach J', 'Advisors', '5,000', 856.34, '01/01/2022', '12/31/2025', '01/01/2023', 'Activated'),
    createData('Solana Sid', 'Kols', '1,000', 270, '01/01/2022', '12/31/2025', '01/01/2023', 'Activated'),
    createData('Jane Doe', 'Investors', '10,000', 200, '01/01/2022', '12/31/2025', '01/01/2023', 'Activated')
];

export default function BasicTable() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="center">Cohort</TableCell>
                        <TableCell align="center">Amount</TableCell>
                        <TableCell align="center">Vested</TableCell>
                        <TableCell align="center">Start</TableCell>
                        <TableCell align="center">End</TableCell>
                        <TableCell align="center">Cliff Date</TableCell>
                        <TableCell align="center">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow>
                            <TableCell>{row.name}</TableCell>
                            <TableCell align="center">{row.cohort}</TableCell>
                            <TableCell align="center">{row.amount}</TableCell>
                            <TableCell align="center">{row.vested}</TableCell>
                            <TableCell align="center">{row.start}</TableCell>
                            <TableCell align="center">{row.end}</TableCell>
                            <TableCell align="center">{row.cliffDate}</TableCell>
                            <TableCell align="center">{row.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
