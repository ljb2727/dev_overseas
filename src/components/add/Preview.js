import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Box } from "@mui/material";
import AppBar from "components/common/AppBar";
import PreviewDialog from "components/add/PreviewDialog";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Preview({ formValue, checkRequired, onSubmit }) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    if (checkRequired()) {
      return;
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button fullWidth color="green" onClick={handleClickOpen} size="large">
        미리 보기
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar title="미리 보기" type="hiddenIcon" />
        <PreviewDialog
          formValue={formValue}
          handleClose={handleClose}
          onSubmit={onSubmit}
        />
      </Dialog>
    </>
  );
}
