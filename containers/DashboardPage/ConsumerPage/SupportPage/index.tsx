import FlexBox from "@/components/Common/FlexBox";
import FAQ from "@/components/DashboardPage/ConsumerPage/Supportpage/FAQ";
import SubmitSupportTicket from "@/components/DashboardPage/ConsumerPage/Supportpage/SubmitSupportTicket";
import SubmittedTicket from "@/components/DashboardPage/ConsumerPage/Supportpage/SubmittedTicket";
import { submittedTicketsData } from "@/constant/dashboardPage";

export default function SupportPage() {
  return (
    <FlexBox className="w-[97%] 4xl:w-11/12 mx-auto my-10 md:my-16 flex-col max-w-desktop gap-6 4xl:gap-12">
      <FlexBox className="w-full flex-col 2xl:flex-row justify-between gap-6 4xl:gap-12">
        <SubmitSupportTicket />
        <SubmittedTicket tickets={submittedTicketsData} />
      </FlexBox>
      <FAQ />
    </FlexBox>
  );
}
