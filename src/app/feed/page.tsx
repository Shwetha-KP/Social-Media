"use client";
import React, { useState } from "react";
import { ShareSocial } from "react-share-social";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";


const aaravProfile = "/assets/aaravProfile.jpg";
const snehaProfile = "/assets/snehaProfile.jpg";
const janeProfile = "/assets/image6.jpg";
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
    liked: false,
    background: "#F7EBFF",
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
    liked: false,
    background: "#edf48d",
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
    liked: false,
    background: "#9aeb8f",
  },
  {
    id: 4,
    name: "Robert Bend",
    profile: robertProfile,
    status: "12 minutes ago",
    post: postImage5,
    description:
      "Taking a moment to slow down, breathe, and focus on myself. 🌿✨ Self-care isn’t selfish – it’s necessary. 💕 #SelfCare #MeTime #Wellness",
    likes: 19,
    liked: false,
    background: "#d1eaf6",
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
    liked: false,
    background: "#f6d1f2",
  },
];

const FeedPage = () => {
  const [cards, setCards] = useState(cardData);
    const [profileImage, setProfileImage] = useState("/assets/profileImage.jpg");
    const [name, setName] = useState("Sakshi Agarwal");
  
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
    <section className="w-full flex flex-col justify-center items-center mt-[50px] mb-[50px]">
      <div className="w-[80%] flex flex-col justify-center gap-y-5 relative">
        <div className="w-full flex justify-start items-center gap-x-5">
          <Image
            src={profileImage}
            alt="Profile Image"
            width={200}
            height={200}
            className="sm:w-[200px] sm:h-[200px] xs:w-[100px] rounded-full aspect-square object-cover"
          />
          <div className="w-[60%] flex flex-col justify-center">
            <p className="text-lg text-gray-500 xs:text-sm">Welcome Back</p>
            <Link
              href="/userProfile"
              className="text-2xl font-bold cursor-pointer xs:text-sm"
            >
              {name}
            </Link>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 justify-end items-center">
          <h1 className="font-bold text-2xl mt-12">Feeds</h1>
          <div className="w-full flex justify-end relative">
            <Button className="transform transition-transform duration-300 hover:scale-105 bg-gradient-to-r from-gray-200  to-gray-400  hover:font-bold text-black absolute top-0 right-[140px] rounded-[20px] cursor-pointer">
              Recent
            </Button>
            <Button className="transform transition-transform duration-300 hover:scale-105 bg-gray-500 text-black absolute top-0 right-[70px] rounded-[20px] font-bold cursor-pointer hover:text-white  ">
              Friends
            </Button>
            <Button className="transform transition-transform duration-300 hover:scale-105 bg-gradient-to-r from-gray-400  to-gray-200 hover:font-bold  text-black absolute top-0 right-0 rounded-[20px] cursor-pointer">
              Popular
            </Button>
          </div>
        </div>
        {cards.map((card) => {
          return (
            <Card
              className="w-full rounded-3xl flex flex-col justify-center"
              style={{ backgroundColor: card.background }}
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
                <CardDescription className="text-black text-lg">
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

              <CardFooter className="flex justify-between items-center">
                <div className="flex items-center ">
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
                  <DialogContent className="sm:max-w-md xs:w-[80%] flex flex-col justify-center">
                    <DialogHeader>
                      <DialogTitle>Share post</DialogTitle>
                      <ShareSocial
                        url={`https://www.thealteroffice.com/post/${card.id}`}
                        socialTypes={[
                          "facebook",
                          "twitter",
                          "whatsapp",
                          "reddit",
                          "email",
                          "telegram",
                        ]}
                        style={{ backgroundColor: "white" }}
                      />
                    </DialogHeader>

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
        <div className="w-[50px] rounded-full bg-black grid justify-center items-center h-[50px]  bottom-4 right-4 fixed z-10">
          <Plus color="#ffffff" className="text-[24px] cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default FeedPage;
