import FlexBox from "@/components/Common/FlexBox";
import ApiDocumentation from "@/components/DashboardPage/VerifierPage/IntegrationAndApiPage/ApiDocumentation";
import ApiPerformanceDashboard from "@/components/DashboardPage/VerifierPage/IntegrationAndApiPage/ApiPerformanceDashboard";
import SandboxEnvironment from "@/components/DashboardPage/VerifierPage/IntegrationAndApiPage/SandboxEnvironment";
import WebhookConfiguration from "@/components/DashboardPage/VerifierPage/IntegrationAndApiPage/WebhookConfiguration";

export default function IntegrationAndApiPage() {
  return (
    <FlexBox className="w-[97%] 4xl:w-11/12 mx-auto my-10 md:my-16 max-w-desktop flex-col items-stretch gap-6 4xl:gap-12">
      <ApiDocumentation />

      <FlexBox className="w-full flex-col 3xl:flex-row justify-between items-start gap-6 4xl:gap-12">
        <SandboxEnvironment />
        <ApiPerformanceDashboard />
      </FlexBox>

      <WebhookConfiguration />
    </FlexBox>
  );
}
