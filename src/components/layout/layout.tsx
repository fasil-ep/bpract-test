import { Box, Stack } from "@mui/material";
import React, { ReactNode } from "react";
import ButtonAppBar from "./header/header";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Box width={"100%"}>
      <Stack direction={"row"} width={"100%"}>
        <Stack width={250} sx={{ backgroundColor: "#5A5A5A", height: 750 }}>
          side bar
        </Stack>
        <Stack width={"100%"}>
          <ButtonAppBar />
          <Box>{children}</Box>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Layout;
