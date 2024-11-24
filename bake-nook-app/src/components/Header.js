import React from "react";
import { styled, alpha } from "@mui/material/styles";
import { AppBar, Box, Toolbar, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ReactComponent as Cake } from "../assets/cakeLogo.svg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "customColors.headerColor" }}>
      <AppBar position="static" sx={{ boxShadow: "none" }}>
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
      <hr />
      <div></div>
    </Box>
  );
}
