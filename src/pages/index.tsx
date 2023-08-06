import Image, { StaticImageData } from "next/image";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { motion } from "framer-motion";
import {
  faWhatsapp,
  faInstagram,
  faLinkedin,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";
import LandingImageLarge from "../../public/assets/images/Landing-2.png";
import LandingImageSmall from "../../public/assets/images/Landing-mobile.png";
import { useEffect, useState } from "react";

const Landing = () => {
  let [image, setImage] = useState(LandingImageLarge);
  useEffect(() => {
    if (innerWidth < 786) {
      setImage(LandingImageSmall);
    }
  }, []);
  const whatsappIcon: IconProp = faWhatsapp;
  const instagramIcon: IconProp = faInstagram;
  const linkedinIcon: IconProp = faLinkedin;
  const behanceIcon: IconProp = faBehance;
  return (
    <div className='flex flex-col items-start justify-end lg:h-[95vh] h-[94vh]'>
      <Image
        src={image}
        alt='Landing page'
        style={{
          height: "100.4%",
          objectFit: "cover",
          width: "100%",
        }}
        className='-z-20 absolute'
      />
      <div className='p-2 flex flex-col items-start justify-end font-semibold text-[3rem] lg:text-[4rem] lg:ml-28 pb-[15vh]'>
        <p className='m-0'>I'M A </p>
        <Typewriter
          options={{
            strings: ["PHOTOGRAPHER", "VIDEOGRAPHER", "VIDEO EDITOR"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <p className='p-2 m-0 lg:ml-28 font-normal tracking-[.5em] text-[30px] absolute pb-[11vh]'>
        alphashifter
      </p>
      <ul className='p-2 flex gap-4 text-xl lg:ml-28 leading-loose	absolute pb-[4vh]'>
        <motion.li
          className='lg:text-[40px] text-[35px]'
          whileHover={{ scale: 1.3 }}>
          <a
            href='https://mail.google.com/mail/u/2/#inbox?compose=GTvVlcSKjfqrjqgqDlWmrVdsgsZtRHlVgvTtswkMpnZlpbfwNKFLXBqKpbHnbvGRrvSzfxJGKqchQ '
            target='_blank'>
            <FontAwesomeIcon icon={whatsappIcon} style={{ color: "#fff" }} />
          </a>
        </motion.li>

        <motion.li
          className='lg:text-[40px] text-[35px]'
          whileHover={{ scale: 1.3 }}>
          <a
            href='https://instagram.com/alphashifter?igshid=MzNlNGNkZWQ4Mg=='
            target='_blank'>
            <FontAwesomeIcon icon={instagramIcon} style={{ color: "#fff" }} />
          </a>
        </motion.li>
        <motion.li
          className='lg:text-[40px] text-[35px]'
          whileHover={{ scale: 1.3 }}>
          <a
            href='https://www.linkedin.com/in/s-b-manu-krishna-16722122a'
            target='_blank'>
            <FontAwesomeIcon icon={linkedinIcon} style={{ color: "#fff" }} />
          </a>
        </motion.li>
        <motion.li
          className='lg:text-[40px] text-[35px]'
          whileHover={{ scale: 1.3 }}>
          <a href='https://www.behance.net/sbmanukrishna' target='_blank'>
            <FontAwesomeIcon icon={behanceIcon} style={{ color: "#fff" }} />
          </a>
        </motion.li>
      </ul>
    </div>
  );
};

export default Landing;
