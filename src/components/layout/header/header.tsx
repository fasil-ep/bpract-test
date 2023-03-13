import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Stack from "@mui/material/Stack";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function ButtonAppBar() {
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "#5A5A5A" }}>
        <Toolbar>
          <Stack direction={"row"} justifyContent={"space-between"} gap={115}>
            <Stack direction={"row"} gap={2}>
              <SettingsIcon sx={{ color: "#EDEADE" }} />
              <DriveFileMoveIcon sx={{ color: "#fff" }} />
              <MusicNoteIcon sx={{ color: "#fff" }} />
              <MusicNoteIcon sx={{ color: "white 10%" }} />
            </Stack>
            <Stack direction={"row"} gap={2}>
              <SettingsIcon sx={{ color: "#EDEADE" }} />
              <DriveFileMoveIcon sx={{ color: "#fff" }} />
              <MusicNoteIcon sx={{ color: "#fff" }} />
              <AccountCircleIcon sx={{ color: "white 10%" }} />
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
