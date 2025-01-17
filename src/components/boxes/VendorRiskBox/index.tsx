import React from "react";
import { Grid3x3, Info } from "lucide-react";
import Box from "@/components/common/Box";
import EmptyVendorRisk from "@/components/boxes/VendorRiskBox/EmptyVendorRisk";

const VendorRiskBox = () => {
  const isEmpty = true;
  return (
    <Box title={"Vendor Risk"} icon={<Grid3x3 />}>
      {isEmpty && <EmptyVendorRisk />}
    </Box>
  );
};

export default VendorRiskBox;
