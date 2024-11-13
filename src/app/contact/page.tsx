'use client'

import { useState } from "react"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock  } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormStatus('submitting')

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Randomly succeed or fail for demonstration purposes
    if (Math.random() > 0.5) {
      setFormStatus('success')
    } else {
      setFormStatus('error')
    }
  }

  return (
    <div className="min-h-screen py-10  bg-gradient-to-b from-background to-muted bg-gray-200">
      
      <main className="container mx-auto px-4 pt-24 ">
        <h1 className="mb-12 text-center text-4xl font-bold">Contact Us</h1>
        
        <div className="grid gap-8 lg:grid-cols-2 mx-auto">
          <div className="my-auto px-6 py-16 lg:py-[136px] border bg-white border-black">
            <h2 className="mb-6 text-2xl text-center font-semibold">Get in Touch</h2>
            <p className="mb-16 text-center text-muted-foreground">
              We&#39;d love to hear from you. Please fill out this form or use our contact information below.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <Input type="text" placeholder="Your Name" required />
              <Input type="email" placeholder="Your Email" required />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Subject" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="reservation">Reservation</SelectItem>
                  <SelectItem value="feedback">Feedback</SelectItem>
                  <SelectItem value="support">Support</SelectItem>
                </SelectContent>
              </Select>
              <Textarea placeholder="Your Message" required />
              <Button type="submit" className="w-[200px] mx-auto flex justify-center mt-20 hover:bg-black/60 hover:text-white border border-black duration-500" disabled={formStatus === 'submitting'}>
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </Button>
              {formStatus === 'success' && (
                <p className="text-center text-green-600">Your message has been sent successfully!</p>
              )}
              {formStatus === 'error' && (
                <p className="text-center text-red-600">There was an error sending your message. Please try again.</p>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <Card className="bg-slate-950/80 text-white shadow-md hover:shadow-xl" >
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-semibold">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>info@arevahotels.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>123 Luxury Lane, Paradise City, PC 12345</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Mon-Fri: 9am-6pm, Sat-Sun: 10am-4pm</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <div className="relative h-[300px] w-full">
                  <Image
                    src="/location/location.png"
                    alt="Map"
                    fill
                    className="rounded-lg object-cover"
                  />
                  
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  
                    <Button variant="secondary">
                      <MapPin className="mr-2 h-4 w-4" />
                      
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md hover:shadow-xl">
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-semibold">Connect With Us</h2>
                <p className="mb-4 text-muted-foreground">
                  Stay updated with our latest offers and news by following us on social media.
                </p>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    <span className="sr-only">Facebook</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                    <span className="sr-only">Twitter</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    <span className="sr-only">Instagram</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <section className="my-16 rounded-lg bg-muted px-4 py-8">
          <h2 className="mb-4 text-2xl font-semibold">Frequently Asked Questions</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-2 font-semibold">What are your check-in and check-out times?</h3>
              <p className="text-muted-foreground">Check-in time is 3:00 PM and check-out time is 11:00 AM. Early check-in and late check-out can be arranged based on availability.</p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Do you offer airport transfers?</h3>
              <p className="text-muted-foreground">Yes, we offer airport transfers for an additional fee. Please contact our concierge for arrangements and pricing.</p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Is breakfast included in the room rate?</h3>
              <p className="text-muted-foreground">Breakfast is included in some of our room packages. Please check your specific booking or contact us for more information.</p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Do you have parking facilities?</h3>
              <p className="text-muted-foreground">Yes, we offer both self-parking and valet parking options for our guests. Charges may apply.</p>
            </div>
          </div>
        </section>
      </main>

     
    </div>
  )
}