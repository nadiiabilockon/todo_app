import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  DialogContent,
  Dialog,
  DialogActions,
  Grid,
  Paper
} from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const backgrounds = [
  "ceramic-mug-on-white-background",
  "blue-body-of-wate",
  "bridge-near-a-lake"
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    content: {
      minHeight: "150px"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      cursor: "pointer"
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    }
  })
);

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

export function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;
  const classes = useStyles();
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleItemClick = (value: string) => {
    console.log(value);
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      keepMounted
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <MuiDialogTitle disableTypography id="simple-dialog-title">
        <Typography>Set background</Typography>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          className={classes.closeButton}
        >
          <CloseIcon />
        </IconButton>
      </MuiDialogTitle>
      <DialogContent dividers className={classes.content}>
        <div className={classes.root}>
          <Grid container spacing={3}>
            {backgrounds.map(item => {
              return (
                <Grid item xs>
                  <Paper
                    onClick={() => handleItemClick(item)}
                    className={`img-box ${item} ${classes.paper}`}
                  ></Paper>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </DialogContent>
    </Dialog>
  );
}
