import { Metadata } from "next";
import CloudBackupRecovery from "./CloudBackupRecovery";
export const metadata: Metadata = {
  title: "Cloud Backup Recovery | Turbo AI Solution",
  keywords: ["Cloud Backup Recovery"],
  robots: "",
  description:
    "More than 10 years of experience, Turbo Solutions specializes in providing leading cloud computing solutions and applications in Vietnam.",
};
const Page = () => {
  return (
    <>
      <CloudBackupRecovery />
    </>
  );
};

export default Page;
