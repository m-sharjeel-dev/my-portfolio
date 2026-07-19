"use client";

import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

const DEFAULT_BTN_CLS =
  "fixed bottom-8 right-6 z-50 flex items-center rounded-full bg-[#25D366] hover:bg-[#128C7E] p-4 hover:scale-110 transition-all duration-300 ease-out text-white shadow-lg";

const ScrollToTop = () => {
  return (
    <Link href={personalData.whatsapp} target="_blank" className={DEFAULT_BTN_CLS}>
      <BsWhatsapp className="text-3xl" />
    </Link>
  );
};

export default ScrollToTop;
