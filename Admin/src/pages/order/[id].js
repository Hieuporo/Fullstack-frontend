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
  FormControlLabel,
  DialogActions,
  Dialog,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { ProductCardItem } from "src/sections/products/product-item-card";
import { OrderDetail } from "src/sections/order/order-detail";
import privateAxiosClient from "src/configs/httpClient/privateAxiosClient";

const Page = () => {
  const router = useRouter();

  const [order, setOrder] = useState();

  const getProduct = async () => {
    try {
      const { data } = await privateAxiosClient.get(`Order/admin/${router.query.id}`);
      setOrder(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <Head>
        <title>Order</title>
      </Head>
      {order && (
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
                  <Typography variant="h4">Order</Typography>
                  <Typography color="text" variant="h6">
                    Customer name : {order.customerName}
                  </Typography>
                  <Typography color="text" variant="h6">
                    Customer name : {order.customerName}
                  </Typography>
                  <Typography color="text" variant="h6">
                    Customer name : {order.customerName}
                  </Typography>
                  <Typography color="text" variant="h6">
                    Customer name : {order.customerName}
                  </Typography>
                  <Typography color="text" variant="h6">
                    Customer name : {order.customerName}
                  </Typography>
                  <Typography color="text" variant="h6"></Typography>
                  <Stack alignItems="center" direction="row" spacing={1}></Stack>
                </Stack>
              </Stack>
              <Grid container spacing={3}>
                {order.orderItems.map((orderItem) => (
                  <Grid xs={12} md={6} lg={4} key={orderItem.id}>
                    <OrderDetail product={orderItem.productItem} />
                  </Grid>
                ))}
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
      )}
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
