"use client";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Joi from "joi";
import { useEffect, useState } from "react";
import { Controller, FormProvider, useFieldArray } from "react-hook-form";
import toast from "react-hot-toast";

import FlexBox from "@/components/Common/FlexBox";
import Form from "@/components/Common/Form";
import FormControl from "@/components/Common/FormControl";
import LoadingButton from "@/components/Common/LoadingButton";
import Message from "@/enums/Message";
import { useNavigateWithLoading, useSchemaForm } from "@/hooks";
import { useForgotPasswordByEmail, useRequestAccountSecurityQuestion, useRequestAccountSecurityQuestionByEmail, useUpdateAccountSecurityQuestion } from "@/api/requests/user/accountSecurity";
import CustomSelectIcon from "@/components/Common/CustomSelectIcon";
import { Select, MenuItem, InputAdornment, Link } from "@mui/material";
import { SecurityQuestionsFormValues } from "@/api/types";

const defaultValues = {
  email: "",
  securityQuestions: [
    {   
      securityQuestionId: "",
      questionText:"",
      answerId: "",
      answer: ""
     }, 
  ],
};

function joiMessages() {
  return {
    "string.empty": "is required",
    "string.email": "is invalid"
  };
}
function generateDynamicSchema() {
  return Joi.object({
    email:  Joi.string()
        .required()
        .email({ tlds: { allow: false } }),
    securityQuestions: Joi.array()
      .items(
        Joi.object({
          securityQuestionId: Joi.number(),
          questionText:Joi.string().allow(null),
          answerId: Joi.number().allow(null),
          answer: Joi.string().required()
        })
      )
  }).messages(joiMessages());;
}


export default function ForgotPasswordPage() {
  
  const form = useSchemaForm({
    mode: "onSubmit",
    defaultValues,
    schema: generateDynamicSchema(), // Schema depends on the number of questions
  });
 

  const [forgotPasswordStep, setLoginStep] = useState<
    "email" | "securityquestion" >("email");

    const { navigateWithLoadingContinue, isPendingContinue } =
    useNavigateWithLoading();

  const handleForgotPasswordSubmit = form.handleSubmit(
    (values) => {
      if (forgotPasswordStep === "email") {
        requestAccountSecurityQuestion(values.email).then((response) => {
          if(response.data.length>0){
             // Replace the fields with the fetched questions
                  const questionsArray:any[]=[];
                  response.data.map((q: SecurityQuestionsFormValues) => (questionsArray.push({
                    securityQuestionId: q.securityQuestionId,
                    answer: q.answer || "", // Default answer if empty
                    answerId: q.answerId || null,
                    questionText: q.questionText,
                  })));
              
                  // Replace fields dynamically (avoids duplicates)
                  replace(questionsArray);
                  setLoginStep("securityquestion");
          }
          else{
            toast.error("No security questions found for the email");
          }
        },(error) => {  
          toast.error(error);
        })
      
      } else if (forgotPasswordStep === "securityquestion") 
      {
        forgotPasswordByEmail(values).then((response) => {
          toast.success("Reset password link sent to your email");
          navigateWithLoadingContinue("/auth/login");
        })
      } 
    }
    
  );

  const [selectOpen, setSelectOpen] = useState(false);

  // Fetch the questions using the API
  const { mutateAsync: requestAccountSecurityQuestion, isPending: isPendingAccountSecurityQuestion } =
  useRequestAccountSecurityQuestionByEmail();

  const { mutateAsync: forgotPasswordByEmail, isPending: isPendingForgotPassword } =
  useForgotPasswordByEmail();




  const { control, handleSubmit, setValue } = form;

  // Use useFieldArray for managing dynamic fields
  const { fields, append, remove ,replace} = useFieldArray({
    control,
    name: "securityQuestions",
  });

  const [showAnswers, setShowAnswers] = useState<{ [key: string]: boolean }>({});

  const toggleShowAnswer = (index: number) => {
    setShowAnswers((prev) => ({
      ...prev,
      [`answer${index + 1}`]: !prev[`answer${index + 1}`],
    }));
  }

  useEffect(() => {
    replace([]);
  }, []);

  return (
    <FlexBox
      id="login"
      className="z-10 w-full items-center justify-center flex-col min-h-screen"
    >
      <h1> Forgot Password</h1>
      <FlexBox className="bg-white rounded-3xl px-3 sm:px-5 md:px-5 lg:px-10 py-4 md:py-8 flex-col mt-10 md:mt-20 mb-4 sm:mb-8 md:mb-16 lg:mb-40 w-11/12 md:w-2/3 lg:w-1/2 2xl:w-1/3 text-center md:text-start gap-2 md:gap-4">
        <Typography
          variant="h2"
          className="text-blue150 font-aeonik-medium text-2xl sm:text-3xl md:text-4xl 4xl:text-5xl px-3 py-2 text-center"
        >
          <span className="text-blue400 font-aeonik-black">
          Forgot Password?
          </span>
        </Typography>

        <FormProvider {...form}>
          <Form className="flex flex-col" onSubmit={handleForgotPasswordSubmit} noValidate>
            {forgotPasswordStep === "email" && (
             <FlexBox className="w-full flex-col">
             <Controller
               name="email"
               render={({ field, fieldState }) => (
                 <FormControl
                   className="mb-2 sm:mb-4 text-start w-full"
                   color={fieldState.error && "error"}
                   label={`Email* ${fieldState.error?.message || ""}`}
                   autoFocus
                   labelStyle="text-base font-aeonik-bold py-1 px-3 text-gray-700"
                   inputStyle="m-1 bg-light200 rounded-lg"
                   {...field}
                 />
               )}
             />
            
           </FlexBox>
            )}



            {forgotPasswordStep === "securityquestion" && (

<FlexBox className="w-full flex-col gap-6">
{fields.map((mainfield, index) => (
  <FlexBox key={mainfield.id} className="w-full gap-3 xl:gap-6 flex-col xl:flex-row">
    
    <Controller
      name={`securityQuestions.${index}.securityQuestionId`} // Dynamically bind questionId
     control={control}
      defaultValue={mainfield.securityQuestionId}
      render={({ field }) => (
        <Select
          {...field}
          onOpen={() => setSelectOpen(true)}
          onClose={() => setSelectOpen(false)}
          IconComponent={(props) => (
            <CustomSelectIcon open={selectOpen} {...props} />
          )}
          className="bg-neutral-100 w-full xl:w-1/2 h-11 sm:h-12 md:h-14 text-neutral-700 px-3 2xl:px-4 text-lg border-none rounded-lg"
        >
          <MenuItem
              key={mainfield.securityQuestionId}
              value={mainfield.securityQuestionId}
            >
              {mainfield.questionText}
            </MenuItem>
        </Select>
      )}
    />

    <Controller
      name={`securityQuestions.${index}.answer`} // Dynamically bind answer
      control={control}
      defaultValue={mainfield.answer}
      render={({ field, fieldState }) => (
        <FormControl
          {...field}
          className="text-start w-full xl:w-1/2"
          color={fieldState.error ? "error" : undefined}
          label={`Answer* ${fieldState.error?.message || ""}`}
          inputStyle="rounded-lg"
          type={showAnswers[`answer${index + 1}`] ? 'text' : 'password'}
          placeholder="Type your answer"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={() => toggleShowAnswer(index)}
                edge="end"
              >
                {showAnswers[`answer${index + 1}`] ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      )}
    />
  </FlexBox>
))}
</FlexBox>

              )}

           

            <FlexBox className="gap-4 flex-col">
              <LoadingButton
                fullWidth
                variant="contained"
                className="rounded-3xl py-2 sm:py-3 font-aeonik-bold text-base md:text-xl mt-6"
                type="submit"
                loading={
                  isPendingAccountSecurityQuestion ||
                  isPendingContinue ||
                  isPendingForgotPassword
                }
              
              >
                {forgotPasswordStep === "email"
                  ? "Next"
                  : "Submit"
            }
              </LoadingButton>

            </FlexBox>

          </Form>
        </FormProvider>
        <FlexBox className="w-full justify-center">
              <Link href="/auth/login">
                <Typography className="text-center underline text-sm md:text-base  text-blue400 cursor-pointer">
                  Click here to login.
                </Typography>
              </Link>
            </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}

