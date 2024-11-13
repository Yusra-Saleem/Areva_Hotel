'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar,  ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"


interface RoomType {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

const roomTypes = [
  {
    id: "deluxe",
    name: "Deluxe Room",
    price: 199,
    image: "/queen-room.png",
    description: "Spacious room with a king-size bed and city view.",
  },
  {
    id: "suite",
    name: "Executive Suite",
    price: 299,
    image: "/king-room.png",
    description: "Luxurious suite with separate living area and panoramic views.",
  },
  {
    id: "family",
    name: "Family Room",
    price: 249,
    image: "/hall-fame.png",
    description: "Perfect for families, with two queen beds and extra space.",
  },
]

export default function BookNowPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedRoom, setSelectedRoom] = useState<RoomType | null>(null);
  const [bookingDetails, setBookingDetails] = useState({
    checkIn: "",
    checkOut: "",
    adults: "2",
    children: "0",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookingDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setBookingDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoomSelect = (room: RoomType) =>{
    setSelectedRoom(room)
    setCurrentStep(2)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Booking submitted:", { ...bookingDetails, room: selectedRoom });
    setCurrentStep(3);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  }

  return (
    <div className="min-h-screen px-4 py-10 pb-28 bg-gradient-to-b from-background to-muted bg-gray-100">
     

      <main className="container pt-24 mx-auto ">
        <h1 className="mb-8 text-center text-4xl font-bold">Book Your Stay</h1>

        <div className="mb-8 flex justify-center">
          <ol className="flex items-center">
            {[1, 2, 3].map((step) => (
              <li key={step} className="flex items-center">
                <span
                  className={`flex h-8 w-8 bg-whte items-center justify-center rounded-full ${
                    currentStep >= step ? "bg-black/90 text-white" : "bg-white text-black"
                  }`}
                >
                  {step}
                </span>
                {step < 3 && <ChevronRight className="mx-2 h-4 w-4 text-muted-foreground" />}
              </li>
            ))}
          </ol>
        </div>

        <motion.div
          key={currentStep}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={fadeIn}
          transition={{ duration: 0.3 }}
        >
          {currentStep === 1 && (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {roomTypes.map((room) => (
                <Card key={room.id} className="overflow-hidden bg-white shadow-md hover:shadow-lg">
                  <Image
                    src={room.image}
                    alt={room.name}
                    width={300}
                    height={200}
                    className="h-48 w-full object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="mb-2 text-xl font-semibold">{room.name}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">{room.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold">${room.price}/night</span>
                      <Button onClick={() => handleRoomSelect(room)} className="px-6 hover:bg-black/60 hover:text-white border border-black duration-500">Select</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {currentStep === 2 && (
            <form onSubmit={handleSubmit} className="mx-auto max-w-lg  shadow-md hover:shadow-xl border border-black bg-white px-4 py-14 rounded-3xl space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="checkIn">Check-in Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
                    <Input
                      id="checkIn"
                      name="checkIn"
                      type="date"
                      required
                      className="pl-10"
                      value={bookingDetails.checkIn}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="checkOut">Check-out Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
                    <Input
                      id="checkOut"
                      name="checkOut"
                      type="date"
                      required
                      className="pl-10"
                      value={bookingDetails.checkOut}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="adults">Adults</Label>
                  <Select name="adults" value={bookingDetails.adults} onValueChange={(value) => handleSelectChange("adults", value)}>
                    <SelectTrigger id="adults">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white shadow-md border border-black">
                      {[1, 2, 3, 4].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="children">Children</Label>
                  <Select name="children" value={bookingDetails.children} onValueChange={(value) => handleSelectChange("children", value)} >
                    <SelectTrigger id="children">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent  className="bg-white shadow-md border border-black" >
                      {[0, 1, 2, 3].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" required />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the terms and conditions
                  </label>
                </div>
              </div>
              <Button type="submit"  className="px-6 mx-auto flex justify-center hover:bg-black/60 text-white border bg-gray-950 border-black duration-500">
                Confirm Booking
              </Button>
            </form>
          )}

          {currentStep === 3 && (
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="mb-6 inline-block rounded-full bg-green-100 p-3"
              >
                <svg
                  className="h-16 w-16 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </motion.div>
              <h2 className="mb-2 text-2xl font-bold">Booking Confirmed!</h2>
              <p className="mb-6 text-muted-foreground">
                Thank you for choosing Areva. We look forward to welcoming you.
              </p>
              <Button asChild  className="px-6 w-36 rounded-xl mx-auto flex justify-center hover:bg-black/60 text-white border bg-gray-950 border-black duration-500">
                <Link href="/">Return to Home</Link>
              </Button>
            </div>
          )}
        </motion.div>
      </main>

    
    </div>
  )
}