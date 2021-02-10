import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-around',
    width: 400,
    backgroundColor: "#ffffff",
    padding: theme.spacing(2, 4, 3),
    border: "solid"
  },
}));

export default function AddGoal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Typography style={{fontSize: "2rem"}}>Add new goal</Typography>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Tavoite" variant="outlined" style={{marginBottom: "15px"}}/>
        <br/>
        <TextField id="filled-basic" label="Isompi, vahvempi, peruskunto" variant="outlined" style={{marginBottom: "15px"}}/>
        <br/>
        <TextField id="outlined-basic" label="Lihasryhmä" variant="outlined" style={{marginBottom: "15px"}}/>
        <br/>
        <Button variant="contained" color="primary">Save</Button>
    </form>
    </div>
  );

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}