"use client"
import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Wifi, Coffee, Tv, Bath } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const roomTypes = [
  {
    name: "Deluxe Suite",
    description: "Spacious and luxurious suite with a separate living area and stunning views.",
    price: 299,
    images: [
      "/room/room-1/bed.png",
      "/room/room-1/launch.png",
      "/room/room-1/bathRoom.png",
    ],
    amenities: ["King-size bed", "Balcony", "Mini-bar", "Room service", "coffee maker"],
  },
  {
    name: "Ocean View Room",
    description: "Breathtaking ocean views from your private balcony in this comfortable room.",
    price: 199,
    images: [
      "/room/room-2/bed.png",
      "/room/room-2/balcony.png",
      "/room/room-2/desk.png",
      "/room/room-2/bathRoom.png",
    ],
    amenities: ["Queen-size bed", "Ocean view", "Work desk", "Coffee maker ", "luxuary Bath Room"],
  },
  {
    name: "Family Suite",
    description: "Perfect for families, this suite offers ample space and separate bedrooms for privacy.",
    price: 349,
    images: [
      "/room/room-3/bed.png",
      "/room/room-3/balcony.png",
      "/room/room-3/child.png",
      "/room/room-3/kitchen.png",
      "/room/room-3/bathRoom.png",
    ],
    amenities: ["Multiple bedrooms", "Kitchenette", "Living area", "Children's amenities"],
  },
]

interface Room {
  name: string;
  description: string;
  price: number;
  images: string[];
  amenities: string[];
}

function RoomCard({ room }: { room: Room }) {
  

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % room.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + room.images.length) % room.images.length)
  }

  return (
    <Card className="overflow-hidden bg-white  shadow-md hover:shadow-lg">
      <div className="relative h-64 w-full">
        <Image
          src={room.images[currentImageIndex]}
          alt={`${room.name} - Image ${currentImageIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-500"
        />
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <Button variant="outline" size="icon" onClick={prevImage} className="rounded-full bg-white/80">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextImage} className="rounded-full bg-white/80">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-2xl font-semibold">{room.name}</h3>
          <span className="text-xl font-bold">${room.price}/night</span>
        </div>
        <p className="mb-4 text-muted-foreground">{room.description}</p>
        <div className="mb-4 flex flex-wrap gap-2 justify-center">
          {room.amenities.map((amenity, index) => (
            <span key={index} className="rounded-full bg-muted px-3 py-1 text-sm">
              {amenity}
            </span>
          ))}
        </div>
        <Button className="w-full">Book Now</Button>
      </CardContent>
    </Card>
  )
}

export default function RoomsPage() {


  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted py-10 px-4 bg-gray-100">

      <main className="container mx-auto pt-24">
        <h1 className="mb-8 text-center text-4xl font-bold">Our Rooms & Suites</h1>
        
        <Tabs defaultValue="all" className="mb-12 ">
          <TabsList className="grid w-full mb-16  grid-cols-2 gap-3 sm:grid-cols-4">
            <TabsTrigger value="all" className="hover:text-white hover:bg-black/70 shadow-sm bg-white duration-500">All Rooms</TabsTrigger>
            <TabsTrigger value="suites" className="hover:text-white hover:bg-black/70 shadow-sm bg-white duration-500">Suites</TabsTrigger>
            <TabsTrigger value="ocean-view" className="hover:text-white hover:bg-black/70 shadow-sm bg-white duration-500">Ocean View</TabsTrigger>
            <TabsTrigger value="family" className="hover:text-white hover:bg-black/70 shadow-sm bg-white duration-500">Family Rooms</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {roomTypes.map((room, index) => (
                <RoomCard key={index} room={room} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="suites" className="mt-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
              {roomTypes.filter(room => room.name.includes("Suite")).map((room, index) => (
                <RoomCard key={index} room={room} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="ocean-view" className="mt-6 ">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {roomTypes.filter(room => room.name.includes("Ocean")).map((room, index) => (
                <RoomCard key={index} room={room} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="family" className="mt-6 shadow-md hover:shadow-lg">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {roomTypes.filter(room => room.name.includes("Family")).map((room, index) => (
                <RoomCard key={index} room={room} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <section className="mb-12 rounded-lg bg-muted p-8">
          <h2 className="mb-4 text-2xl font-semibold">Room Amenities</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <div className="flex items-center gap-2">
              <Wifi className="h-5 w-5 text-primary" />
              <span>Free Wi-Fi</span>
            </div>
            <div className="flex items-center gap-2">
              <Coffee className="h-5 w-5 text-primary" />
              <span>Coffee Maker</span>
            </div>
            <div className="flex items-center gap-2">
              <Tv className="h-5 w-5 text-primary" />
              <span>Flat-screen TV</span>
            </div>
            <div className="flex items-center gap-2 ">
              <Bath className="h-5 w-5 text-primary" />
              <span>Private Bathroom</span>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Special Offers</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="overflow-hidden  bg-white  shadow-md hover:shadow-lg">
              <div className="relative h-48">
                <Image
                  src="/room/summer-bed.png"
                  alt="Summer Getaway"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 p-6 text-white">
                  <h3 className="mb-2 text-3xl font-bold">Summer Getaway</h3>
                  <p>Enjoy 20% off on stays of 3 nights or more</p>
                </div>
              </div>
              <CardContent className="p-4">
                <Button variant="outline"className="w-full  text-white hover:text-white bg-black/80 hover:bg-black/70 duration-500 ">Learn More</Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden  bg-white  shadow-md hover:shadow-lg">
              <div className="relative h-48">
                <Image
                  src="/room/couple-bed.png"
                  alt="Romantic Package"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 p-6 text-white">
                  <h3 className="mb-2 text-3xl font-bold">Romantic Package</h3>
                  <p>Champagne, chocolates, and a couples massage included</p>
                </div>
              </div>
              <CardContent className="p-4">
                <Button variant="outline" className="w-full  text-white hover:text-white bg-black/80 hover:bg-black/70 duration-500 ">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

     
    </div>
  )
}
