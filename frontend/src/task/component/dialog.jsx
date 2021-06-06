import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import WarningIcon from '@material-ui/icons/Warning';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
function DialogMui(props) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
   
    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={props.open}
                onClose={props.close}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title"><WarningIcon style={{ color: "red", marginBottom: -4 }} /> {"Warning !"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure to delete
            </DialogContentText>

                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={props.close} color="primary">
                        No
          </Button>
                    <Button onClick={props.delete} color="action" autoFocus>
                        Yes
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default DialogMui;
