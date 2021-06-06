import React from 'react'
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import GroupAddIcon from '@material-ui/icons/GroupAdd';

function TableComponent(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
        },
        table: {
            minWidth: 650,
        },
        paper: {
            position: "absolute",
            width: 400,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(4),
            outline: "none"
        },
        input: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
            marginBottom: 10
        }
    }));
    const classes = useStyles();
    return (
        <div>
             <div>
                    <form className={classes.input} noValidate autoComplete="off" className="ui-table">
                        <TextField id="outlined-basic" label="Search" onChange={props.filterMethod} variant="outlined" />
                    </form>
                </div>
                <button onClick={props.add} className="add-btn"><GroupAddIcon className="add-icon"/> Add user</button>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Username</TableCell>
                                <TableCell align="left">Mail ID</TableCell>
                                <TableCell align="left">Gender</TableCell>
                                <TableCell align="left">Role</TableCell>
                                <TableCell align="left">Password</TableCell>
                                <TableCell align="left">Edit</TableCell>
                                <TableCell align="left">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.contents.map((row, index) => (
                                <TableRow key={row.id}>
                                     <TableCell component="th" scope="row">
                                        {/* <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar> */}
                                        <span>
                                         {props.avator(row.first_name, row.last_name)} { row.first_name + " " + row.last_name}
                                         </span> 
                                    </TableCell> 
                                    {/* <TableCell align="right">{`${row.first_name + " " + row.last_name}`}</TableCell> */}
                                    <TableCell align="left">{row.email}</TableCell>
                                    <TableCell align="left">{row.gender}</TableCell>
                                    <TableCell align="left">{row.role}</TableCell>
                                    <TableCell align="left">{row.password}</TableCell>
                                    <TableCell align="left"><EditIcon onClick={() => props.edit(row.id, row.first_name, row.last_name, row.email, row.role,row.password)} style={{ color: "#34495E", cursor: "pointer" }} /></TableCell>
                                    <TableCell align="left"><DeleteIcon onClick={() => props.delete(index)} style={{ color: "#CB4335", cursor: "pointer" }} /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
        </div>
    )
}

export default TableComponent;
