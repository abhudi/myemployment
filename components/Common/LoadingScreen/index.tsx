"use Client";

import CircleLoader from "react-spinners/CircleLoader";

import { useLoadingState } from "@/hooks/useLoadingState";

import FlexBox from "../FlexBox";

export default function LoadingScreen() {
  const { isLoading, isRouteChanging } = useLoadingState();

  return (
    <FlexBox
      className={`${!isLoading ? "-translate-y-full" : "-translate-y-0"} ${!isRouteChanging ? "bg-opacity-100" : "bg-opacity-70"} transition-all duration-700 delay-300 w-full h-screen justify-center items-center bg-blue400`}
    >
      <CircleLoader color="#fff" loading={true} size={150} />
    </FlexBox>
  );
}
