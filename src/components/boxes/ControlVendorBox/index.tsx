import React from "react";
import Box from "@/components/common/Box";
import { Check, Files, MessageCircle, Plus, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CircularProgress from "@/components/common/CircularProgress";

type Owner = {
  initials: string;
  src: string;
};

type Progress = {
  completed: number;
  total: number;
};

type Control = {
  type: string;
  description: string;
  owners: Owner[];
  standards: string[];
  progress: Progress;
  note: string;
};
const ControlVendorBox = ({ controls }: { controls: Control[] }) => {
  return (
    <Box
      title={"Controls link with vendor"}
      icon={<Files />}
      actions={
        <Button variant={"outline"} size={"sm"} className="">
          <Plus /> Add Controls
        </Button>
      }
    >
      <div className={"w-full overflow-auto"}>
        <div className={"min-w-[565px] overflow-x-auto"}>
          <div className="flex p-5 gap-2 border-b">
            <div className="flex-1 min-w-[200px] text-sm font-bold">
              Type/Control
            </div>
            <div className="text-sm font-bold min-w-[100px]">Owner(s)</div>
            <div className="text-sm font-bold min-w-[100px]">Note(s)</div>
            <div className="text-sm font-bold min-w-[100px]">Progress</div>
          </div>
          <div className={"py-5"}>
            {controls.map((control, index) => (
              <div
                key={index}
                className="px-5 flex border-b last:border-b-0 pb-4 mb-4 last:pb-0 last:mb-0 items-center gap-2"
              >
                {/* Control Info */}
                <div className="flex-1">
                  <h3 className="font-semibold">{control.type}</h3>
                  <p className="text-sm text-gray-600">{control.description}</p>
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    {control.standards.slice(0, 3).map((standard, idx) => (
                      <Badge key={idx} variant="secondary">
                        <p className="truncate">{standard}</p>
                      </Badge>
                    ))}
                    {control.standards.length > 3 && (
                      <p
                        className={"clickable-text p-1"}
                      >{`${control.standards.length - 3}+`}</p>
                    )}
                  </div>
                </div>

                {/* Owner Info */}
                <div className="flex items-center gap-2 min-w-[100px]">
                  {control.owners.length > 0 ? (
                    <div className="flex -space-x-2">
                      {control.owners.map((owner, index) => (
                        <Avatar
                          className={"w-[30px] h-[30px] border"}
                          key={index}
                        >
                          <AvatarImage src={owner.src} alt="avatar" />
                          <AvatarFallback>{owner.initials}</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                  ) : (
                    <div className={"flex items-center gap-1"}>
                      <Avatar
                        className={"w-[30px] h-[30px] border border-dashed"}
                        key={index}
                      >
                        <AvatarFallback>
                          <UserRound className={"text-gray-400"} size={16} />
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-gray-400">Unassigned</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2 min-w-[100px]">
                  {control.note && <MessageCircle />}
                </div>

                {/* Progress Info */}
                <div className="flex items-center gap-2 min-w-[100px]">
                  <div className="flex flex-col items-center">
                    <CircularProgress
                      completed={control.progress.completed}
                      total={control.progress.total}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ControlVendorBox;
