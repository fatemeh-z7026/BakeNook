import React, { useEffect, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import { AppBar, Box, Toolbar, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ReactComponent as Cake } from "../assets/cakeLogo.svg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import routes from "../routes.js";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.5),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.65),
  },
  marginLeft: 0,
  width: "auto",
  [theme.breakpoints.down("lg")]: {
    marginLeft: theme.spacing(1),
    width: "25%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const LogoNote = styled("span")(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: "2rem",
  fontWeight: "600",
  letterSpacing: theme.spacing(0.25),
  marginTop: "1rem",
  marginLeft: "1rem",
  fontFamily: ' "Birthstone", cursive;',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SignUP = styled("span")(({ theme }) => ({
  color: theme.palette.text.secondary,
  cursor: "pointer",
  fontSize: "1.2rem",
}));

export default function Header() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger stickiness based on scroll position
      setSticky(window.scrollY > 0); // Adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, backgroundColor: "customColors.headerColor" }}>
        {/*App Bar Above */}
        <AppBar position="static">
          <Toolbar
            sx={{
              display: "flex",
              backgroundColor: "customColors.headerColor",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 16px",
            }}
          >
            <Search
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <SearchIconWrapper>
                <SearchIcon sx={{ color: "secondary.main" }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>

            {/*Logo*/}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Cake sx={{ marginRight: "8px" }} />
              <LogoNote sx={{ fontSize: "2rem" }}>Bake Nooke</LogoNote>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <ShoppingCartIcon
                  sx={{
                    color: "secondary.main",
                  }}
                />
                <SignUP>Sign In | Sign Up</SignUP>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>

       

        {/* App Bar Down*/}
        <AppBar
          position="fixed"
          sx={(theme) => ({
            top: sticky ? "0px" : `${63 - window.scrollY}px`, // Adjust height for large screens
            zIndex: theme.zIndex.appBar - 1,
            backgroundColor: theme.palette.customColors.headerColor,
            transition: "top 0.3s linear",
            [theme.breakpoints.down("sm")]: {
              top: sticky ? "0px" : `${45 - window.scrollY}px`, // Adjust height for small screens
            },
          })}
        >
          <Container
            maxWidth="xl"
            sx={{ backgroundColor: "customColors.headerColor" }}
          >
            <Toolbar
              disableGutters
              sx={{
                borderTop: sticky ? "none" : (theme) => `1px solid ${theme.palette.customColors.textLight}`,
                transition: "border-top 0.3s ease-in-out", // Smooth transition for border
              }}
            >
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon sx={{ color: "secondary.main" }} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  PaperProps={{
                    sx: {
                      maxHeight: "60vh",
                      overflowY: "auto",
                      "&::-webkit-scrollbar": {
                        width: "8px",
                      },
                      "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "customColors.paperLight",
                        borderRadius: "4px",
                      },
                      "&::-webkit-scrollbar-thumb:hover": {
                        backgroundColor: "customColors.paperLight",
                      },
                    },
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{ display: { xs: "block", md: "none" } }}
                >
                  {routes.map((route) => (
                    <MenuItem key={route.label} onClick={handleCloseNavMenu}>
                      <Typography
                        sx={{ textAlign: "center", color: "text.primary" }}
                      >
                        <Link
                          to={route.path}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          {route.label}
                        </Link>
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex", justifyContent: "center" },
                }}
              >
                {routes.map((route) => (
                  <Button
                    key={route.label}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      display: "block",
                      color: "text.primary",
                      padding: "0 3rem",
                      textTransform: "capitalize",
                    }}
                  >
                    <Link
                      to={route.path}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {route.label}
                    </Link>
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
}
