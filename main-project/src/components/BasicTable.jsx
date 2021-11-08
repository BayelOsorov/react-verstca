import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { adminContext } from "../contexts/AdminContext";
import { Button, Tooltip } from "@mui/material";
import { Link } from 'react-router-dom'


export default function BasicTable() {
    const { getPhones, phones, deletePhone } = React.useContext(adminContext);

    React.useEffect(() => {
        getPhones()
    }, [])
    return (
        <>
            {
                phones ? (
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Название</TableCell>
                                    <TableCell align="right">Описани</TableCell>
                                    <TableCell align="right">Фото</TableCell>
                                    <TableCell align="right">Цена</TableCell>
                                    <TableCell align="right">Цвет</TableCell>
                                    <TableCell align="right">Бренд</TableCell>
                                    <TableCell align="right">Модель</TableCell>
                                    <TableCell align="right">#</TableCell>
                                    <TableCell align="right">#</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {phones.map((phone) => (
                                    <TableRow
                                        key={phone.id}
                                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {phone.name}
                                        </TableCell>

                                        <Tooltip title={phone.description} >
                                            <p> {phone.description.slice(0, 20)}...</p>
                                        </Tooltip>

                                        <TableCell component="th" scope="row">
                                            <img width='100px' src={phone.image} alt="phone" />
                                        </TableCell>
                                        <TableCell align="right">{phone.price}</TableCell>
                                        <TableCell align="right">{phone.color}</TableCell>
                                        <TableCell align="right">{phone.brand}</TableCell>
                                        <TableCell align="right">{phone.model}</TableCell>
                                        <TableCell align="right">
                                            <Button onClick={() => deletePhone(phone.id)} variant='outlined' color='warning' >
                                                Del
                                            </Button>
                                        </TableCell>
                                        <TableCell align="right">
                                            <Link to={`/admin/edit/${phone.id}`} >
                                                <Button>
                                                    Edit
                                                </Button>
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                ) : (
                    <h2>Loading...</h2>
                )
            }

        </>
    );
}