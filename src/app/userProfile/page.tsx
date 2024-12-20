"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import { HiArrowSmLeft, HiPencil } from "react-icons/hi";
import { useRouter } from "next/navigation";
import Link from "next/link";

const UserProfile = () => {
  const [profileImage, setProfileImage] = useState("/assets/profileImage.jpg");
  const [coverImage, setCoverImage] = useState("/assets/coverImage.jpg");
  const [bio, setBio] = useState(
    "Just someone who loves designing, sketching, and finding beauty in the little things 💕"
  );
  const [name, setName] = useState("Sakshi Agarwal");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const handleGoBackToUserProfile = () => {
    setIsEditModalOpen(false);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const postData = [
    {
      id: 1,
      image: "/assets/mypost1.jpg",
      postContent: "Design Meet",
      like: 67,
    },
    {
      id: 2,
      image: "/assets/mypost3.jpg",
      postContent: "Working on a B2B...",
      like: 65,
    },
    {
      id: 3,
      image: "/assets/mypost2.jpg",
      postContent: "Parachute ❤️",
      like: 65,
    },
  ];

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newName = formData.get("name") || name;
    const newBio = formData.get("bio") || bio;

    setName(newName);
    setBio(newBio);

    localStorage.setItem("profileImage", profileImage);
    localStorage.setItem("coverImage", coverImage);
    localStorage.setItem("name", newName);
    localStorage.setItem("bio", newBio);

    closeEditModal();
  };

  useEffect(() => {
    const savedProfileImage = localStorage.getItem("profileImage");
    const savedCoverImage = localStorage.getItem("coverImage");
    const savedBio = localStorage.getItem("bio");
    const savedName = localStorage.getItem("name");

    if (savedProfileImage) setProfileImage(savedProfileImage);
    if (savedCoverImage) setCoverImage(savedCoverImage);
    if (savedBio) setBio(savedBio);
    if (savedName) setName(savedName);
  }, []);

  const handleProfileImageChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setProfileImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCoverImageChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setCoverImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="dark:bg-gray-800 flex flex-wrap items-center justify-center relative">
      {!isEditModalOpen && (
        <>
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
                <Button
                  className="bg-transparent border-[2px] border-black rounded-[30px] text-black xl:w-[440px] hover:text-white"
                  onClick={openEditModal}
                >
                  Edit Profile
                </Button>
              </div>
            </div>
          </div>

          <div className="sm:w-[95%] xs:w-[90%]">
            <h2 className="text-3xl font-bold tracking-widest">{name}</h2>
            <p className="text-lg">{bio}</p>
          </div>
          <div className="sm:w-[95%] xs:w-[90%] mt-8">
            <h2 className="text-[24px] font-bold mb-5">My Posts</h2>
            <div className="grid grid-cols-2 gap-3 mb-20">
              {postData.map((posts) => (
                <div
                  key={posts.id}
                  className="mb-4 break-inside-avoid relative"
                >
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
              ))}
            </div>
          </div>
          <Link href="/createPost">
            <div className="w-[50px] rounded-full bg-black grid justify-center items-center h-[50px] bottom-4 right-4 fixed z-10">
              <Plus color="#ffffff" className="text-[24px] cursor-pointer" />
            </div>
          </Link>
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
                  className="object-contain xs:w-[800px] sm:w-[800px] xl:w-[300px] 2xl:w-[400px]"
                />
              </div>
            </div>
          )}
        </>
      )}

      {isEditModalOpen && (
        <>
          <div className="w-full bg-white transform duration-200 easy-in-out">
            <div className="w-full sm:h-[300px] xs:h-[200px] overflow-hidden lg:rounded-b-[60px] xs:rounded-b-[40px] sm:rounded-b-[30px]">
              <Image
                className="w-full h-full object-cover object-center"
                src={coverImage}
                alt="cover image"
                width={50}
                height={50}
              />
              <div className="absolute top-5 left-3 flex justify-center items-center">
                <HiArrowSmLeft
                  onClick={handleGoBackToUserProfile}
                  className=" text-white text-[40px] cursor-pointer"
                />
                <p className="ml-4 text-[30px] text-white xs:text-[22px]">
                  Edit Profile
                </p>
              </div>
              <label htmlFor="coverImageInput">
                <div className="cursor-pointer flex flex-col justify-center items-center w-[40px] h-[40px] rounded-full bg-[#F4F4F4] absolute bottom-[120px] right-8  xs:bottom-[125px]">
                  <HiPencil />
                </div>
              </label>
              <input
                type="file"
                id="coverImageInput"
                className="hidden"
                accept="image/*"
                onChange={handleCoverImageChange}
              />
            </div>
            <div className="flex justify-start px-5 -mt-14 relative">
              <div>
                <Image
                  className="h-36 w-36 bg-white p-2 rounded-full object-cover"
                  src={profileImage}
                  alt="profile image"
                  width={50}
                  height={50}
                />
              </div>
              <label htmlFor="profileImageInput">
                <div className="flex flex-col justify-center items-center w-[40px] h-[40px] rounded-full bg-[#F4F4F4] absolute bottom-2 left-[120px] cursor-pointer">
                  <HiPencil />
                </div>
              </label>
              <input
                type="file"
                id="profileImageInput"
                className="hidden"
                accept="image/*"
                onChange={handleProfileImageChange}
              />
            </div>
          </div>

          <form onSubmit={handleSaveChanges} className="w-[90%] mt-10 mb-10">
            <div className="mb-4">
              <label className="block text-base font-medium text-gray-500 mb-2 ">
                Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                className="border-b border-gray-300 focus:outline-none focus:border-black w-full p-2"
              />
            </div>

            <div className="mb-20">
              <label className="block text-base font-medium text-gray-500 mb-2">
                Bio
              </label>
              <textarea
                name="bio"
                defaultValue={bio}
                className="border-b border-gray-300 focus:outline-none focus:border-black w-full p-2"
              ></textarea>
            </div>
            <div className="flex justify-end gap-2">
              <Button type="submit" className=" w-full rounded-[30px]">
                SAVE
              </Button>
            </div>
          </form>
        </>
      )}
    </section>
  );
};

export default UserProfile;
