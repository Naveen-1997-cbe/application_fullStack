import React from 'react'
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import { Button } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function TableComponent(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
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
    const handleClick = (event) => {
        debugger;
        setAnchorEl(event.currentTarget);
      
    };
    const handleClose = (type) => {
        setAnchorEl(null);
        console.log('type', type);
    };
    const handleChange = (id) => {
        console.log('particular id',id)
      };
    const classes = useStyles();
    return (
        <div>

            <button onClick={props.add} className="add-btn"><GroupAddIcon className="add-icon" /> Add user</button>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Username</TableCell>
                            <TableCell align="left">Mail ID</TableCell>
                            <TableCell align="left">Role</TableCell>
                            <TableCell align="left">Password</TableCell>
                            <TableCell align="left">Options</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.contents.map((row, index) => (
                            
                            <TableRow key={row._id}>
                                <TableCell component="th" scope="row">
                                    {/* <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar> */}
                                    <span>
                                        {row.firstName + " " + row.lastName}
                                    </span>
                                </TableCell>
                                {/* <TableCell align="right">{`${row.first_name + " " + row.last_name}`}</TableCell> */}
                                <TableCell align="left">{row.email}</TableCell>
                                <TableCell align="left">{row.role}</TableCell>
                                <TableCell align="left">{row.password}</TableCell>
                                <TableCell align="left"><Button onClick={handleClick}><MoreVertIcon onClick={()=>handleChange(row.email)}  /></Button>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <MenuItem>Edit</MenuItem>
                                        <MenuItem>Delete</MenuItem>
                                        <MenuItem >Assign as Admin</MenuItem>
                                    </Menu>
                                </TableCell>
                            </TableRow>
                            
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default TableComponent;
