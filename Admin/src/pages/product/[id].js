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
import { ProductCard } from "src/sections/products/product-card";
import { ProductsSearch } from "src/sections/products/products-search";
import { useEffect, useState } from "react";
import axios from "axios";
import { CheckBox } from "@mui/icons-material";
import { useRouter } from "next/router";
import { ProductCardItem } from "src/sections/products/product-item-card";
import privateAxiosClient from "src/configs/httpClient/privateAxiosClient";
import publicAxiosClient from "src/configs/httpClient/publicAxiosClient";

const Page = () => {
  const router = useRouter();

  const [product, setProduct] = useState();
  const [open, openchange] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [uploadData, setUploadData] = useState();
  const [quantityInStock, setQuantityInStock] = useState();
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [currentItemId, setCurrentItemId] = useState();

  const closepopup = () => {
    openchange(false);
  };

  const openpopupUpdate = (productItem) => {
    setPrice(productItem.price);
    setName(productItem.name);
    setQuantityInStock(productItem.quantityInStock);
    setImageUrl(productItem.imageUrl);
    setCurrentItemId(productItem.id);
    setOpenUpdate(true);
  };

  const openpopupDelete = (id) => {
    setCurrentItemId(id);
    setOpenDelete(true);
  };

  const closepopupUpdate = () => {
    setCurrentItemId();
    setPrice();
    setName();
    setQuantityInStock();
    setImageUrl();
    setOpenUpdate(false);
  };

  const closepopupDelete = () => {
    setCurrentItemId();
    setOpenDelete(false);
  };

  const createProductItem = async () => {
    if (
      name != null &&
      quantityInStock != null &&
      imageUrl != null &&
      price != null &&
      product != null
    ) {
      try {
        await privateAxiosClient.post("Product/productitem", {
          productId: product.id,
          name,
          imageUrl,
          quantityInStock,
          price,
        });

        getProduct();
        closepopup();
      } catch (error) {}
    } else {
      return;
    }
  };

  const updateProductItem = async () => {
    try {
      await privateAxiosClient.put("Product/productitem", {
        id: currentItemId,
        productId: router.query.id,
        name: name,
        imageUrl: imageUrl,
        quantityInStock: quantityInStock,
        price: price,
      });

      getProduct();
      closepopupUpdate();
    } catch (error) {}
    return;
  };

  const deleteProductItem = async () => {
    try {
      await privateAxiosClient.delete(`Product/productitem/${currentItemId}`);

      getProduct();
      closepopupDelete();
    } catch (error) {}
    return;
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

  const getProduct = async () => {
    try {
      const { data } = await publicAxiosClient(`Product/${router.query.id}`, {});

      setProduct(data);
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
        <title>Products</title>
      </Head>
      {product && (
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8,
          }}
        >
          <Dialog
            // fullScreen
            open={openDelete}
            onClose={closepopupDelete}
            fullWidth
            maxWidth="sm"
          >
            <DialogTitle>
              Are You Sure ?{" "}
              <IconButton onClick={closepopupDelete} style={{ float: "right" }}>
                <CloseIcon color="primary"></CloseIcon>
              </IconButton>{" "}
            </DialogTitle>
            <DialogContent>
              {/* <DialogContentText>Do you want remove this user?</DialogContentText> */}
              <Stack spacing={2} margin={2}>
                <Button color="primary" variant="contained" onClick={deleteProductItem}>
                  Yes
                </Button>
              </Stack>
            </DialogContent>
          </Dialog>
          <Dialog
            // fullScreen
            open={openUpdate}
            onClose={closepopupUpdate}
            fullWidth
            maxWidth="sm"
          >
            <DialogTitle>
              Update Product Item{" "}
              <IconButton onClick={closepopupUpdate} style={{ float: "right" }}>
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
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                ></TextField>
                <TextField
                  variant="outlined"
                  label="Quantity"
                  type="number"
                  value={quantityInStock}
                  onChange={(e) => setQuantityInStock(e.target.value)}
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
                <Button color="primary" variant="contained" onClick={updateProductItem}>
                  Submit
                </Button>
              </Stack>
            </DialogContent>
          </Dialog>
          <Dialog
            // fullScreen
            open={open}
            onClose={closepopup}
            fullWidth
            maxWidth="sm"
          >
            <DialogTitle>
              Create Product{" "}
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
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                ></TextField>
                <TextField
                  variant="outlined"
                  label="Quantity"
                  type="number"
                  value={quantityInStock}
                  onChange={(e) => setQuantityInStock(e.target.value)}
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
                <Button color="primary" variant="contained" onClick={createProductItem}>
                  Submit
                </Button>
              </Stack>
            </DialogContent>
          </Dialog>
          <Container maxWidth="xl">
            <Stack spacing={3}>
              <Stack direction="row" justifyContent="space-between" spacing={4}>
                <Stack spacing={1}>
                  <Typography variant="h4">Product</Typography>
                  <Typography color="text" variant="h6">
                    Name : {product.name}
                  </Typography>
                  <Typography color="text" variant="h6"></Typography>
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
                {product.productItems.map((product) => (
                  <Grid xs={12} md={6} lg={4} key={product.id}>
                    <ProductCardItem
                      openpopupUpdate={openpopupUpdate}
                      openpopupDelete={openpopupDelete}
                      product={product}
                    />
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
