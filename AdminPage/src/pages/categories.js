"use client";
import Head from "next/head";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import CloseIcon from "@mui/icons-material/Close";

import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid,
  DialogTitle,
  IconButton,
  DialogContent,
  TextField,
  Dialog,
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Page = () => {
  const [categories, setCategories] = useState([]);
  const [open, openchange] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [uploadData, setUploadData] = useState();

  const functionopenpopup = () => {
    openchange(true);
  };
  const closepopup = () => {
    openchange(false);
  };

  // upload image
  function handleOnChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageUrl(onLoadEvent.target.result);
      setUploadData(undefined);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  }

  async function handleOnSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(({ name }) => name === "file");

    const formData = new FormData();

    for (const file of fileInput.files) {
      formData.append("file", file);
    }

    formData.append("upload_preset", "pnkfxt4s");

    const data = await fetch("https://api.cloudinary.com/v1_1/dalqfcdow/image/upload", {
      method: "POST",
      body: formData,
    }).then((r) => r.json());

    setImageUrl(data.secure_url);
    setUploadData(data);
  }

  const getCategories = async () => {
    try {
      const { data } = await axios.get("https://localhost:7020/api/Category", {
        headers: {
          Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
        },
      });

      setCategories(data);
    } catch (error) {}
  };

  const createCategories = async () => {
    if (name != null && description != null && imageUrl != null) {
      try {
        await axios.post(
          "https://localhost:7020/api/Category",
          {
            name,
            description,
            imageUrl,
          },
          {
            headers: {
              Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
            },
          }
        );

        getCategories();
      } catch (error) {}
    } else {
      return;
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <Head>
        <title>Category | Devias Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Dialog
          // fullScreen
          open={open}
          onClose={closepopup}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>
            Create Category{" "}
            <IconButton onClick={closepopup} style={{ float: "right" }}>
              <CloseIcon color="primary"></CloseIcon>
            </IconButton>{" "}
          </DialogTitle>
          <DialogContent>
            {/* <DialogContentText>Do you want remove this user?</DialogContentText> */}
            <Stack spacing={2} margin={2}>
              <TextField
                variant="outlined"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></TextField>
              <TextField
                variant="outlined"
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></TextField>

              <form method="post" onChange={handleOnChange} onSubmit={handleOnSubmit}>
                <p>
                  <input type="file" name="file" />
                </p>

                {imageUrl && !uploadData && (
                  <p>
                    <button>Upload Files</button>
                  </p>
                )}
              </form>
              <Button color="primary" variant="contained" onClick={createCategories}>
                Submit
              </Button>
            </Stack>
          </DialogContent>
        </Dialog>
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Stack spacing={1}>
                <Typography variant="h4">Categories</Typography>
                <Stack alignItems="center" direction="row" spacing={1}></Stack>
              </Stack>
              <div>
                <Button
                  startIcon={
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  }
                  variant="contained"
                  onClick={() => openchange(!open)}
                >
                  Add
                </Button>
              </div>
            </Stack>
            <Grid container spacing={3}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Category ID</TableCell>
                      <TableCell align="right">Name</TableCell>
                      <TableCell align="right">Description</TableCell>
                      <TableCell align="right">Image Url</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {categories.map((category) => (
                      <TableRow
                        key={category.id}
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {category.id}
                        </TableCell>
                        <TableCell align="right">{category.name}</TableCell>
                        <TableCell align="right">{category.description}</TableCell>
                        <TableCell align="right">{category.imageUrl}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            ></Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
