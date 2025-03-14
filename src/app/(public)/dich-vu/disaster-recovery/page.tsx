import { Metadata } from "next";
import DisasterRecovery from "./DisasterRecovery";
export const metadata: Metadata = {
  title: "Disaster Recovery | Turbo AI Solution",
  keywords: ["Disaster Recovery"],
  robots: "",
  description:
    "More than 10 years of experience, Turbo Solutions specializes in providing leading cloud computing solutions and applications in Vietnam.",
};
const Page = () => {
  return (
    <>
      <DisasterRecovery />
    </>
  );
};

export default Page;
