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
    id: 1,
    name: "Aarav",
    profile: aaravProfile,
    status: "2 hours ago",
    post: [postImage1, postImage2],
    description:
      "Just arrived in New York City! Excited to explore the sights, sounds, and energy of this amazing place. 🗽 #NYC #Travel",
    likes: 63,
    liked:false,

  },
  {
    id: 2,
    name: "Sneha",
    profile: snehaProfile,
    status: "1 day ago",
    post: postImage3,
    description:
      "Taking a moment to slow down, breathe, and focus on myself. 🌿✨ Self-care isn’t selfish – it’s necessary. 💕 #SelfCare #MeTime #Wellness",
    likes: 218,
    liked:false,
  },
  {
    id: 3,
    name: "Jana Jane",
    profile: janeProfile,
    status: "3 days ago",
    post: postImage4,
    description:
      "Taking a moment to slow down, breathe, and focus on myself. 🌿✨ Self-care isn’t selfish – it’s necessary. 💕 #SelfCare #MeTime #Wellness",
    likes: 582,
    liked:false,
  },
  {
    id: 4,
    name: "Robert Bend",
    profile: robertProfile,
    status: "12 minnutes ago",
    post: postImage5,
    description:
      "Taking a moment to slow down, breathe, and focus on myself. 🌿✨ Self-care isn’t selfish – it’s necessary. 💕 #SelfCare #MeTime #Wellness",
    likes: 19,
    liked:false,
  },
  {
    id: 5,
    name: "Riyona Crasta",
    profile: riyonaProfile,
    status: "5 hours ago",
    post: postImage6,
    description:
      "Taking a moment to slow down, breathe, and focus on myself. 🌿✨ Self-care isn’t selfish – it’s necessary. 💕 #SelfCare #MeTime #Wellness",
    likes: 82,
    liked:false,
  },
];


const FeedPage = () => {
  const [cards, setCards] = useState(cardData);

  const handleLike = (id) => {
    const updatedCards = cards.map((card) => {
      if (card.id === id) {
        card.liked = !card.liked;
        card.likes = card.liked ? card.likes + 1 : card.likes - 1;
      }
      return card;
    });
    setCards(updatedCards);
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
        {cardData.map((card) => {
          return (
            <Card
              className="w-full bg-[#F7EBFF] rounded-3xl flex flex-col justify-center"
              key={card.id}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-4">
                  <Image
                    src={card.profile}
                    alt={card.name}
                    width={50}
                    height={50}
                    className="rounded-full aspect-square object-cover"
                  />
                  <div>
                    <p>{card.name}</p>
                    <p className="text-sm text-gray-500 font-light mt-2">
                      {card.status}
                    </p>
                  </div>
                </CardTitle>
                <CardDescription>
                  {card.description.split(" ").map((word, index) =>
                    word.startsWith("#") ? (
                      <span key={index} className="text-blue-500">
                        {word}{" "}
                      </span>
                    ) : (
                      <span key={index}>{word} </span>
                    )
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent className="grid justify-items-center">
                <div className="w-full flex justify-center gap-x-5">
                  <Image
                    src={Array.isArray(card.post) ? card.post[0] : card.post}
                    alt={`${card.name}'s post`}
                    width={50}
                    height={50}
                    className="w-[60%] aspect-square object-cover rounded-[30px] xs:rounded-lg"
                  />

                  {card.id === 1 && card.post[1] && (
                    <Image
                      src={card.post[1]}
                      alt={`${card.name}'s additional post`}
                      width={50}
                      height={50}
                      className="w-[38%] aspect-square object-cover rounded-[30px] xs:rounded-lg"
                    />
                  )}
                </div>
              </CardContent>

              <CardFooter className="flex justify-between">
              <div className="flex items-center mt-4">
              {card.liked ? (
                <AiFillHeart
                  color="red"
                  size={24}
                  className="cursor-pointer"
                  onClick={() => handleLike(card.id)}
                />
              ) : (
                <AiOutlineHeart
                  size={24}
                  className="cursor-pointer"
                  onClick={() => handleLike(card.id)}
                />
              )}
              <p className="ml-2">{card.likes}</p>
            </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="rounded-[30px] bg-[#e3c8f5] "
                    >
                      <IoMdShareAlt size={36} />
                      <p>Share</p>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Share post</DialogTitle>
                      <DialogDescription>Page link</DialogDescription>
                    </DialogHeader>
                    <div className="flex items-center space-x-2">
                      <div className="grid flex-1 gap-2">
                        <Label htmlFor="link" className="sr-only">
                          Link
                        </Label>
                        <Input
                          id="link"
                          defaultValue="https://ui.shadcn.com/docs/installation"
                          readOnly
                        />
                      </div>
                      <Button type="submit" size="sm" className="px-3">
                        <span className="sr-only">Copy</span>
                        <Copy />
                      </Button>
                    </div>
                    <DialogFooter className="sm:justify-start">
                      <DialogClose asChild>
                        <Button type="button" variant="secondary">
                          Close
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default FeedPage;
