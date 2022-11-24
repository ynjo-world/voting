import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Vote = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Choose wisely");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    setHelperText(" ");
    setError(false);
  };

  const handleClick = () => {
    window.location.href = "/";
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value !== "") {
      setHelperText("투표 완료");
      handleOpen();
    } else {
      setHelperText("반드시 선택을 해주세요.");
      setError(true);
    }
  };
  return (
    <>
      <Grid container justifyContent="center" mt={20}>
        <form onSubmit={handleSubmit}>
          <FormControl sx={{ m: 3 }} error={error} variant="standard">
            <FormLabel id="demo-error-radios">투표를 해주세요.</FormLabel>
            <RadioGroup
              aria-labelledby="demo-error-radios"
              name="quiz"
              value={value}
              onChange={handleRadioChange}
            >
              <FormControlLabel value="가나" control={<Radio />} label="가나" />
              <FormControlLabel value="다라" control={<Radio />} label="다라" />
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
            <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
              Check Answer
            </Button>
          </FormControl>
        </form>
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                투표 완료!
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                투표가 완료되었습니다. 감사합니다.
              </Typography>
              <Button onClick={handleClick}>홈페이지 이동</Button>
            </Box>
          </Modal>
        </div>
      </Grid>
    </>
  );
};

export default Vote;
