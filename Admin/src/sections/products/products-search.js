import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import { Card, InputAdornment, OutlinedInput, SvgIcon } from "@mui/material";

export const ProductsSearch = ({ setSearchProduct, searchProduct }) => (
  <Card sx={{ p: 2 }}>
    <OutlinedInput
      defaultValue={searchProduct}
      onChange={(e) => setSearchProduct(e.target.value)}
      fullWidth
      placeholder="Search Products"
      startAdornment={
        <InputAdornment position="start">
          <SvgIcon color="action" fontSize="small">
            <MagnifyingGlassIcon />
          </SvgIcon>
        </InputAdornment>
      }
      sx={{ maxWidth: 500 }}
    />
  </Card>
);
