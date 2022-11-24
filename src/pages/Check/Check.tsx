import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import Swal from "sweetalert2";

const theme = createTheme();

export default function Check() {
  const [employeeNumber, setEmployeeNumber] = useState("");

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    Swal.fire({
      title: "추첨 확인",
      text: employeeNumber + "(사번) 님은 이미 추첨하셨습니다.",
      icon: "info",
      confirmButtonText: "확인",
    }).then(() => {
      window.location.href = "/check";
    });
  };

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
            추첨 여부 확인
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
            value={employeeNumber}
            onChange={(newValue) => setEmployeeNumber(newValue.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleClick}
          >
            추첨 확인
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
