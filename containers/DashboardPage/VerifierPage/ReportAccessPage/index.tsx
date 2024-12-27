import FlexBox from "@/components/Common/FlexBox";
import ReportLibrary from "@/components/DashboardPage/VerifierPage/ReportAccessPage/ReportLibrary";

export default function ReportAccessPage() {
  return (
    <FlexBox className="w-[97%] 4xl:w-11/12 mx-auto my-10 md:my-16 flex-col max-w-desktop gap-6 4xl:gap-12">
      <ReportLibrary />
    </FlexBox>
  );
}
