import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";

const pages = ["result", "raffle", "vote", "check"];

function Header() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* 안드로이드 아이콘 */}
          <Typography
            component={Link}
            to="/"
            sx={{
              mr: 1,
              color: "inherit",
              textDecoration: "none",
              display: "block",
            }}
          >
            <AdbIcon />
          </Typography>
          {/* Nav menu bar */}
          <Box sx={{ display: "flex" }}>
            {pages.map((page) => (
              <Typography
                key={page}
                component={Link}
                to={page}
                sx={{
                  mr: 2,
                  color: "inherit",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                {page}
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
