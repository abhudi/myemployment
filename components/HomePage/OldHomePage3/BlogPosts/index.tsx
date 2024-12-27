import Typography from "@mui/material/Typography";

import Container from "@/components/Common/Container";
import FlexBox from "@/components/Common/FlexBox";
import { blogPostsData } from "@/constant/homePage/oldHomePage3";

export default function BlogPosts() {
  return (
    <FlexBox className="w-full bg-white">
      <Container className="w-11/12 max-w-container pb-10 md:pb-20 flex-col items-center text-center">
        <Typography className="text-xl md:text-2xl text-blue150 font-aeonik-bold py-4">
          Recent Blog Posts
        </Typography>

        <Typography className="text-3xl sm:text-4xl xl:text-5xl text-blue400 font-aeonik-bold">
          MyEmployment News
        </Typography>

        <FlexBox className="max-w-laptop grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 2xl:gap-20 my-5 md:my-10">
          {blogPostsData.map(({ image, date, title, content }, i) => (
            <FlexBox
              key={i}
              className="flex-col text-center md:text-start w-11/12 sm:w-2/3 mx-auto md:mx-0 md:w-auto"
            >
              <img draggable={false} src={image} alt="" className="" />
              <Typography className="text-blue100 text-base md:text-lg font-bold mt-6 md:mt-8">
                {date}
              </Typography>
              <Typography className="text-blue400 text-xl lg:text-2xl xl:text-3xl font-aeonik-bold py-2">
                {title}
              </Typography>
              <Typography className="text-neutral-700 text-base lg:text-lg">
                {content}
              </Typography>
              <Typography className="text-blue400 text-base lg:text-xl font-aeonik-bold mt-2 md:mt-4 cursor-pointer underline">
                Read More
              </Typography>
            </FlexBox>
          ))}
        </FlexBox>
      </Container>
    </FlexBox>
  );
}
