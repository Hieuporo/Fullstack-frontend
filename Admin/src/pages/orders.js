import Head from "next/head";

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
  Modal,
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
import { ProductCard } from "src/sections/products/product-card";
import Link from "next/link";
import privateAxiosClient from "src/configs/httpClient/privateAxiosClient";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Page = () => {
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState();
  const [open, openchange] = useState(false);

  const functionopenpopup = () => {
    openchange(true);
  };
  const closepopup = () => {
    openchange(false);
  };
  const getOrders = async () => {
    try {
      const { data } = await privateAxiosClient.get("Order/admin");
      setOrders(data);
    } catch (error) {}
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <Head>
        <title>Orders | Devias Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Stack spacing={1}>
                <Typography variant="h4">Orders</Typography>
                <Stack alignItems="center" direction="row" spacing={1}></Stack>
              </Stack>
            </Stack>
            <Grid container spacing={3}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Order ID</TableCell>
                      <TableCell align="right">Customer Name</TableCell>
                      <TableCell align="right">Shipping Method</TableCell>
                      <TableCell align="right">Address</TableCell>
                      <TableCell align="right">Phone Number</TableCell>
                      <TableCell align="right">Discount</TableCell>
                      <TableCell align="right">Order Total</TableCell>
                      <TableCell align="right">Status</TableCell>
                      <TableCell align="right">Order Items</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow
                        key={order.id}
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      >
                        <TableCell>{order.id}</TableCell>
                        <TableCell align="right">{order.customerName}</TableCell>
                        <TableCell align="right">{order.shippingMethod.name}</TableCell>
                        <TableCell align="right">{order.address}</TableCell>
                        <TableCell align="right">{order.phoneNumber}</TableCell>
                        <TableCell align="right">
                          {order.coupon ? order.coupon.discountAmount : 0}
                        </TableCell>
                        <TableCell align="right">
                          {order.orderTotal +
                            order.shippingMethod.price -
                            (order.coupon ? order.coupon.discountAmount : 0)}
                        </TableCell>
                        <TableCell align="right">{order.status}</TableCell>
                        <TableCell align="right" style={{ color: "blue" }}>
                          <Link href={`order/${order.id}`}>
                            <Button>Detail</Button>
                          </Link>
                        </TableCell>
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
