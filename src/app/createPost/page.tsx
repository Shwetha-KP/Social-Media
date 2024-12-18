"use client";
import React from "react";
import { HiArrowSmLeft } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { FaFolderOpen } from "react-icons/fa";
import { IoCamera } from "react-icons/io5";
import { IoMdPhotos } from "react-icons/io";
import { RiVideoDownloadFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";

const CreatePost = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  return (
    <section className="w-full flex flex-col  items-center  ">
      <div className="w-[90%] grid item-center">
        <div className="w-full flex items-center gap-x-2 h-20 ">
          <HiArrowSmLeft
            onClick={handleGoBack}
            className="text-[40px] cursor-pointer"
          />
          <p>New Post</p>
        </div>
        <div className="w-full flex flex-col gap-y-3">
          <textarea
            placeholder="What’s on your mind?"
            className="border bg-[#D9D9D99C] focus:outline-none focus:border-black w-full h-48 p-4 rounded-xl align-top"
          ></textarea>
          <div className="w-full">
            <div className="w-full flex items-center gap-x-2 lg:flex xs:hidden sm:hidden">
              <FaFolderOpen className="text-red-600" />
              <p>Choose the file</p>
            </div>
            <div className="w-full flex items-center gap-x-2 lg:hidden">
              <IoMdPhotos className="text-green-600" />
              <p>Photos</p>
            </div>
            <div className="w-full flex items-center gap-x-2 lg:hidden">
              <RiVideoDownloadFill className="text-red-600" />
              <p>Video</p>
            </div>
            <div className="w-full flex items-center gap-x-2">
              <IoCamera className="text-blue-600" />
              <p>Camera</p>
            </div>
          </div>
        </div>
      </div>
      <Button className="w-[90%] fixed rounded-lg bottom-4 ">CREATE</Button>
    </section>
  );
};

export default CreatePost;
