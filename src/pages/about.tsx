import Image from "next/image";
import { motion as m } from "framer-motion";
import LightroomIcon from "../../public/assets/svg/icons8-adobe-lightroom-96.svg";
import PhotoshopIcon from "../../public/assets/svg/icons8-adobe-photoshop-96.svg";
import IllustratorIcon from "../../public/assets/svg/icons8-adobe-illustrator-96.svg";
import DaVinciIcon from "../../public/assets/svg/icons8-davinci-resolve-96.svg";
import PremiereIcon from "../../public/assets/svg/icons8-adobe-premiere-pro-96.svg";
import AfterEffectsIcon from "../../public/assets/svg/icons8-adobe-after-effects-96.svg";
import ImageUrl from "../../public/assets/images/portrait.jpg";
import { useState } from "react";

const About = () => {
  const hiddenMaskImg = `linear-gradient(to left, rgba(0,0,0,0) 670px, rgba(0,0,0,1) 335px)`;
  const visibleMaskImg = `linear-gradient(to left, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px)`;

  const hiddenMaskText = `linear-gradient(to bottom, rgba(0,0,0,0) 670px, rgba(0,0,0,1) 335px) `;
  const visibleMaskText = `linear-gradient(to bottom, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px)`;

  const [isLoaded, setIsLoaded] = useState(false);

  const description =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias exercitationem quas quaerat nihil a voluptatem culpa quis accusantium sunt sequi impedit similique veniam nesciunt eveniet, incidunt error nobis ducimus vero?";

  return (
    <div className='mt-1 p-5'>
      <div className='mt-12 shadow-[10px_20px_50px_7px_rgba(255,255,255,0.3)] rounded-[20px] m-4'>
        <m.div
          initial={false}
          animate={
            isLoaded
              ? {
                  WebkitMaskImage: visibleMaskImg,
                  maskImage: visibleMaskImg,
                }
              : {
                  WebkitMaskImage: hiddenMaskImg,
                  maskImage: hiddenMaskImg,
                }
          }
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className='flex gap-16 justify-around items-center border-t-[1px] border-l-[1px] rounded-[20px] relative'>
          <m.div
            initial={false}
            animate={
              isLoaded
                ? { WebkitMaskImage: visibleMaskImg, maskImage: visibleMaskImg }
                : { WebkitMaskImage: hiddenMaskImg, maskImage: hiddenMaskImg }
            }
            transition={{ duration: 1, delay: 0.15 }}
            viewport={{ once: true }}
            className='mt-28 mr-16 mb-12 overflow-hidden h-[480px]'>
            <Image
              src={ImageUrl}
              alt='About me'
              width={500}
              height={500}
              onLoad={() => setIsLoaded(true)}
            />
          </m.div>
          <div className=' flex flex-col text-left w-[700px] text-[20px] gap-12'>
            <m.div
              initial={false}
              animate={
                isLoaded
                  ? {
                      WebkitMaskImage: visibleMaskText,
                      maskImage: visibleMaskText,
                    }
                  : {
                      WebkitMaskImage: hiddenMaskText,
                      maskImage: hiddenMaskText,
                    }
              }
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className='mt-12'>
              {description}
            </m.div>
            <m.hr
              initial={false}
              animate={
                isLoaded
                  ? {
                      WebkitMaskImage: visibleMaskText,
                      maskImage: visibleMaskText,
                    }
                  : {
                      WebkitMaskImage: hiddenMaskText,
                      maskImage: hiddenMaskText,
                    }
              }
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className='bg-white'
            />
            <div className='flex gap-8'>
              <div className='flex flex-col gap-8'>
                <m.h3
                  initial={false}
                  animate={
                    isLoaded
                      ? {
                          WebkitMaskImage: visibleMaskText,
                          maskImage: visibleMaskText,
                        }
                      : {
                          WebkitMaskImage: hiddenMaskText,
                          maskImage: hiddenMaskText,
                        }
                  }
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className='uppercase overflow-hidden'>
                  software skills
                </m.h3>
                <div className='flex justify-end gap-12 text-[18px]'>
                  <ul className='list-none'>
                    <li>
                      <m.div
                        initial={false}
                        animate={
                          isLoaded
                            ? {
                                WebkitMaskImage: visibleMaskText,
                                maskImage: visibleMaskText,
                              }
                            : {
                                WebkitMaskImage: hiddenMaskText,
                                maskImage: hiddenMaskText,
                              }
                        }
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className='flex gap-6 mt-4'>
                        <Image
                          width={50}
                          height={50}
                          src={LightroomIcon}
                          className='bg-white'
                          alt='Lightroom icon'
                        />
                        Adobe Lightroom
                      </m.div>
                    </li>
                    <li>
                      <m.div
                        initial={false}
                        animate={
                          isLoaded
                            ? {
                                WebkitMaskImage: visibleMaskText,
                                maskImage: visibleMaskText,
                              }
                            : {
                                WebkitMaskImage: hiddenMaskText,
                                maskImage: hiddenMaskText,
                              }
                        }
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className='flex gap-6 mt-4'>
                        <Image
                          width={50}
                          height={50}
                          src={PhotoshopIcon}
                          alt='Photoshop icon'
                          className='bg-white rounded-lg'
                        />
                        Adobe Photoshop
                      </m.div>
                    </li>
                    <li>
                      <m.div
                        initial={false}
                        animate={
                          isLoaded
                            ? {
                                WebkitMaskImage: visibleMaskText,
                                maskImage: visibleMaskText,
                              }
                            : {
                                WebkitMaskImage: hiddenMaskText,
                                maskImage: hiddenMaskText,
                              }
                        }
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className='flex gap-6 mt-4'>
                        <Image
                          width={50}
                          height={50}
                          src={IllustratorIcon}
                          alt='Illustrator icon'
                          className='bg-white rounded-lg'
                        />
                        Adobe Illustrator
                      </m.div>
                    </li>
                  </ul>
                  <ul className='list-none'>
                    <li>
                      <m.div
                        initial={false}
                        animate={
                          isLoaded
                            ? {
                                WebkitMaskImage: visibleMaskText,
                                maskImage: visibleMaskText,
                              }
                            : {
                                WebkitMaskImage: hiddenMaskText,
                                maskImage: hiddenMaskText,
                              }
                        }
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className='flex gap-6 mt-4'>
                        <Image
                          width={50}
                          height={50}
                          src={DaVinciIcon}
                          alt='DaVinci icon'
                          className='bg-white rounded-lg'
                        />
                        Da Vinci Resolve
                      </m.div>
                    </li>
                    <li>
                      <m.div
                        initial={false}
                        animate={
                          isLoaded
                            ? {
                                WebkitMaskImage: visibleMaskText,
                                maskImage: visibleMaskText,
                              }
                            : {
                                WebkitMaskImage: hiddenMaskText,
                                maskImage: hiddenMaskText,
                              }
                        }
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className='flex gap-6 mt-4'>
                        <Image
                          width={50}
                          height={50}
                          src={PremiereIcon}
                          alt='Premier Pro icon'
                          className='bg-white rounded-lg'
                        />
                        Premier Pro
                      </m.div>
                    </li>
                    <li>
                      <m.div
                        initial={false}
                        animate={
                          isLoaded
                            ? {
                                WebkitMaskImage: visibleMaskText,
                                maskImage: visibleMaskText,
                              }
                            : {
                                WebkitMaskImage: hiddenMaskText,
                                maskImage: hiddenMaskText,
                              }
                        }
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className='flex gap-6 mt-4'>
                        <Image
                          width={50}
                          height={50}
                          src={AfterEffectsIcon}
                          alt='After Effects icon'
                          className='bg-white rounded-lg'
                        />
                        After Effects
                      </m.div>
                    </li>
                  </ul>
                </div>
              </div>
              <m.div
                initial={false}
                animate={
                  isLoaded
                    ? {
                        WebkitMaskImage: visibleMaskText,
                        maskImage: visibleMaskText,
                      }
                    : {
                        WebkitMaskImage: hiddenMaskText,
                        maskImage: hiddenMaskText,
                      }
                }
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className='w-[1px] bg-white'></m.div>
              <div className='flex flex-col gap-8'>
                <m.h3
                  initial={false}
                  animate={
                    isLoaded
                      ? {
                          WebkitMaskImage: visibleMaskText,
                          maskImage: visibleMaskText,
                        }
                      : {
                          WebkitMaskImage: hiddenMaskText,
                          maskImage: hiddenMaskText,
                        }
                  }
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className='uppercase'>
                  soft skills
                </m.h3>
                <div className='flex justify-end text-[18px]'>
                  <ul className='list-none'>
                    <m.li
                      initial={false}
                      animate={
                        isLoaded
                          ? {
                              WebkitMaskImage: visibleMaskText,
                              maskImage: visibleMaskText,
                            }
                          : {
                              WebkitMaskImage: hiddenMaskText,
                              maskImage: hiddenMaskText,
                            }
                      }
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                      className='mt-4'>
                      Creativity
                    </m.li>
                    <m.li
                      initial={false}
                      animate={
                        isLoaded
                          ? {
                              WebkitMaskImage: visibleMaskText,
                              maskImage: visibleMaskText,
                            }
                          : {
                              WebkitMaskImage: hiddenMaskText,
                              maskImage: hiddenMaskText,
                            }
                      }
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                      className='mt-4'>
                      Team Work
                    </m.li>
                    <m.li
                      initial={false}
                      animate={
                        isLoaded
                          ? {
                              WebkitMaskImage: visibleMaskText,
                              maskImage: visibleMaskText,
                            }
                          : {
                              WebkitMaskImage: hiddenMaskText,
                              maskImage: hiddenMaskText,
                            }
                      }
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                      className='mt-4'>
                      Time Management
                    </m.li>
                    <m.li
                      initial={false}
                      animate={
                        isLoaded
                          ? {
                              WebkitMaskImage: visibleMaskText,
                              maskImage: visibleMaskText,
                            }
                          : {
                              WebkitMaskImage: hiddenMaskText,
                              maskImage: hiddenMaskText,
                            }
                      }
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                      className='mt-4'>
                      Adaptability
                    </m.li>
                  </ul>
                </div>
              </div>
            </div>
            <m.hr
              initial={false}
              animate={
                isLoaded
                  ? {
                      WebkitMaskImage: visibleMaskText,
                      maskImage: visibleMaskText,
                    }
                  : {
                      WebkitMaskImage: hiddenMaskText,
                      maskImage: hiddenMaskText,
                    }
              }
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className='bg-white'></m.hr>
            <div className='flex justify-around mb-5'>
              <div className='flex flex-col gap8'>
                <m.h3
                  initial={false}
                  animate={
                    isLoaded
                      ? {
                          WebkitMaskImage: visibleMaskText,
                          maskImage: visibleMaskText,
                        }
                      : {
                          WebkitMaskImage: hiddenMaskText,
                          maskImage: hiddenMaskText,
                        }
                  }
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className='uppercase'>
                  Education
                </m.h3>
                <div className='flex justify-start text-[18px]'>
                  <ul className='list-none'>
                    <m.li
                      initial={false}
                      animate={
                        isLoaded
                          ? {
                              WebkitMaskImage: visibleMaskText,
                              maskImage: visibleMaskText,
                            }
                          : {
                              WebkitMaskImage: hiddenMaskText,
                              maskImage: hiddenMaskText,
                            }
                      }
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                      className='mt-4'>
                      Creativity
                    </m.li>
                    <m.li
                      initial={false}
                      animate={
                        isLoaded
                          ? {
                              WebkitMaskImage: visibleMaskText,
                              maskImage: visibleMaskText,
                            }
                          : {
                              WebkitMaskImage: hiddenMaskText,
                              maskImage: hiddenMaskText,
                            }
                      }
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                      className='mt-4'>
                      Team Work
                    </m.li>
                  </ul>
                </div>
              </div>
              <m.div
                initial={false}
                animate={
                  isLoaded
                    ? {
                        WebkitMaskImage: visibleMaskText,
                        maskImage: visibleMaskText,
                      }
                    : {
                        WebkitMaskImage: hiddenMaskText,
                        maskImage: hiddenMaskText,
                      }
                }
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className='w-[1px] bg-white'></m.div>
              <div className='flex flex-col gap8'>
                <m.h3
                  initial={false}
                  animate={
                    isLoaded
                      ? {
                          WebkitMaskImage: visibleMaskText,
                          maskImage: visibleMaskText,
                        }
                      : {
                          WebkitMaskImage: hiddenMaskText,
                          maskImage: hiddenMaskText,
                        }
                  }
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className='uppercase'>
                  Experience
                </m.h3>
                <div className='flex justify-start text-[18px]'>
                  <ul className='list-none'>
                    <m.li
                      initial={false}
                      animate={
                        isLoaded
                          ? {
                              WebkitMaskImage: visibleMaskText,
                              maskImage: visibleMaskText,
                            }
                          : {
                              WebkitMaskImage: hiddenMaskText,
                              maskImage: hiddenMaskText,
                            }
                      }
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                      className='mt-4'>
                      CET on Strike
                    </m.li>
                    <m.li
                      initial={false}
                      animate={
                        isLoaded
                          ? {
                              WebkitMaskImage: visibleMaskText,
                              maskImage: visibleMaskText,
                            }
                          : {
                              WebkitMaskImage: hiddenMaskText,
                              maskImage: hiddenMaskText,
                            }
                      }
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                      className='mt-4'>
                      2021 DHWANI
                    </m.li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </m.div>
      </div>
    </div>
  );
};

export default About;
