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
import privateAxiosClient from "src/configs/httpClient/privateAxiosClient";
import publicAxiosClient from "src/configs/httpClient/publicAxiosClient";

const Page = () => {
  const [searchProduct, setSearchProduct] = useState("");
  const [products, setProducts] = useState([]);
  const [open, openchange] = useState(false);
  const [uploadData, setUploadData] = useState();

  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  const [openUpdate, setOpenUpdate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState();
  const [brandId, setBrandId] = useState();
  const [imageUrl, setImageUrl] = useState("");
  const [currentId, setCurrentId] = useState();

  const openpopupUpdate = (product) => {
    setName(product.name);
    setDescription(product.description);
    setImageUrl(product.imageUrl);
    setCurrentId(product.id);

    setOpenUpdate(true);
  };

  const openpopupDelete = (id) => {
    setCurrentId(id);
    setOpenDelete(true);
  };

  const closepopupUpdate = () => {
    setCurrentId();
    setName();
    setDescription();
    setImageUrl();
    setCategoryId();
    setBrandId();
    setOpenUpdate(false);
  };

  const closepopupDelete = () => {
    setCurrentId();
    setOpenDelete(false);
  };

  const functionopenpopup = () => {
    openchange(true);
  };

  const closepopup = () => {
    openchange(false);
  };

  const createProduct = async () => {
    if (
      categoryId != null &&
      brandId != null &&
      name != null &&
      description != null &&
      imageUrl != null
    ) {
      try {
        await privateAxiosClient.post("Product", {
          categoryId,
          brandId,
          name,
          description,
          imageUrl,
        });

        getProducts();
        closepopup();
      } catch (error) {}
    } else {
      return;
    }
  };

  const updateProduct = async () => {
    try {
      await privateAxiosClient.put("Product", {
        categoryId,
        brandId,
        name,
        description,
        imageUrl,
        id: currentId,
      });

      getProducts();
      closepopupUpdate();
      closepopup();
    } catch (error) {}
    return;
  };

  const deleteProduct = async () => {
    try {
      await privateAxiosClient.delete(`Product/${currentId}`);

      getProducts();
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
    setLoading(!loading);

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

    setLoading(!loading);
    setImageUrl(data.secure_url);
    setUploadData(data);
  }

  const handleCategoryChange = (event) => {
    setCategoryId(event.target.value);
  };

  const handleBrandChange = (event) => {
    setBrandId(event.target.value);
  };

  const getProducts = async () => {
    try {
      const { data } = await publicAxiosClient.get(
        `Product?Page=1&PageSize=9&SearchTerm=${searchProduct}`
      );

      console.log(data);
      setProducts(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async () => {
    try {
      const { data } = await publicAxiosClient.get("Category");

      setCategories(data);
    } catch (error) {}
  };

  const getBrands = async () => {
    try {
      const { data } = await publicAxiosClient.get("Brand");

      setBrands(data);
    } catch (error) {}
  };

  useEffect(() => {
    getCategories();
    getBrands();
  }, []);

  useEffect(() => {
    getProducts();
  }, [searchProduct]);
  return (
    <>
      <Head>
        <title>Products</title>
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
              <Button color="primary" variant="contained" onClick={deleteProduct}>
                Submit
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
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></TextField>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={categoryId}
                  label="Age"
                  onChange={handleCategoryChange}
                >
                  {categories.map((category) => (
                    <MenuItem value={category.id}>{category.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label1">Brand</InputLabel>
                <Select
                  labelId="demo-simple-select-label1"
                  id="demo-simple-select"
                  value={brandId}
                  label="Age"
                  onChange={handleBrandChange}
                >
                  {brands.map((brand) => (
                    <MenuItem value={brand.id}>{brand.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              <form method="post" onChange={handleOnChange} onSubmit={handleOnSubmit}>
                <p>
                  <input type="file" name="file" />
                </p>

                {imageUrl && !uploadData && (
                  <p>
                    <button>Update Image</button>
                  </p>
                )}
              </form>
              <Button color="primary" variant="contained" onClick={updateProduct}>
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
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></TextField>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={categoryId}
                  label="Age"
                  onChange={handleCategoryChange}
                >
                  {categories.map((category) => (
                    <MenuItem value={category.id}>{category.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label1">Brand</InputLabel>
                <Select
                  labelId="demo-simple-select-label1"
                  id="demo-simple-select"
                  value={brandId}
                  label="Age"
                  onChange={handleBrandChange}
                >
                  {brands.map((brand) => (
                    <MenuItem value={brand.id}>{brand.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>

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
              <Button color="primary" variant="contained" onClick={createProduct}>
                Submit
              </Button>
            </Stack>
          </DialogContent>
        </Dialog>
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Stack spacing={1}>
                <Typography variant="h4">Products</Typography>
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
            <ProductsSearch setSearchProduct={setSearchProduct} searchProduct={searchProduct} />
            <Grid container spacing={3}>
              {products.map((product) => (
                <Grid xs={12} md={6} lg={4} key={product.id}>
                  <ProductCard
                    product={product}
                    openpopupUpdate={openpopupUpdate}
                    openpopupDelete={openpopupDelete}
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
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
