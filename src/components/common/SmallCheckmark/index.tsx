import React from "react";
import { Check } from "lucide-react";

const SmallCheckmark = () => {
  return (
    <div className="bg-green-200 w-[20px] h-[20px] p-1 rounded-full flex items-center justify-center">
      <Check className="text-green-800" />
    </div>
  );
};

export default SmallCheckmark;
