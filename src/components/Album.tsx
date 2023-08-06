import React from "react";
import { motion as m } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useLayoutEffect, useState } from "react";

interface AlbumProps {
  xAxixInitialValue: string;
  xAxixFinalValue: string;
  yAxixInitialValue: string;
  yAxixFinalValue: string;
  imageUrl: StaticImageData;
  contentValue: string;
}

const Album = ({
  xAxixInitialValue,
  yAxixInitialValue,
  xAxixFinalValue,
  yAxixFinalValue,
  imageUrl,
  contentValue,
}: AlbumProps) => {
  const PhotographyCard = `shadow-[0px_7px_29px_0px_rgba(255,255,255,0.2)] relative before:content-['Photography'] before:absolute before:left-2/4 before:top-2/4 before:-translate-x-1/2 before:text-[36px] before:-translate-y-1/2 hover:before:opacity-0 rounded-[20px]`;
  const VideographyCard = `shadow-[0px_7px_29px_0px_rgba(255,255,255,0.2)] relative before:content-['Videography'] before:absolute before:left-2/4 before:top-2/4 before:-translate-x-1/2 before:text-[36px] before:-translate-y-1/2 hover:before:opacity-0 rounded-[20px]`;
  const GradingCard = `shadow-[0px_7px_29px_0px_rgba(255,255,255,0.2)] relative before:content-['Grading'] before:absolute before:left-2/4 before:top-2/4 before:-translate-x-1/2 before:text-[36px] before:-translate-y-1/2 hover:before:opacity-0 rounded-[20px]`;
  const CompositingCard = `shadow-[0px_7px_29px_0px_rgba(255,255,255,0.2)] relative before:content-['Compositing'] before:absolute before:left-2/4 before:top-2/4 before:-translate-x-1/2 before:text-[36px] before:-translate-y-1/2 hover:before:opacity-0 rounded-[20px]`;
  let card = "";

  if (contentValue === "Photography") {
    card = PhotographyCard;
  } else if (contentValue === "Videography") {
    card = VideographyCard;
  } else if (contentValue === "Grading") {
    card = GradingCard;
  } else if (contentValue === "Compositing") {
    card = CompositingCard;
  }
  console.log(card);

  let imageSize: number = 0;

  const [windowWidth, setWindowWidth] = useState<number>(0);
  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Call handleResize once to get the initial window width
    handleResize();

    // Add event listener to track window width changes
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounte
    window.removeEventListener("resize", handleResize);
  }, []);

  if (windowWidth > 1500) {
    imageSize = 525;
  } else if (windowWidth > 950) {
    imageSize = 350;
  } else {
    imageSize = 300;
  }

  return (
    <m.div
      initial={{ x: xAxixInitialValue, y: yAxixInitialValue }}
      animate={{ x: xAxixFinalValue, y: yAxixFinalValue }}
      transition={{ duration: 3.5, type: "spring" }}
      style={{}}
      className={card}>
      <Image
        src={imageUrl}
        alt='About me'
        width={imageSize}
        height={imageSize}
        style={{
          objectFit: "cover",
        }}
        className='rounded-[20px] opacity-60 hover:opacity-100'
      />
    </m.div>
  );
};

export default Album;
