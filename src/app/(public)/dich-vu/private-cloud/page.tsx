import { Metadata } from "next";
import PrivateCloud from "./PrivateCloud";

export const metadata: Metadata = {
  title: "Private Cloud | Turbo AI Solution",
  keywords: ["Private Cloud"],
  robots: "",
  description:
    "More than 10 years of experience, Turbo Solutions specializes in providing leading cloud computing solutions and applications in Vietnam.",
};
const Page = () => {
  return (
    <>
      <PrivateCloud />
    </>
  );
};

export default Page;
