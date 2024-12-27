import FlexBox from "@/components/Common/FlexBox";
import ActivityMonitoring from "@/components/DashboardPage/ConsumerPage/ActivityMonitoringPage/ActivityMonitoring";

export default function ActivityMonitoringPage() {
  return (
    <FlexBox className="w-[97%] 4xl:w-11/12 mx-auto my-10 md:my-16 flex-col max-w-desktop gap-6 4xl:gap-12">
      <ActivityMonitoring />
    </FlexBox>
  );
}
