export type FAQRole = "consumer" | "dataContributor" | "verifier";

export type FAQData = {
  [key in FAQRole]: {
    title: string;
    subtitle: string;
    content: { title: string; description: string }[];
    footerContent: string;
  };
};
