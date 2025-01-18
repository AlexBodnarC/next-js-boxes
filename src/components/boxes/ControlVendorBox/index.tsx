"use client";
import React, { useState } from "react";
import Box from "@/components/common/Box";
import { Files, MessageCircle, Plus, UserRound } from "lucide-react";
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
  const [expandedRows, setExpandedRows] = useState<Record<number, boolean>>({});

  const toggleRowExpansion = (index: number) => {
    setExpandedRows((prev) => ({ ...prev, [index]: !prev[index] }));
  };
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
      <div className="w-full overflow-auto">
        <table className="min-w-[565px] w-full border-collapse">
          <thead className="border-b">
            <tr>
              <th className="text-left p-5 text-sm font-bold min-w-[200px]">
                Type/Control
              </th>
              <th className="text-left p-5 text-sm font-bold min-w-[100px]">
                Owner(s)
              </th>
              <th className="text-left p-5 text-sm font-bold min-w-[100px]">
                Note
              </th>
              <th className="text-left p-5 text-sm font-bold min-w-[100px]">
                Progress
              </th>
            </tr>
          </thead>
          <tbody>
            {controls.map((control, index) => (
              <tr key={index} className="border-b last:border-b-0 align-top">
                {/* Control Info */}
                <td className="p-5">
                  <h3 className="font-semibold">{control.type}</h3>
                  <p className="text-sm text-gray-600">{control.description}</p>
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    {(expandedRows[index]
                      ? control.standards
                      : control.standards.slice(0, 3)
                    ).map((standard, idx) => (
                      <Badge key={idx} variant="secondary">
                        {standard}
                      </Badge>
                    ))}
                    {control.standards.length > 3 && !expandedRows[index] && (
                      <Button
                        variant="link"
                        className="p-1"
                        onClick={() => toggleRowExpansion(index)}
                      >
                        {`+${control.standards.length - 3}`}
                      </Button>
                    )}
                  </div>
                </td>

                {/* Owner Info */}
                <td className="p-5 align-middle">
                  {control.owners.length > 0 ? (
                    <div className="flex -space-x-2">
                      {control.owners.map((owner, idx) => (
                        <Avatar className="w-[30px] h-[30px] border" key={idx}>
                          <AvatarImage src={owner.src} alt="avatar" />
                          <AvatarFallback>{owner.initials}</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center gap-1">
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
                </td>

                {/* Note */}
                <td className="p-5 align-middle">
                  {control.note && <MessageCircle />}
                </td>

                {/* Progress Info */}
                <td className="p-5 align-middle">
                  <CircularProgress
                    completed={control.progress.completed}
                    total={control.progress.total}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>{" "}
    </Box>
  );
};

export default ControlVendorBox;
