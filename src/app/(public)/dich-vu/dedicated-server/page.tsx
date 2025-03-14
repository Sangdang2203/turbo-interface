import { Metadata } from "next";
import DedicatedServer from "./DedicatedServer";

export const metadata: Metadata = {
  title: "Dedicated Server Server | Turbo AI Solution",
  keywords: ["DedicatedServer"],
  robots: "",
  description:
    "More than 10 years of experience, Turbo Solutions specializes in providing leading cloud computing solutions and applications in Vietnam.",
};
const Page = () => {
  return (
    <>
      <DedicatedServer />
    </>
  );
};

export default Page;
