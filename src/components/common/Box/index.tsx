import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

type Props = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  actions?: ReactNode;
};

const Box = ({ icon, title, children, actions }: Props) => {
  return (
    <Card className="w-full bg-white shadow-sm">
      <div className="p-5 flex items-center justify-between gap-3 border-b">
        <div className={"flex items-center gap-3 "}>
          {icon}
          <h5 className="text-md font-semibold">{title}</h5>
        </div>
        {actions}
      </div>
      {children}
    </Card>
  );
};

export default Box;
