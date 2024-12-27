import Typography from "@mui/material/Typography";

import FlexBox from "@/components/Common/FlexBox";

type Props = {
  content: { icon: string; title: string; subtitle: string }[];
};

export default function QuickActions({ content }: Props) {
  return (
    <FlexBox className="flex-col items-center bg-white px-4 md:px-5 3xl:px-7 4xl:px-10 py-5 md:py-10 w-auto 2xl:w-1/4 rounded-2xl border border-slate-200 shadow-card">
      <Typography className="text-center xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 mt-2 mb-6">
        Quick Actions Panel
      </Typography>

      <FlexBox className="max-w-[300px] gap-4 flex-col w-11/12 sm:w-2/3 md:w-1/2 2xl:w-full">
        {content.map(({ icon, title, subtitle }, i) => (
          <FlexBox
            key={i}
            className="w-full group cursor-pointer items-center gap-2 2xl:gap-3 sky-gradient p-2 3xl:p-3 rounded-2xl"
          >
            <img
              draggable="false"
              src={icon}
              alt=""
              className="w-12 3xl:w-min"
            />
            <Typography className="text-lg group-hover:text-white group-hover:font-bold transition-all duration-300 ease-in-out">
              {title} <br />
              <span className="text-sm 3xl:text-base">{subtitle}</span>
            </Typography>
          </FlexBox>
        ))}
      </FlexBox>
    </FlexBox>
  );
}
