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
  const [shippingMethods, setShippingMethods] = useState([]);
  const [open, openchange] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState();

  const functionopenpopup = () => {
    openchange(true);
  };
  const closepopup = () => {
    openchange(false);
  };

  const getShippingMethods = async () => {
    try {
      const { data } = await axios.get("https://localhost:7020/api/ShippingMethod", {
        headers: {
          Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
        },
      });

      setShippingMethods(data);
    } catch (error) {}
  };

  const createShippingMethod = async () => {
    if (name != null && price != null) {
      try {
        await axios.post(
          "https://localhost:7020/api/ShippingMethod",
          {
            name,
            price,
          },
          {
            headers: {
              Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
            },
          }
        );

        getShippingMethods();
        closepopup();
      } catch (error) {}
    } else {
      return;
    }
  };

  useEffect(() => {
    getShippingMethods();
  }, []);

  return (
    <>
      <Head>
        <title>Shipping Method</title>
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
                label="Price"
                value={price}
                type="number"
                onChange={(e) => setPrice(e.target.value)}
              ></TextField>

              <Button color="primary" variant="contained" onClick={createShippingMethod}>
                Submit
              </Button>
            </Stack>
          </DialogContent>
        </Dialog>
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Stack spacing={1}>
                <Typography variant="h4">Shipping Methods</Typography>
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
                      <TableCell>Shipping Method ID</TableCell>
                      <TableCell align="right">Name</TableCell>
                      <TableCell align="right">Price</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {shippingMethods.map((shippingMethod) => (
                      <TableRow
                        key={shippingMethod.id}
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {shippingMethod.id}
                        </TableCell>
                        <TableCell align="right">{shippingMethod.name}</TableCell>
                        <TableCell align="right">{shippingMethod.price}</TableCell>
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
