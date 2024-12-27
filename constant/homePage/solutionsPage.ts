import { FAQData } from "@/types/Faq";

export const solutionsData = [
  {
    role: "consumer",
    image: "/assets/img/home/oldHome-3/whatWeDo/item1.png",
    title: "For Consumers",
    content: "MyEmployment puts you in control of your employment data.",
  },
  {
    role: "dataContributor",
    image: "/assets/img/home/oldHome-3/whatWeDo/item3.png",
    title: "For Data Contributors",
    content:
      "MyEmployment simplifies data management and reduces risk, saving you time and resources.",
  },
  {
    role: "verifier",
    image: "/assets/img/home/oldHome-3/whatWeDo/item2.png",
    title: "For Verifiers",
    content:
      "MyEmployment provides instant, accurate employment verifications, enhancing your decision-making process.",
  },
];

export const faqData: FAQData = {
  consumer: {
    title: "Solutions for Consumers",
    subtitle:
      "MyEmployment puts you in control of your employment data. Many employers unknowingly share employee data with third parties, including debt collectors, lenders, and credit card companies which perform Verification of Incomes (VOI) without consumers' knowledge or being notified. MyEmployment prioritizes the security and integrity of your information, giving you transparency and control.",
    content: [
      {
        title: "Control Your Data",
        description:
          "Consumers can configure their data-sharing preferences, lock their profiles to prevent unauthorized access, receive notifications of verification requests, and view their data-sharing history. MyEmployment allows consumers to manage how their data is shared based on verifier type and set time-limited access. You can even request data deletion or removal from the platform.",
      },
      {
        title: "Access Your Data",
        description:
          "View and download your employment history, easily sharing it with potential employers, landlords, or other organizations",
      },
      {
        title: "Protecting Your Privacy",
        description:
          "MyEmployment utilizes data encryption (both in transit and at rest), multi-factor authentication, role-based access control, and comprehensive audit logging. The platform adheres to strict security standards, including FIPS 140-2, SOC 2 Type 2, and ISO, ensuring compliance with regulations like FCRA and GDPR.",
      },
    ],
    footerContent:
      "MyEmployment: Is your trusted partner for secure and transparent employment verification.",
  },
  dataContributor: {
    title: "Solutions for Data Contributors",
    subtitle:
      "MyEmployment simplifies data management and reduces risk, saving you time and resources. Our platform streamlines verifications, minimizes inconsistencies, and ensures verifiers access accurate data.",
    content: [
      {
        title: "Build Trust",
        description:
          "Demonstrate your commitment to employee privacy and ethical data handling, fostering trust and strengthening your company's reputation.",
      },
      {
        title: "Streamlined Data Management",
        description:
          "Integrate your existing payroll systems via secure APIs, automating data updates and reducing administrative burdens. MyEmployment integrates with over 60 payroll and HRIS/ATS systems",
      },
      {
        title: "Enhanced Data Security",
        description:
          "Employee data is protected with robust security measures, including encryption, multi-factor authentication, role-based access control, and comprehensive audit trails. MyEmployment adheres to stringent data security standards, including ISO, SOC 2 Type 2, and FIPS 140-2.",
      },
      {
        title: "Ensured Compliance",
        description:
          "MyEmployment complies with data privacy regulations, including FCRA and GDPR, giving consumers control over their data and ensuring transparent data-sharing practices. Audit logs track data access and changes, supporting compliance",
      },
    ],
    footerContent:
      "MyEmployment: Your partner in secure and ethical employment verification.",
  },
  verifier: {
    title: "Solutions for Verifiers",
    subtitle:
      "MyEmployment provides instant, accurate employment verifications, enhancing your decision-making process. Many traditional methods are slow and cumbersome, but MyEmployment streamlines this crucial step.",
    content: [
      {
        title: "Billing",
        description:
          "MyEmployment offers flexible options like prepaid credits and subscriptions bringing affordability to completing employment verifications.",
      },
      {
        title: "Fast and Efficient",
        description:
          "Request verifications, configure API connections, and access verified both current and historical reports",
      },
      {
        title: "Accurate Data, Reduced Risk",
        description:
          "Access comprehensive employment details from multiple sources with cross-verification. This direct access to verified income minimizes reliance on potentially falsified information reducing risk. Multiple data sources ensure comprehensive coverage, giving you a more complete picture to be confident in your decision-making.",
      },
      {
        title: "Simplified Process",
        description:
          "Reduce manual processes with automated verifications. Experience real-time, digital employment verification, potentially within seconds, accelerating review and improving the customer experience.",
      },
      {
        title: "Consumer-Centric Approach",
        description:
          "MyEmployment prioritizes consumer privacy, giving individuals control over their data. You access data from MyEmployment through a secure system designed with robust privacy controls, ensuring compliance with regulations like FCRA.",
      },
    ],
    footerContent:
      "MyEmployment: Your partner in efficient, compliant, and consumer-focused employment verification.",
  },
};
