import { Metadata } from "next";
import ContactPage from "./Contact";

export const metadata: Metadata = {
  title: "Contact | Turbo AI Solution",
  keywords: ["turbo AI"],
  robots: "",
  description:
    "More than 10 years of experience, Turbo Solutions specializes in providing leading cloud computing solutions and applications in Vietnam.",
};

const Page = () => {
  return (
    <>
      <ContactPage />
    </>
  );
};

export default Page;
