'use client'

import { useState } from "react"
import { useEffect } from "react";
import Image from "next/image"
import AOS from 'aos';
import 'aos/dist/aos.css';
import {  Search, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"

const blogPosts = [
  {
    id: 1,
    title: "10 Must-Visit Destinations for Your Next Vacation",
    excerpt: "Discover breathtaking locations that will make your next trip unforgettable...",
    image: "/blog/blog-1.png",
    author: "Jane Doe",
    date: "May 15, 2024",
    category: "Travel Tips",
  },
  {
    id: 2,
    title: "The Art of Packing Light: Essential Tips for Travelers",
    excerpt: "Learn how to pack efficiently and travel with ease on your next adventure...",
    image: "/blog/blog-2.png",
    author: "John Smith",
    date: "May 12, 2024",
    category: "Travel Tips",
  },
  {
    id: 3,
    title: "Exploring Local Cuisine: A Foodie's Guide to Global Flavors",
    excerpt: "Embark on a culinary journey around the world with these mouthwatering dishes...",
    image: "/blog/blog-3.png",
    author: "Emily Brown",
    date: "May 10, 2024",
    category: "Food & Drink",
  },
  {
    id: 4,
    title: "Sustainable Travel: How to Minimize Your Environmental Impact",
    excerpt: "Discover eco-friendly travel practices that help preserve our planet...",
    image: "/blog/blog-4.png",
    author: "Michael Green",
    date: "May 8, 2024",
    category: "Eco-Travel",
  },
  {
    id: 5,
    title: "The Rise of Digital Nomads: Working While Traveling",
    excerpt: "Learn how to balance work and travel in the age of remote opportunities...",
    image: "/blog/blog-5.png",
    author: "Sarah Johnson",
    date: "May 5, 2024",
    category: "Digital Nomad",
  },
  {
    id: 6,
    title: "Hidden Gems: Off-the-Beaten-Path Destinations",
    excerpt: "Uncover lesser-known locations that offer unique and authentic experiences...",
    image: "/blog/blog-6.png",
    author: "David Lee",
    date: "May 3, 2024",
    category: "Travel Tips",
  },
]

const categories = ["All", "Travel Tips", "Food & Drink", "Eco-Travel", "Digital Nomad"]


interface BlogPostProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    author: string;
    date: string;
    category: string;
  };
}

function BlogPost({ post }: BlogPostProps) {

  return (
    <Card className="overflow-hidden  bg-white  shadow-md hover:shadow-xl duration-300 rounded-xl">
      <div className="relative h-48 w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{post.category}</span>
          <span className="text-sm text-muted-foreground">{post.date}</span>
        </div>
        <h3 className="mb-2 text-xl font-semibold">{post.title}</h3>
        <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">By {post.author}</span>
          <Button variant="outline" size="sm" className="hover:bg-black/60 hover:text-white hover:border hover:border-black duration-500">
            Read More
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function BlogPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  const filteredPosts = blogPosts.filter(
    (post) =>
      (selectedCategory === "All" || post.category === selectedCategory) &&
      (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  return (
    <div className="min-h-screen bg-gradient-to-b bg-gray-50 from-background to-muted py-10 pb-28 px-4">
      
      <main className="container mx-auto pt-24">
        <h1 className="mb-8 text-center text-4xl font-bold">Areva Travel Blog</h1>

        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:w-64 bg-white shadow-md">
            <Input
              type="text"
              placeholder="Search blog posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10 bg-white"
            />
            <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="bg-white shadow-md">
                {selectedCategory} <ChevronDown className="ml-2 h-4 w-4 " />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white shadow-lg">
              {categories.map((category) => (
                <DropdownMenuItem
                  key={category}
                  onSelect={() => setSelectedCategory(category)}
                >
                  {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {currentPosts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>

        {filteredPosts.length > postsPerPage && (
          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                 
                />
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    href="#"
                    onClick={() => setCurrentPage(page)}
                    isActive={currentPage === page}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}

        
      </main>

     
    </div>
  )
}