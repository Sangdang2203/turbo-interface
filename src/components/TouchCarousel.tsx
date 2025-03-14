import React from "react";
import { FiberManualRecord } from "@mui/icons-material";
import {
  AnswerQuestion,
  CloudflareCdnService,
  CloudFlarePackage,
  CloudServices,
  Feedback,
  HomeService,
  Package,
} from "@/types/interfaces";

interface Props {
  data:
    | HomeService[]
    | Feedback[]
    | CloudServices[]
    | CloudflareCdnService[]
    | CloudFlarePackage[]
    | AnswerQuestion[]
    | Package[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

const TouchCarousel = ({ data, currentIndex, setCurrentIndex }: Props) => {
  return (
    <div className="flex justify-center items-center">
      {data.map((_, index) => (
        <FiberManualRecord
          onClick={() => setCurrentIndex(index)}
          key={index}
          fontSize="small"
          className={`${
            currentIndex === index
              ? "text-green-700 cursor-pointer"
              : "text-slate-300 cursor-pointer"
          }`}
        />
      ))}
    </div>
  );
};

export default TouchCarousel;
