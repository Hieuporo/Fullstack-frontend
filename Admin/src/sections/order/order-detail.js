import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import Link from "next/link";

export const OrderDetail = (props) => {
  const { product } = props;

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pb: 3,
          }}
        >
          <Box
            component="img"
            src={product.imageUrl}
            sx={{
              height: 300,
              width: 300,
            }}
          ></Box>
        </Box>
        <Typography align="center" variant="h5">
          {product.price} $
        </Typography>
        <Typography align="center" variant="body1">
          {product.name}
        </Typography>
        <Typography align="center" variant="body1">
          {product.quantityInStock} products in stock
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
    </Card>
  );
};

OrderDetail.propTypes = {
  product: PropTypes.object.isRequired,
};
