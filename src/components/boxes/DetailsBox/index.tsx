import { Info } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Box from "@/components/common/Box";
import { StatusBadge } from "@/components/common/StatusBadge";
import { InfoRow } from "@/components/common/InfoRow";
import { Button } from "@/components/ui/button";

type Props = {
  owners: { src: string; initials: string }[];
  status: "Active";
  dataAgreementFileName: string;
  nextReviewDate: string;
  lastReviewDate: string;
};

const DetailsBox = ({
  owners,
  status,
  dataAgreementFileName,
  nextReviewDate,
  lastReviewDate,
}: Props) => {
  return (
    <Box title={"Details"} icon={<Info />}>
      <div className="flex p-5 flex-col gap-3">
        <InfoRow label="Owner(s)">
          <div className={"flex items-center gap-3"}>
            {owners && owners.length > 0 && (
              <div className="flex -space-x-2">
                {owners.map((owner, index) => (
                  <Avatar className={"w-[30px] h-[30px] border"} key={index}>
                    <AvatarImage src={owner.src} alt="avatar" />
                    <AvatarFallback>{owner.initials}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            )}
            <Button className="p-0" variant={"link"}>
              Add
            </Button>
          </div>
        </InfoRow>
        <InfoRow label="Status">
          <StatusBadge status={status} />
        </InfoRow>
        <InfoRow label="Data Agreement">
          <Button className="-ml-1 p-1" variant={"link"}>
            {dataAgreementFileName}
          </Button>
          <Button className="p-1" variant={"link"}>
            Add
          </Button>
        </InfoRow>
        <InfoRow label="Next Security review">
          <p className="text-sm">{nextReviewDate}</p>
          <StatusBadge text={"Due soon"} status={"pending"} />
          <Button className="p-1" variant={"link"}>
            Add
          </Button>
        </InfoRow>
        <InfoRow label="Last Security review">
          <p className="text-sm">{lastReviewDate}</p>
          <StatusBadge status={status} />
          <Button className="p-1" variant={"link"}>
            Add
          </Button>
        </InfoRow>
      </div>
    </Box>
  );
};

export default DetailsBox;
