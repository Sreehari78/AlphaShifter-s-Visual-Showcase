import React from "react";
import { motion as m } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface AlbumProps {
  xAxixInitialValue: string;
  xAxixFinalValue: string;
  yAxixInitialValue: string;
  yAxixFinalValue: string;
  contentValue: string;
  imageUrl: StaticImageData;
}

const Album = ({
  xAxixInitialValue,
  yAxixInitialValue,
  xAxixFinalValue,
  yAxixFinalValue,
  imageUrl,
  contentValue,
}: AlbumProps) => {
  const card = `shadow-[0px_7px_29px_0px_rgba(255,255,255,0.2)] relative before:content-["${contentValue}"] before:absolute before:left-2/4 before:top-2/4 before:-translate-x-1/2 before:text-[36px] before:-translate-y-1/2 hover:before:opacity-0`;
  return (
    <m.div
      initial={{ x: xAxixInitialValue, y: yAxixInitialValue }}
      animate={{ x: xAxixFinalValue, y: yAxixFinalValue }}
      transition={{ duration: 1.5 }}
      className={card}>
      <Image
        src={imageUrl}
        alt='About me'
        width={550}
        height={550}
        style={{
          objectFit: "cover",
        }}
        className=' opacity-50 hover:opacity-100'
      />
    </m.div>
  );
};

export default Album;
