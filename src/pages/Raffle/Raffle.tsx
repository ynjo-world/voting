import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import Swal from "sweetalert2";

const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  Swal.fire({
    title: "SUCCESS!~",
    text: "추첨이 완료되었습니다.",
    icon: "success",
    confirmButtonText: "확인",
  }).then(() => {
    window.location.href = "/raffle";
  });
};

const theme = createTheme();

export default function Raffle() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            블록체인 추첨
          </Typography>

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="사번을 입력해주세요"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleClick}
          >
            추첨하기
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
