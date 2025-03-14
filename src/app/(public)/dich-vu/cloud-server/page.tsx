import { Metadata } from "next";
import CloudServer from "./CloudServer";
export const metadata: Metadata = {
  title: "Cloud Server | Turbo AI Solution",
  keywords: ["CloudServer"],
  robots: "",
  description:
    "More than 10 years of experience, Turbo Solutions specializes in providing leading cloud computing solutions and applications in Vietnam.",
};
export default function Page() {
  return (
    <>
      <CloudServer />
    </>
  );
}
