import React from 'react'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
function rand() {
    return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`
    };
}
function ModalMui(props) {
    const [modalStyle] = React.useState(getModalStyle);

    const useStyles = makeStyles((theme) => ({
        paper: {
            position: "absolute",
            width: 400,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(4),
            outline: "none"
        },
    }));
    const classes = useStyles();

    return (
        <div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={props.open}
                onClose={props.close}
            >
                <div style={modalStyle} className={classes.paper}>
                   {props.content}
                </div>
            </Modal>
        </div>
    )
}

export default ModalMui;
