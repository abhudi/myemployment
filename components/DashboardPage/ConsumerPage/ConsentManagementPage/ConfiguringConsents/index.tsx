"use client";
import Typography from "@mui/material/Typography";
import Button from "@/components/Common/Button";
import FlexBox from "@/components/Common/FlexBox";


export default function ConfiguringConsents() {

    return (
        <>
            <FlexBox className="flex-col justify-start items-center xl:items-start bg-white px-2 md:px-4 3xl:px-7 4xl:px-10 py-5 md:py-10 w-auto xl:w-full rounded-2xl border border-slate-200 shadow-card">
                <FlexBox className="w-full flex-col items-center xl:items-start gap-4 md:gap-10">
                    <Typography className="gap-8 flex items-center text-center xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue275 my-2">
                        Configuring Consent Management
                    </Typography>

                    <FlexBox className="w-3/4 xl:w-full flex-col md:flex-row items-center md:items-start text-center md:text-start gap-4 justify-between">
                        <FlexBox className="flex-col gap-1">
                            <Typography className="font-aeonik-bold text-base 2xl:text-xl text-neutral-700">
                                Video Tutorial Library
                            </Typography>
                            <Typography className="text-base 2xl:text-xl text-neutral-700">
                                View step-by-step instructional videos.
                            </Typography>
                        </FlexBox>

                        <FlexBox className="gap-4 md:gap-6 flex-col md:flex-row">
                            <Button className="w-32 text-sm px-4 py-2 rounded-full font-bold text-white bg-green-500">
                                Watch Videos
                            </Button>
                        </FlexBox>
                    </FlexBox>

                    <FlexBox className="w-3/4 xl:w-full flex-col md:flex-row items-center md:items-start text-center md:text-start gap-4 justify-between">
                        <FlexBox className="flex-col gap-1">
                            <Typography className="font-aeonik-bold text-base 2xl:text-xl text-neutral-700">
                                User Resources
                            </Typography>
                            <Typography className="text-base 2xl:text-xl text-neutral-700">
                                Navigate to review MyEmployment's user documents and resources.
                            </Typography>
                        </FlexBox>

                        <FlexBox className="gap-4 md:gap-6 flex-col md:flex-row">
                            <Button className="w-32 text-sm px-4 py-2 rounded-full font-bold text-white bg-green-500">
                                View Resources
                            </Button>
                        </FlexBox>
                    </FlexBox>

                    <FlexBox className="w-3/4 xl:w-full flex-col md:flex-row items-center md:items-start text-center md:text-start gap-4 justify-between">
                        <FlexBox className="flex-col gap-1">
                            <Typography className="font-aeonik-bold text-base 2xl:text-xl text-neutral-700">
                                Consumer Support
                            </Typography>
                            <Typography className="text-base 2xl:text-xl text-neutral-700">
                                Communicate with an agent to setup your data sharing settings.
                            </Typography>
                        </FlexBox>

                        <FlexBox className="gap-4 md:gap-6 flex-col md:flex-row">
                            <Button className="w-32 text-sm px-4 py-2 rounded-full font-bold text-white bg-green-500">
                                Connect With Support
                            </Button>
                        </FlexBox>
                    </FlexBox>

                    {/* <FlexBox className="w-3/4 xl:w-full flex-col md:flex-row items-center text-center md:text-start gap-4 justify-between">
          <Typography className="font-aeonik-bold text-base 2xl:text-xl text-neutral-700">
            Time Frame Selection:
          </Typography>

          <Select
            value={schedule}
            onChange={(e) => setSchedule(e.target.value as number)}
            IconComponent={() => null}
            className="text-neutral-700 px-3 rounded-card text-base h-11"
          >
            <MenuItem value={3}>03 Months</MenuItem>
            <MenuItem value={6}>06 Months</MenuItem>
            <MenuItem value={12}>12 Months</MenuItem>
          </Select>
        </FlexBox> */}
                </FlexBox>
            </FlexBox>
        </>
    )
}