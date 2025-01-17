import DetailsBox from "@/components/boxes/DetailsBox";
import VendorRiskBox from "@/components/boxes/VendorRiskBox";
import VendorDetailsBox from "@/components/boxes/VendorDetailsBox";
import DocumentsBox from "@/components/boxes/DocumentsBox";
import ControlVendorBox from "@/components/boxes/ControlVendorBox";

const mockedControlsData = [
  {
    type: "Access Control",
    description:
      "Lorem ipsum dolor sit amet, consectetur elit. Etiam lorem metus Lorem ipsum dolortetur...",
    owners: [
      { initials: "JR", src: "" },
      { initials: "EK", src: "" },
    ],
    standards: ["SOC2", "ISO 27001", "ISO 27001", "ISO 27001", "ISO 27001"],
    progress: { completed: 2, total: 4 },
    note: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    type: "Information Security Policy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lorem metus",
    owners: [{ initials: "AO", src: "" }],
    standards: ["SOC2"],
    progress: { completed: 1, total: 1 },
    note: "",
  },
  {
    type: "Access Control",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lorem metus",
    owners: [],
    standards: ["ISO 27001", "GDPR"],
    progress: { completed: 3, total: 8 },
    note: "",
  },
];

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="max-w-[800px] w-full gap-3 p-8 flex justify-center items-center flex-col">
        <DetailsBox
          owners={[
            { initials: "JR", src: "" },
            { initials: "EK", src: "" },
          ]}
          status={"Active"}
          dataAgreementFileName={"dpa.pdf"}
          nextReviewDate={"Dec 24, 2024"}
          lastReviewDate={"Dec 24, 2024"}
        />
        <VendorRiskBox />
        <VendorDetailsBox
          name={"Google"}
          website={"Google.com"}
          services={"Hosting and other stuff"}
          passwordPolicy={"SSD"}
          privacyPolicyUrl={"Google.com/privacy"}
          termsOfUseUrl={"Google.com/terms-of-use"}
          vendorLocation={"San Diego, USA"}
          isSubprocessor={true}
          contractStartDate={"Jan 24, 2023"}
          contactName={""}
          contactInfo={""}
        />
        <DocumentsBox />
        <ControlVendorBox controls={mockedControlsData} />
      </div>
    </div>
  );
}
