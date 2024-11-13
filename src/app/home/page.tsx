
import Image from "next/image"



import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface RoomCardProps {
  title: string
  price: number
  image: string
  rating: number
  specs: string[]
}

function RoomCard({ title, price, image, rating, specs }: RoomCardProps) {
  return (
    <Card className="overflow-hidden shadow-md hover:shadow-xl " data-aos="fade-up">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{title}</h3>
          <div className="flex">
            {[...Array(rating)].map((_, i) => (
              <span key={i} className="text-primary">★</span>
            ))}
          </div>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {specs.map((spec, i) => (
            <span key={i} className="text-sm text-muted-foreground">
              {spec}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold">${price}</span>
          <Button variant="outline" size="sm" className="hover:bg-black/60 hover:text-white hover:border hover:border-black duration-500">View Details</Button>
        </div>
      </div>
    </Card>
  )
}

export default function Home() {
 

  return (
    <div className="min-h-screen pb-16">
     

      {/* Hero Section */}
      <section className="relative min-h-[80vh] px-8 pt-16">
        <div className="absolute inset-0">
          <Image
            src="/lobby.jpg"
            alt="Hotel exterior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container mx-auto relative py-20">
          <div className="max-w-2xl text-white">
            <p className="mb-4 text-sm uppercase tracking-wider">BOOK A PERFECT ROOM</p>
            <h1 className="mb-6 text-3xl md:text-5xl font-bold leading-tight">
              Your Ultimate Hotel Booking Destination.
            </h1>
            <p className="mb-4 md:mb-8 text-base md:text-lg">
              Welcome to our hotel booking website! We are your go-to platform for finding the perfect accommodations for your travels.
            </p>
            <Button size="lg" className="mr-4">TAKE A TOUR</Button>
          </div>

          {/* Booking Form */}
          <Card className="mt-5 md:mt-12 p-6  bg-black/50 " data-aos="fade-up">
            <div className="grid gap-3 md:gap-6 md:grid-cols-2 lg:grid-cols-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-white">CHECK-IN</label>
                <input
                  type="date"
                  className="w-full rounded-md border p-2 border-black"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white font-medium">CHECK-OUT</label>
                <input
                  type="date"
                  className="w-full rounded-md border  border-black p-2"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white font-medium">ROOMS</label>
                <Select  >
                  <SelectTrigger  className="bg-white">
                    <SelectValue placeholder="Select room"  />
                  </SelectTrigger>
                  <SelectContent className="bg-white/90 border border-black">
                    <SelectItem value="1">1 Room</SelectItem>
                    <SelectItem value="2">2 Rooms</SelectItem>
                    <SelectItem value="3">3 Rooms</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="mb-2 block text-sm text-white font-medium">ADULTS</label>
                <Select>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Select adults" />
                  </SelectTrigger >
                  <SelectContent className="bg-white/90">
                    <SelectItem value="1">1 Adult</SelectItem>
                    <SelectItem value="2">2 Adults</SelectItem>
                    <SelectItem value="3">3 Adults</SelectItem>
                    <SelectItem value="3">4 Adults</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="mb-2 block text-sm text-white font-medium">CHILDREN</label>
                <Select>
                  <SelectTrigger  className="bg-white">
                    <SelectValue placeholder="Select children" />
                  </SelectTrigger>
                  <SelectContent className="bg-white/90">
                    <SelectItem value="0">No Children</SelectItem>
                    <SelectItem value="1">1 Child</SelectItem>
                    <SelectItem value="2">2 Children</SelectItem>
                    <SelectItem value="2">3 Children</SelectItem>
                    <SelectItem value="2">4 Children</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button className="mt-6 border border-white text-white mx-auto px-6 hover:bg-white hover:text-black hover:border-black duration-500 flex justify-center hover:shadow-xl">BOOK NOW</Button>
          </Card>
        </div>
      </section>

      {/* Popular Rooms Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Most Popular Rooms</h2>
          <p className="text-muted-foreground text-base">
            Discover our most sought-after accommodations
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <RoomCard
            title="Deluxe Queen Room"
            price={200}
            image="/queen-room.png"
            rating={5}
            specs={["2 Beds", "1 Bath", "Wi-Fi", "Air Conditioner"]}
          />
          <RoomCard
            title="King Ensuite Room"
            price={180}
            image="/king-room.png"
            rating={4}
            specs={["1 King Bed", "1 Bath", "Wi-Fi", "Mini Bar"]}
          />
          <RoomCard
            title="Luxury Hall Fame"
            price={150}
            image="/hall-fame.png"
            rating={4}
            specs={["2 Beds", "2 Baths", "Wi-Fi", "Kitchen"]}
          />
        </div>
      </section>

      {/* Amenities Section */}
      <section className="bg-muted px-5 py-20">
        <div className="container mx-auto">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold">
                We strive to provide a range of facilities and amenities to enhance your stay and ensure your comfort.
              </h2>
              <Button variant="outline" size="lg" className="hover:bg-black/80 hover:text-white hover:border hover:border-black duration-500 hover:shadow-xl">
                TAKE A TOUR
              </Button>
            </div>
            <div className="grid gap-6">
              {[
                { title: "Most Baggage Hold", icon: "🛄" },
                { title: "Lunch & Dinner", icon: "🍽️" },
                { title: "Beauty & Spa", icon: "💆" },
                { title: "Swimming Pool", icon: "🏊" },
              ].map((amenity, i) => (
                <div key={i} className="flex items-start gap-4 ">
                  <span className="text-2xl">{amenity.icon}</span>
                  <div>
                    <h3 className="font-semibold">{amenity.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}