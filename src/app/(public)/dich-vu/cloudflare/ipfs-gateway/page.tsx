import IpfsGateway from "./IpfsGateway";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ipfs Gateway | Turbo AI Solution",
  keywords: ["Ipfs Gateway"],
  robots: "",
  description:
    "More than 10 years of experience, Turbo Solutions specializes in providing leading cloud computing solutions and applications in Vietnam.",
};

export default function Page() {
  return (
    <>
      <IpfsGateway />
    </>
  );
}
