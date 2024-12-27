"use client";

import Typography from "@mui/material/Typography";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";

import { useDenySignUp } from "@/api/requests/auth/register/deny";
import FlexBox from "@/components/Common/FlexBox";

export default function DenySignUpPage() {
  const { id }: { id: string } = useParams();
  const { mutateAsync: denySignUp, isPending } = useDenySignUp();
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (id) {
      denySignUp(id)
        .then((res) => setMessage(res.message))
        .catch((error) => setError(error));
    }
  }, [id]);

  return (
    <FlexBox
      id="deny-signup"
      className="z-10 w-full items-center justify-start flex-col min-h-screen"
    >
      <FlexBox className="bg-white rounded-3xl px-3 sm:px-5 md:px-5 lg:px-10 py-4 md:py-8 mt-10 md:mt-20 w-11/12 md:w-2/3 lg:w-1/2 2xl:w-1/3 text-center gap-2 md:gap-4 items-center justify-center flex-col md:flex-row">
        {isPending ? (
          <PulseLoader size={10} color="#1c2a59" />
        ) : (
          <>
            <Typography
              variant="h2"
              className="text-blue400 font-aeonik-black text-xl sm:text-3xl md:text-4xl px-3 py-2 text-center"
            >
              {message || error}
            </Typography>
          </>
        )}
      </FlexBox>
    </FlexBox>
  );
}
