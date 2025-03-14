import { Metadata } from "next";
import CloudGPU from "./CloudGPU";

export const metadata: Metadata = {
  title: "CloudGPU | Turbo AI Solution",
  keywords: ["CloudGPU"],
  robots: "",
  description:
    "More than 10 years of experience, Turbo Solutions specializes in providing leading cloud computing solutions and applications in Vietnam.",
};
const Page = () => {
  return (
    <>
      <CloudGPU />
    </>
  );
};

export default Page;
