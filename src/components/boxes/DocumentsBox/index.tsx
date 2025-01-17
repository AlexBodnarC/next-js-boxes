import React from "react";
import Box from "@/components/common/Box";
import { Files, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const DocumentsBox = () => {
  return (
    <Box
      title={"Documents"}
      icon={<Files />}
      actions={
        <Button variant={"outline"} size={"sm"} className="">
          <Plus /> Add Document
        </Button>
      }
    >
      <div className={"p-5 min-h-[150px]"}></div>
    </Box>
  );
};

export default DocumentsBox;
