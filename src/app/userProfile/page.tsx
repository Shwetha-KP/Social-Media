import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const profileImage = "/assets/profileImage.jpg";
const coverImage = "/assets/coverImage.jpg";

const UserProfile = () => {
  return (
    <section className=" dark:bg-gray-800   flex flex-wrap items-center  justify-center  ">
      <div className=" w-full  bg-white  transform   duration-200 easy-in-out">
        <div className=" w-full sm:h-[300px] xs:h-[200px] overflow-hidden lg:rounded-b-[60px] xs:rounded-b-[40px] sm:rounded-b-[30px]">
          <Image
            className="w-full h-full object-cover object-center "
            src={coverImage}
            alt="cover image"
            width={50}
            height={50}
          />
        </div>
        <div className="flex justify-start px-5  -mt-14">
          <div>
            <Image
              className="h-36 w-36 bg-white p-2 rounded-full object-cover"
              src={profileImage}
              alt="cover image"
              width={50}
              height={50}
            />
          </div>
          <div className="flex flex-col justify-end sm:mb-4 xs:mb-6">
            <Button className="bg-transparent border-[2px] border-black rounded-[30px] text-black xl:w-[440px] hover:text-white">
              Edit Profile
            </Button>
          </div>
        </div>
      </div>

      <div className="sm:w-[95%] container">
        <h2 className="text-3xl font-bold tracking-widest">Sakshi Agarwal</h2>
        <p className="text-lg">
          Just someone who loves designing, sketching, and finding beauty in the
          little things 💕
        </p>
      </div>
    </section>
  );
};

export default UserProfile;
