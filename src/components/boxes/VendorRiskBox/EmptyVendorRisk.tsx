import { Grid3x3, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const EmptyVendorRisk = () => {
  return (
    <div
      className={
        "w-full h-full flex justify-center items-center gap-2 flex-col p-8 min-h-[300px]"
      }
    >
      <Grid3x3 size={"60px"} />
      <h5 className={"text-lg font-bold"}>No Risk Score</h5>
      <p className={"text-md"}>
        Stay on top of risk that vendors pose to your company
      </p>
      <Button variant={"primary"} className={"mt-6"}>
        <Plus />
        Add risk score
      </Button>
    </div>
  );
};

export default EmptyVendorRisk;
