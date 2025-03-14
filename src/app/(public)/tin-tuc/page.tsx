import { Metadata } from "next";
import PostList from "./PostList";

export const metadata: Metadata = {
  title: "News | Turbo AI Solution",
  keywords: ["turbo AI"],
  robots: "",
  description:
    "More than 10 years of experience, Turbo Solutions specializes in providing leading cloud computing solutions and applications in Vietnam.",
};
const Page = () => {
  return (
    <>
      <PostList />
    </>
  );
};

export default Page;
