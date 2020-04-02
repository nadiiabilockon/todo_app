import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import { SimpleDialog } from "./SimpleDialog";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingTop: 64
    },
    title: {
      flexGrow: 1
    }
  })
);

export default function MainAppBar(props: {
  selectedValue: string;
  setSelectedValue(value: string): void;
}) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    props.setSelectedValue(value);
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            To-Do
          </Typography>
          <Button color="inherit" onClick={handleClickOpen}>
            <SettingsIcon />
          </Button>
          <SimpleDialog
            selectedValue={props.selectedValue}
            open={open}
            onClose={handleClose}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
