import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import BasicTable from "./table/table";

function Dashboard() {
  return (
    <Stack p={5} gap={2} sx={{ backgroundColor: "#3E3D40", height: 605 }}>
      <Stack>
        <Typography fontSize={"20px"} color={"white"}>
          Documents
        </Typography>
        <Typography color={"white"} sx={{ opacity: "50%" }}>
          Dashboard.Documents
        </Typography>
      </Stack>
      <Stack>
        <BasicTable />
      </Stack>
    </Stack>
  );
}

export default Dashboard;
