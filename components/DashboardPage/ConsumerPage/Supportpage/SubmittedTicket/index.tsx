"use client";

import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import clsx from "clsx";
import { useState } from "react";

import Button from "@/components/Common/Button";
import FlexBox from "@/components/Common/FlexBox";
import truncateText from "@/utils/truncateText";

type Props = {
  tickets: {
    ticketId: string;
    title: string;
    subject: string;
    status: string;
    submittedAt: string;
  }[];
};

export default function SubmittedTicket({ tickets }: Props) {
  const [opened, setOpened] = useState<number[]>([]);

  return (
    <FlexBox className="flex-col items-center 2xl:items-start bg-white px-4 md:px-5 3xl:px-7 4xl:px-10 py-5 md:py-10 w-auto 2xl:w-2/5 rounded-2xl border border-slate-200 shadow-card">
      <Typography className="text-center xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 mt-2 mb-6">
        My Submitted Tickets
      </Typography>

      <FlexBox className="gap-3 flex-col w-full md:w-3/4 2xl:w-full items-center max-h-[340px] sm:max-h-[430px] overflow-y-auto px-1">
        {tickets.map(({ ticketId, title, subject, status, submittedAt }, i) => (
          <FlexBox
            key={ticketId}
            className={clsx(
              "flex-col w-full border border-neutral-300 rounded-lg p-2 gap-2 relative",
              opened.includes(i) && "mb-3",
            )}
          >
            {opened.includes(i) ? (
              <FlexBox className="flex-col gap-2 cursor-pointer items-start">
                <FlexBox className="flex-row justify-between items-center w-full">
                  <Chip
                    className={`py-2 w-24 capitalize font-bold text-white rounded-lg text-sm ${
                      status === "active" ? "bg-green-700" : "bg-yellow-400"
                    }`}
                    label={status}
                  />
                  <IconButton
                    className="bg-slate-100"
                    onClick={() =>
                      setOpened((prev) => prev.filter((id) => id !== i))
                    }
                  >
                    <CloseFullscreenIcon className="text-blue400 text-lg " />
                  </IconButton>
                </FlexBox>

                <FlexBox className="gap-2 flex-col my-2 px-2">
                  <Typography className="text-blue400 font-aeonik-bold text-sm sm:text-base">
                    Ticket ID:
                    <span className="text-blue200 ps-2">#{ticketId}</span>
                  </Typography>
                  <Typography className="text-blue400 font-aeonik-bold text-sm sm:text-base">
                    Date Submitted:
                    <span className="text-blue200 ps-2">{submittedAt}</span>
                  </Typography>
                  <Typography className="text-blue400 font-aeonik-bold text-sm sm:text-base">
                    Title:
                    <span className="text-neutral-700 font-aeonik ps-2">
                      {title}
                    </span>
                  </Typography>
                  <Typography className="text-blue400 font-aeonik-bold text-sm sm:text-base pb-4">
                    Subject:
                    <span className="text-neutral-700 font-aeonik ps-2">
                      {subject}
                    </span>
                  </Typography>
                </FlexBox>

                <Button
                  onClick={() => {}}
                  className="px-4 py-2 rounded-lg text-blue400 font-bold medium-sky-gradient border border-solid border-blue200 text-base absolute -bottom-4 left-4"
                >
                  View Ticket
                </Button>
              </FlexBox>
            ) : (
              <FlexBox
                className="justify-between items-center cursor-pointer"
                onClick={() => setOpened((prev) => [...prev, i])}
              >
                <FlexBox className="gap-2 items-center">
                  <Chip
                    className={`py-2 w-24 capitalize font-bold text-white rounded-lg text-sm ${
                      status === "active" ? "bg-green-700" : "bg-yellow-400"
                    }`}
                    label={status}
                  />
                  <FlexBox className="gap-0 sm:gap-2 flex-col sm:flex-row">
                    <Typography className="text-neutral-700 font-aeonik-bold text-sm sm:text-base">
                      {title}
                    </Typography>
                    <Typography className="text-neutral-700 text-sm sm:text-base">
                      {truncateText(subject, 13)}
                    </Typography>
                  </FlexBox>
                </FlexBox>
              </FlexBox>
            )}
          </FlexBox>
        ))}
      </FlexBox>

      <Button className="mt-8 text-blue200 mb-4 md:mb-2 normal-case rounded-lg px-6 py-3 text-base 3xl:text-lg border border-solid border-purple300 leading-none">
        Load More Tickets
      </Button>
    </FlexBox>
  );
}
