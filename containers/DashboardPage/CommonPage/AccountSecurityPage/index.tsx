import FlexBox from "@/components/Common/FlexBox";
import ActiveSessionManagement from "@/components/DashboardPage/Common/AccountSecurity/ActiveSessionManagement";
import ChangePassword from "@/components/DashboardPage/Common/AccountSecurity/ChangePassword";
import MfaSetUp from "@/components/DashboardPage/Common/AccountSecurity/MfaSetUp";
import SecurityQuestions from "@/components/DashboardPage/Common/AccountSecurity/SecurityQuestions";

export default function AccountSecurityPage() {
  return (
    <FlexBox className="w-[97%] 4xl:w-11/12 mx-auto my-10 md:my-16 flex-col max-w-desktop gap-6 4xl:gap-12">
      <MfaSetUp />
      <FlexBox className="w-full flex-col xl:flex-row justify-between items-stretch gap-6 4xl:gap-12">
        <ActiveSessionManagement />
        <ChangePassword />
      </FlexBox>
      <SecurityQuestions/>
    </FlexBox>
  );
}
