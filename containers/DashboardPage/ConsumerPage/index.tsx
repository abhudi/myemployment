import FlexBox from "@/components/Common/FlexBox";
import ActivitySummary from "@/components/DashboardPage/Common/ActivitySummary";
import QuickActions from "@/components/DashboardPage/Common/QuickActions";
import NotificationCenter from "@/components/DashboardPage/ConsumerPage/RootPage/NotificationCenter";
import { consumerQuickActionsData } from "@/constant/dashboardPage";

export default function ConsumerPage() {
  return (
    <FlexBox className="w-[97%] 4xl:w-11/12 mx-auto my-10 md:my-16 flex-col max-w-desktop gap-6 4xl:gap-12">
      <FlexBox className="w-full flex-col 2xl:flex-row justify-between gap-6 4xl:gap-12">
        <ActivitySummary />
        <QuickActions content={consumerQuickActionsData} />
      </FlexBox>
      <NotificationCenter />
    </FlexBox>
  );
}
