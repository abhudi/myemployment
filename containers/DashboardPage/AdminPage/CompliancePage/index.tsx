import FlexBox from "@/components/Common/FlexBox";
import Compliance from "@/components/DashboardPage/AdminPage/CompliancePage/Compliance";

export default function CompliancePage() {
  return (
    <FlexBox className="w-[97%] 4xl:w-11/12 mx-auto my-10 md:my-16 max-w-desktop flex-col gap-6 4xl:gap-12">
      <Compliance />
    </FlexBox>
  );
}
