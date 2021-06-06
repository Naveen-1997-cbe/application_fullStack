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
            minWidth: 300,
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
                <button onClick={props.add} className="add-btn"><GroupAddIcon className="add-icon"/></button>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Phone</TableCell>
                                <TableCell align="left">Address</TableCell>
                                <TableCell align="left">State</TableCell>
                                <TableCell align="left">Country</TableCell>
                                <TableCell align="left">Pincode</TableCell>
                                <TableCell align="left">Edit</TableCell>
                                <TableCell align="left">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                             {props.contents.map((row, index) => (
                                <TableRow key={row}>
                                     <TableCell component="th" scope="row">
                                     {row.phone}
                                    </TableCell>  
                                    <TableCell >
                                     {row.address}
                                    </TableCell> 
                                    <TableCell>
                                     {row.state}
                                    </TableCell>
                                    <TableCell>
                                     {row.country}
                                    </TableCell>  
                                    <TableCell>
                                     {row.pincode}
                                    </TableCell> 
                                    <TableCell align="left"><EditIcon onClick={() => props.edit(row,index)} style={{ color: "#34495E", cursor: "pointer" }} /></TableCell>
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
