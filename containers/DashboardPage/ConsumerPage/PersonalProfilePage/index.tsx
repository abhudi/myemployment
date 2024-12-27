import FlexBox from "@/components/Common/FlexBox";
import DataAccessRequest from "@/components/DashboardPage/ConsumerPage/PersonalProfilePage/DataAccessRequest";
import EditProfile from "@/components/DashboardPage/ConsumerPage/PersonalProfilePage/EditProfile";
import EmploymentDetails from "@/components/DashboardPage/ConsumerPage/PersonalProfilePage/EmploymentDetails";

export default function PersonalProfilePage() {
  return (
    <FlexBox className="w-[97%] 4xl:w-11/12 mx-auto my-10 md:my-16 max-w-desktop flex-col xl:flex-row items-stretch gap-6 4xl:gap-12">
      <EditProfile />
      {/* <FlexBox className="w-auto xl:w-1/3 flex-col justify-stretch gap-6 4xl:gap-12">
        <EmploymentDetails />
        <DataAccessRequest />
      </FlexBox> */}
    </FlexBox>
  );
}
