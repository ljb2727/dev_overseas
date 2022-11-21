import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { changeOffer, setJsonLoading, setFavoriteList } from "store/index.js";
import { useDispatch } from "react-redux";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



export default function AlertDialogDelete() {

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const { id } = useParams();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const onClickModalOpen = () => {
    setModalOpen(true);
  };

  const onClickModalClose = () => {
    setModalOpen(false);
  };

  const onClickDelete = () => {
    setModalOpen(false);
    console.log("삭제요");
    console.log(`${id}`);
    const formData = new FormData();
    const user_array = JSON.parse(localStorage.getItem("xgolfUserData"));
    formData.append("userID", user_array.memb_id);
    formData.append("idx", `${id}`);
    const delData = async () => {
      try {

        const response =  await axios({
          method: "POST",
          url: `https://phpup.xgolf.com/outtour/file_multi_upload_db_del.php`,
          mode: "cors",
          headers: {
            "Content-Type": "multipart/form-data", // Content-Type을 반드시 이렇게 하여야 한다.
          },
          data: formData, // data 전송시에 반드시 생성되어 있는 formData 객체만 전송 하여야 한다.
    }).then(function(response){
   	console.log("result:"+response.data.offerList);

    dispatch(changeOffer(response.data.offerList));

    navigate("/");
   })




      } catch (e) {

      }
    };
    delData();



  };
  return (
    <>
      <Button
        onClick={onClickModalOpen}
        fullWidth
        variant="contained"
        color="green"
        size="large"
        sx={{ borderRadius: 2 }}
      >
        삭제 하기
      </Button>
      <Dialog
        open={modalOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClickModalClose}
      >
        <DialogTitle
          sx={{
            padding: "20px 0 25px",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: "18px",
            lineHeight: 1,
          }}
        >
          알림
        </DialogTitle>

        <p
          style={{
            textAlign: "left",
            display: "block",
            paddingTop: "20px",
            fontSize: "14px",
            padding: "0 10px",
          }}
        >
          삭제 내용은 복구 되지 않습니다. <br />
          삭제 하시겠습니까?
        </p>
        <DialogActions
          sx={{
            display: "flex",
            p: "10px",
            pt: "25px",

            "& button": {
              flexGrow: "1",
            },
          }}
        >
          <Button color="green" onClick={onClickModalClose}>
            취소
          </Button>
          <Button variant="contained" color="green" onClick={onClickDelete}>
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
