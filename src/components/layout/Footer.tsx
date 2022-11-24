// export default function Header() {
//   return (
//     <footer style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
//       Footer
//     </footer>
//   );
// }

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardHeader from "@mui/material/CardHeader";
// import CssBaseline from "@mui/material/CssBaseline";
// import Grid from "@mui/material/Grid";
// import StarIcon from "@mui/icons-material/StarBorder";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";
// import GlobalStyles from "@mui/material/GlobalStyles";
// import Container from "@mui/material/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Hana Voting
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "50vh",
        textAlign: "center",
      }}
    >
      <CssBaseline />

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">Hana Blockchain Voting App</Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}

// export default function StickyFooter() {
//   const footers = [
//     {
//       title: "Company",
//       description: ["Team", "History", "Contact us", "Locations"],
//     },
//     {
//       title: "Features",
//       description: [
//         "Cool stuff",
//         "Random feature",
//         "Team feature",
//         "Developer stuff",
//         "Another one",
//       ],
//     },
//     {
//       title: "Resources",
//       description: [
//         "Resource",
//         "Resource name",
//         "Another resource",
//         "Final resource",
//       ],
//     },
//     {
//       title: "Legal",
//       description: ["Privacy policy", "Terms of use"],
//     },
//   ];
//   return (
//     <Container
//       maxWidth="md"
//       component="footer"
//       sx={{
//         borderTop: (theme) => `1px solid ${theme.palette.divider}`,
//         mt: 8,
//         py: [3, 6],
//       }}
//     >
//       <Grid container spacing={4} justifyContent="space-evenly">
//         {footers.map((footer) => (
//           <Grid item xs={6} sm={3} key={footer.title}>
//             <Typography variant="h6" color="text.primary" gutterBottom>
//               {footer.title}
//             </Typography>
//             <ul>
//               {footer.description.map((item) => (
//                 <li key={item}>
//                   <Link href="#" variant="subtitle1" color="text.secondary">
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </Grid>
//         ))}
//       </Grid>
//       <Copyright />
//     </Container>
//   );
// }

// export default function Footer() {
//   return (
//     <footer style={{ background: "lightgray", padding: 16, fontSize: 15 }}>
//       도움이 필요하신가요? DNA Wallet 지원에 문의하세요.
//     </footer>
//   );
// }
