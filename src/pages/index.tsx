import Image from "next/image";
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
import LandingImage from "../../public/assets/images/landing.png";

const Landing = () => {
  const whatsappIcon: IconProp = faWhatsapp;
  const instagramIcon: IconProp = faInstagram;
  const linkedinIcon: IconProp = faLinkedin;
  const behanceIcon: IconProp = faBehance;
  return (
    <div className='flex flex-col items-start justify-end h-[95vh] '>
      <Image
        src={LandingImage}
        alt='Landing page'
        style={{
          objectFit: "cover",
          width: "100%",
        }}
        className='-z-20 relative'
      />
      <div className='flex flex-col items-start justify-end font-semibold text-[4rem] ml-28 absolute pb-[15vh]'>
        <p className='m-0'>I'M A </p>
        <Typewriter
          options={{
            strings: ["PHOTOGRAPHER", "VIDEOGRAPHER", "VIDEO EDITOR"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <p className='m-0 ml-28  font-normal tracking-[.5em] text-[30px] absolute pb-[11vh]'>
        alphashifter
      </p>
      <ul className='flex gap-4 text-xl ml-28 leading-loose	absolute pb-[4vh]'>
        <motion.li className='text-[40px]' whileHover={{ scale: 1.3 }}>
          <a href='#'>
            <FontAwesomeIcon icon={whatsappIcon} style={{ color: "#fff" }} />
          </a>
        </motion.li>

        <motion.li className='text-[40px]' whileHover={{ scale: 1.3 }}>
          <a href='#'>
            <FontAwesomeIcon icon={instagramIcon} style={{ color: "#fff" }} />
          </a>
        </motion.li>
        <motion.li className='text-[40px]' whileHover={{ scale: 1.3 }}>
          <a href='#'>
            <FontAwesomeIcon icon={linkedinIcon} style={{ color: "#fff" }} />
          </a>
        </motion.li>
        <motion.li className='text-[40px]' whileHover={{ scale: 1.3 }}>
          <a href='#'>
            <FontAwesomeIcon icon={behanceIcon} style={{ color: "#fff" }} />
          </a>
        </motion.li>
      </ul>
    </div>
  );
};

export default Landing;
