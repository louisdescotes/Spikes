"use client"

import Image from "next/image";
import { PenBox, Share, Swords, Trash, EllipsisVertical } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    transition: {
      opacity: { delay: 0.3 },
    },
  },
  visible: { opacity: 1, y: 0 },
};

interface Props {
  img: string;
  title: string;
  description: string;
  premium?: boolean;
}

export default function Card({ img, title, description, premium }: Props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <aside className="z-10 flex flex-col gap-4 p-4 border-[1.2px] rounded-3xl bg-white border-[#E4E4EB] min-h-[475px] min-w-[410px] group">
      <div className="w-full h-[250px] rounded-[12px] overflow-hidden">
        <Image
          src={`/${img}`}
          width={400}
          height={250}
          quality={100}
          alt="fond"
          className=" size-full object-cover transition-all duration-300 ease-in-out cursor-pointer group-hover:scale-105"
        />
      </div>

      <article className="relative flex flex-col justify-between h-full flex-1">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <p className="text-xl font-medium">{title}</p>
            {premium && (
              <div className="flex justify-center items-center bg-[#CFD2DD66] rounded-md p-1.5 w-fit">
                Premium
              </div>
            )}
          </div>
          <div>
            <p className="text-[#090C1580]">{description}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button className=" hover:shadow-transparent transition-shadow duration-100 cursor-pointer gap-2 flex justify-center items-center py-2 px-3 rounded-xl border border-[#E4E4EB] bg-white shadow-custom active:shadow-none">
            <Swords /> Start Challenge
          </button>
          <button
            onClick={handleOpen}
            className={`${
              open ? "border border-black" : "border border-[#E4E4EB]"
            } duration-75 cursor-pointer flex justify-center items-center py-2 px-3 rounded-xl bg-white shadow-custom`}
          >
            <EllipsisVertical />
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              key="dropdown" 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute top-[13rem] -right-32 bg-white flex flex-col gap-1.5 border rounded-lg p-1.5 border-[#E4E4EB] w-fit"
            >
              <motion.div
                variants={itemVariants}
                className="hover:bg-[#CFD2DD33] duration-100 rounded-md cursor-pointer flex items-center gap-2 p-1.5"
              >
                <PenBox /> Edit Challenge
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="hover:bg-[#CFD2DD33] duration-100 rounded-md cursor-pointer flex items-center gap-2 p-1.5"
              >
                <Share /> Share Challenge
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="hover:bg-[#CFD2DD33] duration-100 rounded-md cursor-pointer text-[#D73F3EE5] flex items-center gap-2 p-1.5"
              >
                <Trash color="#D73F3EE5" /> Delete Challenge
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </aside>
  );
}
