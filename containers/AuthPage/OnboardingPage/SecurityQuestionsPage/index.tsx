"use client";



import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import Joi from "joi";
import { useEffect, useState } from "react";
import { Controller, FormProvider, useFieldArray } from "react-hook-form";
import toast from "react-hot-toast";

import { SecurityQuestionsFormValues } from "@/api/types";
import Button from "@/components/Common/Button";
import CustomSelectIcon from "@/components/Common/CustomSelectIcon";
import FlexBox from "@/components/Common/FlexBox";
import Form from "@/components/Common/Form";
import FormControl from "@/components/Common/FormControl";
import Message from "@/enums/Message";
import { useNavigateWithLoading, useRole, useSchemaForm } from "@/hooks";
import { useRequestAccountSecurityQuestion, useUpdateAccountSecurityQuestion } from "@/api/requests/user/accountSecurity";
import LoadingButton from "@mui/lab/LoadingButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment } from "@mui/material";
import { OnboardingFooter } from "@/components/Common/Footer";
import { useOnboarding } from "@/providers/OnboardingProvider";

const defaultValues = {
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
  };
}

// Generate dynamic Joi schema based on the number of questions
function generateDynamicSchema() {
  return Joi.object({
    securityQuestions: Joi.array()
      .items(
        Joi.object({
          securityQuestionId: Joi.number(),
          questionText:Joi.string().allow(null),
          answerId: Joi.number().allow(null),
          answer: Joi.string().required().messages(joiMessages())
        })
      )
      .required(),
  });
}


export default function SecurityQuestionsPage() {

   const { securityQuestions, setSecurityQuestions } = useOnboarding();
    const role = useRole();

      const {
        navigateWithLoadingContinue,
        isPendingContinue,
        navigateWithLoadingBack,
        isPendingBack,
      } = useNavigateWithLoading();

      function handleBack() {
        navigateWithLoadingBack("/auth/onboarding/address-details");
      }
    
    
  const [selectOpen, setSelectOpen] = useState(false);

  // Fetch the questions using the API
  const { mutateAsync: requestAccountSecurityQuestion, isPending: isPendingAccountSecurityQuestion } =
  useRequestAccountSecurityQuestion();

  const { mutateAsync: updateAccountSecurityQuestion, isPending: isPendingUpdateAccountSecurityQuestion } =
  useUpdateAccountSecurityQuestion();


  const form = useSchemaForm({
    mode: "onSubmit",
    defaultValues,
    schema: generateDynamicSchema(), // Schema depends on the number of questions
  });

  const { control, handleSubmit, setValue } = form;

  // Use useFieldArray for managing dynamic fields
  const { fields, append, remove ,replace} = useFieldArray({
    control,
    name: "securityQuestions",
  });

  useEffect(() => {
    // Fetch security questions and set them dynamically
    requestAccountSecurityQuestion().then((data) => {
  
      // Replace the fields with the fetched questions
      const questionsArray:any[]=[];
      data.data.map((q: SecurityQuestionsFormValues) => (questionsArray.push({
        securityQuestionId: q.securityQuestionId,
        answer: q.answer || "", // Default answer if empty
        answerId: q.answerId || null,
        questionText: q.questionText,
      })));
  
      // Replace fields dynamically (avoids duplicates)
      replace(questionsArray);
    });
  }, []);

  const onSubmit = handleSubmit(
    (values) => {
      console.log("Form Submitted: ", values);
      setSecurityQuestions(values.securityQuestions);
      navigateWithLoadingContinue("/auth/onboarding/contact-preferences");
     
  });

  const [showAnswers, setShowAnswers] = useState<{ [key: string]: boolean }>({});

  const toggleShowAnswer = (index: number) => {
    setShowAnswers((prev) => ({
      ...prev,
      [`answer${index + 1}`]: !prev[`answer${index + 1}`],
    }));
  };
  return (
    <FlexBox
      id="addressDetails"
      className="z-10 w-fll items-center justify-center flex-col"
    >
      <FlexBox className="bg-white rounded-3xl px-3 sm:px-5 md:px-5 lg:px-10 py-4 md:py-8 flex-col mt-10 md:mt-20 mb-4 sm:mb-8 md:mb-16 lg:mb-40 w-11/12 md:w-3/4 lg:w-2/3 4xl:w-1/3 text-center md:text-start gap-2 md:gap-4">
      <Typography className="text-center xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 mt-2 mb-2 md:mb-6">
        Security Questions Management
      </Typography>
      <Typography className="text-base md:text-xl text-blue400 pb-2">
        Incase you forgot your password
      </Typography>

      <FormProvider {...form}>
        <Form
          className="flex flex-col w-full"
          onSubmit={onSubmit}
          noValidate
        >
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

                {/* Text Input for Answer */}
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

         
          <FlexBox className="gap-6">
                <LoadingButton
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className="rounded-3xl text-white py-2 sm:py-3 font-aeonik-bold text-base md:text-xl mt-6"
                  onClick={handleBack}
                  loading={isPendingBack}
                >
                  Back
                </LoadingButton>
             

              <LoadingButton
                fullWidth
                variant="contained"
                className="rounded-3xl py-2 sm:py-3 font-aeonik-bold text-base md:text-xl mt-6"
                type="submit"
                loading={isPendingContinue || isPendingAccountSecurityQuestion || isPendingUpdateAccountSecurityQuestion}
              >
                Continue
              </LoadingButton>
            </FlexBox>

            <Typography
              variant="body1"
              className="text-xs md:text-base text-center text-blue400 border-t border-neutral-500 pt-6 mt-10 md:mt-20 underline"
            >
              Terms Of Use
            </Typography>
        </Form>
      </FormProvider>
      </FlexBox>

      <OnboardingFooter />
    </FlexBox>
  );
}
