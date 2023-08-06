import React from "react";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import { motion as m, stagger } from "framer-motion";
import Image from "next/image";
import contactImg from "../../public/assets/images/Landing-mobile.png";

const contact = () => {
  return (
    <div className='mt-16 lg:flex lg:justify-between'>
      <div className='lg:flex lg:flex-1 items-center justify-center'>
        <Image
          src={contactImg}
          alt='About me'
          width={400}
          height={800}
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <m.form
        initial={{ x: "-50%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.25, type: "spring" }}
        className='flex flex-col lg:gap-16 gap-8 p-28 '>
        <div className='flex lg:gap-16 gap-12'>
          <div>
            <Label htmlFor='First Name'>First Name *</Label>
            <Input
              required
              type='text'
              className='bg-transparent border-b-2 border-gray-200 h-12 lg:w-[215px] w-[150px]'
            />
          </div>
          <div>
            <Label htmlFor=''>Last Name *</Label>
            <Input
              required
              type='text'
              className='bg-transparent border-b-2 border-gray-200 h-12 lg:w-[215px] w-[150px]'
            />
          </div>
        </div>
        <div className='flex lg:gap-16 gap-12'>
          <div>
            <Label htmlFor='Email'>Email *</Label>
            <Input
              type='email'
              required
              className='bg-transparent border-b-2 border-gray-200 h-12 lg:w-[215px] w-[150px]'
            />
          </div>
          <div>
            <Label htmlFor='Phone'>Phone</Label>
            <Input
              type='phone'
              className='bg-transparent border-b-2 border-gray-200 h-12 lg:w-[215px] w-[150px]'
            />
          </div>
        </div>
        <div>
          <Label htmlFor='Message'>Leave me a message...</Label>
          <Textarea
            placeholder='Type your message here.'
            className='bg-transparent border-b-2 mt-3 pt-2 pl-2 border-gray-200 lg:h-[100px] lg:w-[500px] w-[320px]'
          />
        </div>

        <div className='flex justify-evenly'>
          <Button
            type='submit'
            className='bg-white text-black h-11 w-32 hover:bg-black hover:text-white hover:border-white hover:border-2 border-2 rounded-xl'>
            Submit
          </Button>
          <Button
            type='reset'
            className='bg-white text-black h-11 w-32 hover:bg-black hover:text-white hover:border-white hover:border-2 border-2 rounded-xl'>
            Reset
          </Button>
        </div>
      </m.form>
    </div>
  );
};

export default contact;
