"use client";  

import { useEffect } from "react";
import Image from "next/image"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface TeamMemberProps {
  name: string
  role: string
  image: string
}

function TeamMember({ name, role, image }: TeamMemberProps) {
  return (
    <Card data-aos="fade-up "
    data-aos-duration="2000" className="overflow-hidden shadow-md hover:shadow-lg bg-white">
      <div className="relative h-80  w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </Card>
  )
}

interface TestimonialProps {
  quote: string
  author: string
  role: string
}

function Testimonial({ quote, author, role }: TestimonialProps) {
  return (
    <Card  className="flex flex-col shadow-lg hover:shadow-xl bg-white justify-between p-6">
      <p className="mb-4 italic">&#34;{quote}&#34;</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </Card>
  )
}

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []); 

  return (
    <div className="min-h-screen bg-gray-100">
     

      {/* Hero Section */}
      <section className="relative  pt-16">
        <div className="absolute inset-0 h-[50vh]">
          <Image
            src="/about/lobby.png"
            alt="Hotel lobby"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container w-full mx-auto relative px-6 py-20 text-center text-white">
          <h1 className="mb-6 text-5xl font-bold md:mt-12 leading-tight">About Areva</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Discover the story behind our commitment to exceptional hospitality and unforgettable experiences.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-12 md:grid-cols-2 items-center " >
          <div data-aos="fade-right" className="mx-auto ">
            <h2   className="mb-6  text-4xl text-center font-bold">Our Story</h2>
            <p className="mb-4 text-lg text-center">
              Founded in 1995, Areva has been at the forefront of luxury hospitality for over two decades. What started as a single boutique hotel has grown into a collection of distinctive properties across the globe, each offering a unique blend of local culture and world-class amenities.
            </p>
            <p  className="text-lg text-center">
              Our journey has been driven by a passion for creating extraordinary experiences and a deep commitment to personalized service. We believe that every stay should be more than just accommodation .it should be a gateway to unforgettable memories.
            </p>
          </div>
          <div data-aos="fade-left" className="relative  mx-auto md:w-[500px] md:h-[300px]">
            <Image
              src="/about/about.png"
              alt="Areva hotel exterior"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-muted px-4 py-20">
        <div className="container mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold">Our Mission</h2>
          <p className="mx-auto max-w-2xl text-lg">
            At Areva, our mission is to redefine luxury hospitality by creating immersive, culturally rich experiences that inspire and delight our guests. We strive to be more than just a place to stay .we aim to be a destination in itself, offering unparalleled service, comfort, and memorable moments.
          </p>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="container  px-4 mx-auto py-20">
        <h2 className="mb-12  text-center text-3xl font-bold">Meet Our Team</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <TeamMember
            name="Jane Doe"
            role="CEO & Founder"
            image="/about/ceo.png"
          />
          <TeamMember
            name="John Smith"
            role="Head of Operations"
            image="/about/head.png"
          />
          <TeamMember
            name="Emily Brown"
            role="Customer Experience Manager"
            image="/about/exp-manager.png"
          />
          <TeamMember
            name="Michael Lee"
            role="Head Chef"
            image="/about/chef.png"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted px-4 py-20">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center text-3xl font-bold">What Our Guests Say</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Testimonial
              quote="Staying at Areva was an absolute dream. The attention to detail and personalized service made our honeymoon unforgettable."
              author="Sarah & Tom"
              role="Newlyweds"
            />
            <Testimonial
              quote="As a frequent business traveler, I've stayed in many hotels, but Areva stands out for its comfort, efficiency, and warm hospitality."
              author="David Chen"
              role="Executive"
            />
            <Testimonial
              quote="The cultural experiences and local tours arranged by Areva made our family vacation truly special. We can't wait to return!"
              author="The Johnson Family"
              role="Leisure Travelers"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto py-20 text-center">
        <h2 className="mb-6 text-3xl mx-auto font-bold">Experience Areva for Yourself</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg">
          Ready to create your own unforgettable memories? Book your stay with us and discover the Areva difference.
        </p>
        <Button size="lg" className="hover:bg-black/80 shadow-md hover:text-white border border-black duration-500 hover:shadow-xl">BOOK NOW</Button>
      </section>

    </div>
  )
}