import { Box } from "@mui/material";
import React from "react";
import ProductList from "../../../Residents/ViewResident/ProductList";

function ProductFees() {
  return (
    <Box
      sx={{
        marginTop: "54px",
      }}
    >
      <p className="text-lg mb-0">Product Information</p>
      <ProductList />
    </Box>
  );
}

export default ProductFees;
