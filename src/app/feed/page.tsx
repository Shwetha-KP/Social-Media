"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  MailruShareButton,
  PinterestShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";
import Image from "next/image";
// import { Heart } from "lucide-react";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";

const profileImage = "/assets/profileImage.jpg";
const aaravProfile = "/assets/aaravProfile.jpg";
const janeProfile = "/assets/image6.jpg";
const snehaProfile = "/assets/snehaProfile.jpg";
const robertProfile = "/assets/robertProfile.jpg";
const riyonaProfile = "/assets/image1.jpg";
const postImage1 = "/assets/postImage1.jpg";
const postImage2 = "/assets/postImage2.jpg";
const postImage3 = "/assets/postImage3.jpg";
const postImage4 = "/assets/image4.jpg";
const postImage5 = "/assets/image7.jpg";
const postImage6 = "/assets/image9.jpg";
const cardData = [
  {
    id: "1",
    name: "Aarav",
    profile: aaravProfile,
    status: "2 hours ago",
    post:{postImage1, postImage2},
    description:"Just arrived in New York City! Excited to explore the sights, sounds, and energy of this amazing place. 🗽 #NYC #Travel",
    likes:"63",
  },
  {
    id: "2",
    name: "Sneha",
    profile: snehaProfile,
    status: "1 day ago",
    post:postImage3,
    description:"Taking a moment to slow down, breathe, and focus on myself. 🌿✨ Self-care isn’t selfish – it’s necessary. 💕 #SelfCare #MeTime #Wellness",
    likes:"218",
  },
  {
    id: "3",
    name: "Jana Jane",
    profile: janeProfile,
    status: "3 days ago",
    post:postImage4,
    description:"Taking a moment to slow down, breathe, and focus on myself. 🌿✨ Self-care isn’t selfish – it’s necessary. 💕 #SelfCare #MeTime #Wellness",
    likes:"582",
  },
  {
    id: "4",
    name: "Robert Bend",
    profile: robertProfile,
    status: "12 minnutes ago",
    post:postImage5,
    description:"Taking a moment to slow down, breathe, and focus on myself. 🌿✨ Self-care isn’t selfish – it’s necessary. 💕 #SelfCare #MeTime #Wellness",
    likes:"19",
  },
  {
    id: "5",
    name: "Riyona Crasta",
    profile: riyonaProfile,
    status: "5 hours ago",
    post:postImage6,
    description:"Taking a moment to slow down, breathe, and focus on myself. 🌿✨ Self-care isn’t selfish – it’s necessary. 💕 #SelfCare #MeTime #Wellness",
    likes:"82",
  },
];

const FeedPage = () => {
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(63);
  const handleLike = () => {
    if (!like) {
      setLike(true);
      setLikeCount(likeCount + 1);
    } else {
      setLike(false);
      setLikeCount(likeCount - 1);
    }
  };
  return (
    <section className="w-full flex flex-col justify-center items-center mt-[50px]">
      <div className="w-[80%] flex flex-col justify-center  gap-y-5">
        <div className="w-full flex justify-start items-center gap-x-5">
          <Image
            src={profileImage}
            alt="Profile Image"
            width={200}
            height={200}
            className="rounded-full aspect-square object-cover "
          />
          <div className="w-[60%] flex flex-col justify-center ">
            <p className="text-lg text-gray-500">Welcome Back</p>
            <p className="text-2xl  font-bold">Sakshi Agarwal</p>
          </div>
        </div>
        <h1 className="font-bold text-2xl mt-12">Feeds</h1>
{cardData.map((card)=>
)}
        <Card className="w-full bg-[#F7EBFF] rounded-3xl flex flex-col justify-center ">
          <CardHeader>
            <CardTitle className="flex items-center gap-4">
              <Image
                src={aaravProfile}
                alt="Aarav profile image"
                width={50}
                height={50}
                className="rounded-full aspect-square object-cover"
              />
              <div>
                <p>Aarav</p>
                <p className="text-sm text-gray-500 font-light">2 hours ago</p>
              </div>
            </CardTitle>
            <CardDescription>
              Just arrived in New York City! Excited to explore the sights,
              sounds, and energy of this amazing place. 🗽{" "}
              <span className="text-blue-600">#NYC #Travel</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="grid  justify-items-center  ">
            <div className="w-full flex justify-between ">
              <Image
                src={postImage1}
                alt=""
                width={50}
                height={50}
                className="w-[60%]  aspect-square object-cover rounded-[30px] xs:rounded-lg"
              />
              <Image
                src={postImage2}
                alt="Aarav profile image"
                width={50}
                height={50}
                className="w-[38%] aspect-square object-cover rounded-[30px] xs:rounded-lg"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex items-center gap-x-2">
              {like ? (
                <AiFillHeart
                  color="red"
                  size={36}
                  onClick={handleLike}
                  className="cursor-pointer"
                />
              ) : (
                <AiOutlineHeart
                  size={36}
                  onClick={handleLike}
                  className="cursor-pointer"
                />
              )}
              <p>{likeCount}</p>
            </div>
            <div className="flex items-center justify-center w-[10%] border-2 border-black rounded-[30px] cursor-pointer">
              <IoMdShareAlt size={36} />
              <p>Share</p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default FeedPage;
