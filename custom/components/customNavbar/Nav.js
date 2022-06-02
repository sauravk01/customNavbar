import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import HorizentalNavData from "./HorizentalNavData";
import VerticelNavData from "./VerticelNavData";
import { useTheme, useMediaQuery } from "@mui/material";

const pages = [
  { title: "recipes", link: "/create/recipe" },
  { title: "Sub-Categories", link: "/create/sub-category" },
  { title: "Categories", link: "/create/category" },
];

function Nav(props) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down(1000));
  const isMatch2 = useMediaQuery(theme.breakpoints.up(1000));
  // console.log("match", isMatch);
  // console.log("match2", isMatch2);
  function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      //   target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 5 : 0,
    });
  }

  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
  };
  return (
    <>
      <CssBaseline />
      <ElevationScroll>
        <AppBar>
          <Container maxWidth="xl">
            <Toolbar>
              {isMatch && (
                <VerticelNavData
                  pages={pages}
                  isMatch={isMatch}
                  isMatch2={isMatch2}
                />
              )}
              {isMatch2 && (
                <HorizentalNavData
                  pages={pages}
                  isMatch={isMatch}
                  isMatch2={isMatch2}
                />
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      {/* unwanted */}
      <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Box>
      </Container>
    </>
  );
}

export default Nav;
