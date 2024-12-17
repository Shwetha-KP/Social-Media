"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import { HiArrowSmLeft } from "react-icons/hi";
import { useRouter } from "next/navigation";

const profileImage = "/assets/profileImage.jpg";
const coverImage = "/assets/coverImage.jpg";
const myPostImage1 = "/assets/mypost1.jpg";
const myPostImage2 = "/assets/mypost2.jpg";
const myPostImage3 = "/assets/mypost3.jpg";

const UserProfile = () => {
  const postData = [
    {
      id: 1,
      image: myPostImage1,
      postContent: "Design Meet",
      like: 67,
    },
    {
      id: 2,
      image: myPostImage3,
      postContent: "Working on a B2B...",
      like: 65,
    },
    {
      id: 3,
      image: myPostImage2,
      postContent: "Parachute ❤️",
      like: 65,
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section className="dark:bg-gray-800 flex flex-wrap items-center justify-center relative">
      <div className="w-full bg-white transform duration-200 easy-in-out">
        <div className="w-full sm:h-[300px] xs:h-[200px] overflow-hidden lg:rounded-b-[60px] xs:rounded-b-[40px] sm:rounded-b-[30px]">
          <Image
            className="w-full h-full object-cover object-center"
            src={coverImage}
            alt="cover image"
            width={50}
            height={50}
            onClick={() => handleImageClick(coverImage)}
          />
          <HiArrowSmLeft
            onClick={handleGoBack}
            className="absolute top-5 left-3 text-white text-[40px] cursor-pointer"
          />
        </div>
        <div className="flex justify-start px-5 -mt-14">
          <div>
            <Image
              className="h-36 w-36 bg-white p-2 rounded-full object-cover"
              src={profileImage}
              alt="profile image"
              width={50}
              height={50}
              onClick={() => handleImageClick(profileImage)}
            />
          </div>
          <div className="flex flex-col justify-end sm:mb-4 xs:mb-6">
            <Button className="bg-transparent border-[2px] border-black rounded-[30px] text-black xl:w-[440px] hover:text-white">
              Edit Profile
            </Button>
          </div>
        </div>
      </div>

      <div className="sm:w-[95%] xs:w-[90%]">
        <h2 className="text-3xl font-bold tracking-widest">Sakshi Agarwal</h2>
        <p className="text-lg">
          Just someone who loves designing, sketching, and finding beauty in the
          little things 💕
        </p>
      </div>

      <div className="sm:w-[95%] xs:w-[90%] mt-8">
        <h2 className="text-[24px] font-bold mb-5">My Posts</h2>
        <div className="grid grid-cols-2 gap-3 mb-20">
          {postData.map((posts) => {
            return (
              <div key={posts.id} className="mb-4 break-inside-avoid relative">
                <div
                  className="relative w-full xl:w-[70%]"
                  onClick={() => handleImageClick(posts.image)}
                >
                  <Image
                    src={posts.image}
                    alt="images"
                    width={500}
                    height={500}
                    className="w-full h-auto object-contain rounded-lg bg-black z-10 backdrop-blur-md"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg z-0"></div>
                  <p className="absolute bottom-10 left-6 xs:left-3 text-white z-20">
                    {posts.postContent}
                  </p>
                  <div className="flex items-center gap-x-1 absolute bottom-5 left-6 xs:left-3 text-gray-300">
                    <FaHeart />
                    <p>{posts.like}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-[50px] rounded-full bg-black grid justify-center items-center h-[50px] bottom-4 right-4 fixed z-10">
        <Plus color="#ffffff" className="text-[24px] cursor-pointer" />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-20">
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-white text-3xl"
            >
              &times;
            </button>
            <Image
              src={selectedImage}
              alt="Full screen image"
              width={800}
              height={800}
              className="object-contain xs:w-[800px] sm:w-[800px] xl:w-[400px]"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default UserProfile;
