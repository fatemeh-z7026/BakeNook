import React from "react";
import { styled, alpha } from "@mui/material/styles";
import { AppBar, Box, Toolbar, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ReactComponent as Cake } from "../assets/cakeLogo.svg";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.5),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.65),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
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

export default function Header() {
  return (
    <div>
     <Box sx={{ flexGrow: 1 }}>
  <AppBar position="static" sx={{boxShadow: "none",}}>
    <Toolbar
      sx={{
        backgroundColor: "customColors.headerColor",
        display: "flex",
        justifyContent: "center",
        alignItems: "center", 
        padding: 0, 
        
      }}
    >
      <Search
        sx={{
          position: "absolute", // Make sure search input is positioned outside of centered content
          left: "16px", // Adjust left position for search icon
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

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Cake sx={{ marginRight: "8px" }} />
        <LogoNote sx={{ fontSize: "1.5rem" }}>Bake Nooke</LogoNote>
      </Box>
    </Toolbar>
  </AppBar>
</Box>

    </div>
  );
}
