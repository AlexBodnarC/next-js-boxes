import {
  Building2,
  HardDriveUpload,
  PanelTop,
  Lock,
  BookKey,
  MapPin,
  PanelTopClose,
  Clock,
  Signature,
  Mail,
} from "lucide-react";
import Box from "@/components/common/Box";
import { InfoRow } from "@/components/common/InfoRow";
import { StatusBadge } from "@/components/common/StatusBadge";
import SmallCheckmark from "@/components/common/SmallCheckmark";
import { Button } from "@/components/ui/button";

type Props = {
  name: string;
  website: string;
  services: string;
  passwordPolicy: string;
  privacyPolicyUrl: string;
  termsOfUseUrl: string;
  vendorLocation: string;
  isSubprocessor: boolean;
  contractStartDate: string;
  contactName?: string; // Optional prop
  contactInfo?: string; // Optional prop
};
const VendorDetailsBox = ({
  name,
  website,
  services,
  passwordPolicy,
  privacyPolicyUrl,
  termsOfUseUrl,
  vendorLocation,
  isSubprocessor,
  contractStartDate,
  contactName,
  contactInfo,
}: Props) => {
  const iconSize = 20;
  const minColumnWidth = 160;

  return (
    <Box title={"Vendor Details"} icon={<Building2 />}>
      <div className="flex p-5 flex-col gap-5">
        <InfoRow
          minWidth={minColumnWidth}
          label="Name:"
          icon={<Building2 size={iconSize} />}
        >
          <p className="text-sm">{name}</p>
        </InfoRow>
        <InfoRow
          minWidth={minColumnWidth}
          label="Website:"
          icon={<PanelTop size={iconSize} />}
        >
          <Button className="-ml-1 p-1" variant={"link"}>
            {website}
          </Button>
        </InfoRow>
        <InfoRow
          minWidth={minColumnWidth}
          label="Provided services:"
          icon={<HardDriveUpload size={iconSize} />}
        >
          <p className="text-sm">{services}</p>
        </InfoRow>
        <InfoRow
          minWidth={minColumnWidth}
          label="Password policy:"
          icon={<Lock size={iconSize} />}
        >
          <p className="text-sm">{passwordPolicy}</p>
          <StatusBadge status={"pending"} text={"Password"} />
        </InfoRow>
        <InfoRow
          minWidth={minColumnWidth}
          label="Privacy policy URL"
          icon={<BookKey size={iconSize} />}
        >
          <Button className="-ml-1 p-1" variant={"link"}>
            {privacyPolicyUrl}
          </Button>
        </InfoRow>
        <InfoRow
          minWidth={minColumnWidth}
          label="Terms of use URL"
          icon={<BookKey size={iconSize} />}
        >
          <Button className="-ml-1 p-1" variant={"link"}>
            {termsOfUseUrl}
          </Button>
        </InfoRow>
        <InfoRow
          minWidth={minColumnWidth}
          label="Vendor location"
          icon={<MapPin size={iconSize} />}
        >
          <p className="text-sm">{vendorLocation}</p>
        </InfoRow>
        <InfoRow
          minWidth={minColumnWidth}
          label="Vendor is subprocessor"
          icon={<PanelTopClose size={iconSize} />}
        >
          <SmallCheckmark />
          <p className="text-sm">{isSubprocessor ? "Yes" : "No"}</p>
        </InfoRow>
        <InfoRow
          minWidth={minColumnWidth}
          label="Contract start date:"
          icon={<Clock size={iconSize} />}
        >
          <p className="text-sm">{contractStartDate}</p>
        </InfoRow>
      </div>
      <div className="flex p-5 flex-col gap-5 border-t">
        <InfoRow
          minWidth={180}
          label="Vendor contact name"
          icon={<Signature size={iconSize} />}
        >
          <p className="text-sm">{contactName}</p>
        </InfoRow>
        <InfoRow
          minWidth={180}
          label="Contact info"
          icon={<Mail size={iconSize} />}
        >
          <p className="text-sm">{contactInfo}</p>
        </InfoRow>
      </div>
    </Box>
  );
};

export default VendorDetailsBox;
