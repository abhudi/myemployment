import FlexBox from "@/components/Common/FlexBox";
import ActiveConsents from "@/components/DashboardPage/ConsumerPage/ConsentManagementPage/ActiveConsents";
import ConfiguringConsents from "@/components/DashboardPage/ConsumerPage/ConsentManagementPage/ConfiguringConsents";
import ConsentRequests from "@/components/DashboardPage/ConsumerPage/ConsentManagementPage/ConsentRequests";
import DataSharingPreferences from "@/components/DashboardPage/ConsumerPage/ConsentManagementPage/DataSharingPreferences";
import DataSharingSettings from "@/components/DashboardPage/ConsumerPage/ConsentManagementPage/DataSharingSettings";

export default function ConsentManagementPage() {
  return (
    <FlexBox className="w-[97%] 4xl:w-11/12 mx-auto my-10 md:my-16 max-w-desktop flex-col items-stretch gap-6 4xl:gap-12">
      <FlexBox className="w-full flex-col xl:flex-row justify-stretch gap-6 4xl:gap-12">
        {/* <ActiveConsents /> */}
        <ConfiguringConsents />
        <ConsentRequests />
      </FlexBox>
      <FlexBox className="w-full flex-col xl:flex-row justify-stretch items-stretch  xl:items-start gap-6 4xl:gap-12">
        <DataSharingPreferences />
        <DataSharingSettings />
      </FlexBox>
    </FlexBox>
  );
}
