import {
  Box,
  Button,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

//change this//
const session = true;
///_____////

function HorizentalNavData({ pages, isMatch, isMatch2 }) {
  const [value, setValue] = useState(0);
  const router = useRouter();

  // const theme = useTheme();
  // const isMatch = useMediaQuery(theme.breakpoints.down(1000));
  // const isMatch2 = useMediaQuery(theme.breakpoints.up("sm"));

  useEffect(() => {
    if (router.route.slice(0, 9) == "/create/r") setValue(0);
    if (router.route.slice(0, 9) == "/create/s") setValue(1);
    if (router.route.slice(0, 9) == "/create/c") setValue(2);
  }, [router.route]);
  return (
    <>
      <Grid container sx={{ placeItems: "center" }}>
        {!isMatch && (
          <>
            <Logo justifyContent="start" xs={2} />
            <Grid item xs={session ? 5 : 5} sx={{ margin: "auto" }}>
              <Tabs
                value={value}
                onChange={(e, value) => setValue(value)}
                sx={{ color: "white", margin: "auto" }}
              >
                {pages.map(({ title, link }, index) => (
                  <Link
                    href={link}
                    key={index}
                    sx={{ backgroundColor: "transparent" }}
                  >
                    <Tab
                      component={"a"}
                      key={index}
                      color="white"
                      label={title}
                    ></Tab>
                  </Link>
                ))}
              </Tabs>
            </Grid>

            {session ? (
              <>
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
                      onClick={() => signOut("google")}
                    >
                      SignOut
                    </Button>
                  </Box>
                </Grid>
              </>
            ) : (
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
                    onClick={() => signIn("google")}
                  >
                    SignIn
                  </Button>
                </Box>
              </Grid>
            )}
          </>
        )}
      </Grid>
    </>
  );
}

export default HorizentalNavData;

export function Logo({ justifyContent, xs }) {
  return (
    <Grid
      item
      xs={xs}
      sx={{
        display: "flex",
        justifyContent: { justifyContent },
        alignItems: "center",
      }}
    >
      <Link href={"/recipe"}>
        <IconButton
          size={"large"}
          edge={"start"}
          aria-label={"logo"}
          color={"inherit"}
        >
          'logo'
        </IconButton>
      </Link>
    </Grid>
  );
}
