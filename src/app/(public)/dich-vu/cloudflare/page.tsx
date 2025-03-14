import { Metadata } from "next";
import CloudFlare from "./CloudFlare";

export const metadata: Metadata = {
  title: "Cloudflare | Turbo AI Solution",
  keywords: ["cloudflare"],
  robots: "",
  description:
    "More than 10 years of experience, Turbo Solutions specializes in providing leading cloud computing solutions and applications in Vietnam.",
};

export default function Page() {
  return (
    <>
      <CloudFlare />
    </>
  );
}
