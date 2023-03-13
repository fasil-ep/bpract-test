import * as React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { blue } from "@mui/material/colors";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, TextField } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";

interface SimpleDialogProps {
  open: boolean;
  setOpen: (open: any) => void;
}

function SimpleDialog({ open, setOpen }: SimpleDialogProps) {
  //   const validationSchema = yup.object({
  //     phone: yup.string().required("phone is required"),
  //   });

  const formik = useFormik({
    initialValues: {
      sort_order: "",
      title: "",
      document_url: "",
    },
    onSubmit: (values) => {
      console.log(values, "val");

      axios
        .put(
          "https://machine-test.cloudmlmdemo.com/api/admin/tool-documents/",
          {
            sort_order: formik.values.sort_order,
            title: formik.values.title,
            document_url: formik.values.document_url,
            headers: { "Content-Type": "multipart/formdata" },
          }
        )
        .then((response) => {})
        .catch((error) => {});
    },
    // validationSchema: validationSchema,
  });

  return (
    <Dialog open={open}>
      <form onSubmit={formik.handleSubmit}>
        <Stack direction={"row"}>
          <DialogTitle>Set backup account</DialogTitle>
          <CloseIcon
            onClick={() => setOpen((open: any) => !open)}
            sx={{ cursor: "pointer", p: 2 }}
          />
        </Stack>

        <Stack>
          <TextField
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
            placeholder="Doc Title"
          />
          <TextField
            name="sort_order"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.sort_order}
            placeholder="Sort Order"
          />
          <TextField
            name="document_url"
            type="file"
            // onChange={formik.handleChange}
            // value={formik.values.document_url}
            placeholder="Sort Order"
            // value={values.upload?.files }
            onChange={(event) =>
              console.log(event.currentTarget, "event.currentTarget")
            }
          />

          <Button type="submit">Submit</Button>
          <Button onClick={() => setOpen((open: any) => !open)}>Close</Button>
        </Stack>
      </form>
    </Dialog>
  );
}

export default SimpleDialog;

// export default function AddDataDialogue() {
//   const [open, setOpen] = React.useState(false);
//   const [selectedValue, setSelectedValue] = React.useState(emails[1]);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = (value: string) => {
//     setOpen(false);
//     setSelectedValue(value);
//   };

//   return (
//     <div>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Open simple dialog
//       </Button>
//       <SimpleDialog
//         selectedValue={selectedValue}
//         open={open}
//         onClose={handleClose}
//       />
//     </div>
//   );
// }
