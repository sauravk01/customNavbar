import {
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Logo } from "./HorizentalNavData";

function VerticelNavData({ pages, isMatch, isMatch2 }) {
  //here//
  const session = true;
  //////
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer
        PaperProps={{ sx: { backgroundColor: "#a5d6a7", marginLeft: "auto" } }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <List>
          {pages.map(({ title, link }, index) => (
            <ListItemButton onClick={() => setOpen(!open)} key={index} divider>
              <Link href={link}>
                <ListItemText sx={{ color: "black" }}>{title}</ListItemText>
              </Link>
            </ListItemButton>
          ))}
        </List>
        {session && (
          <>
            {/* <Grid item xs={1}></Grid> */}
            <Grid item xs={1}>
              <Box display={"flex"} alignItems={"center"}>
                <Button
                  disableRipple
                  disableFocusRipple
                  variant="text"
                  color="inherit"
                  sx={{
                    marginLeft: "2px",
                    alignItem: "center",
                  }}
                  onClick={() => signOut()}
                >
                  SignOut
                </Button>
              </Box>
            </Grid>
          </>
        )}
        {!session && (
          <>
            {/* <Grid item xs={1}></Grid> */}
            <Grid item xs={1}>
              <Box display={"flex"} alignItems={"center"}>
                <Button
                  disableRipple
                  disableFocusRipple
                  variant="text"
                  color="inherit"
                  sx={{
                    marginLeft: "2px",
                    alignItem: "center",
                  }}
                  onClick={() => signIn()}
                >
                  SignIn
                </Button>
              </Box>
            </Grid>
          </>
        )}
      </Drawer>
      {isMatch && (
        <>
          <Grid container sx={{ placeItems: "center" }}>
            <IconButton
              onClick={() => setOpen(!open)}
              sx={{ marginRight: "auto", color: "snow" }}
            >
              <MenuIcon />
            </IconButton>

            <Logo justifyContent="center" xs={10} />
          </Grid>
        </>
      )}
    </>
  );
}

export default VerticelNavData;
