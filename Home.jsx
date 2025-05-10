
import React from "react";
import { Card, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';
import { Phone, Mail, Building2, Leaf, ImagePlus } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-8">
      <section className="text-center py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
          Klutter Klear Junk Removal & Recycling Services
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Serving North Wales, PA and surrounding areas with fast, eco-friendly junk removal for residential and commercial properties.
        </p>
        <div className="mt-6">
          <Button className="text-lg px-6 py-3">Get a Free Estimate</Button>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-10">
        <Card className="shadow-lg">
          <CardContent className="p-6 text-center">
            <Leaf className="mx-auto text-green-600" size={40} />
            <h2 className="text-2xl font-semibold mt-4">Eco-Friendly Recycling</h2>
            <p className="text-gray-600 mt-2">
              We prioritize recycling and responsible disposal to keep our environment clean.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardContent className="p-6 text-center">
            <Building2 className="mx-auto text-green-600" size={40} />
            <h2 className="text-2xl font-semibold mt-4">Commercial Cleanouts</h2>
            <p className="text-gray-600 mt-2">
              Office, retail, or warehouse—we handle all types of commercial junk removal efficiently.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardContent className="p-6 text-center">
            <Phone className="mx-auto text-green-600" size={40} />
            <h2 className="text-2xl font-semibold mt-4">Fast & Reliable Service</h2>
            <p className="text-gray-600 mt-2">
              Same-day or scheduled pickups, always on time and professional.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="bg-white p-6 md:p-12 rounded-2xl shadow-md max-w-4xl mx-auto mt-10">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Request a Free Estimate
        </h2>
        <form
          action="https://formspree.io/f/mdkgdzrd" 
          method="POST"
          className="grid gap-4"
        >
          <input type="text" name="name" placeholder="Full Name" className="p-3 border rounded" required />
          <input type="email" name="email" placeholder="Email Address" className="p-3 border rounded" required />
          <input type="tel" name="phone" placeholder="Phone Number" className="p-3 border rounded" required />
          <textarea name="message" placeholder="Describe the items or job" className="p-3 border rounded h-32" required></textarea>
          <Button type="submit" className="w-full">Submit Request</Button>
        </form>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Before & After Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="aspect-w-4 aspect-h-3 bg-gray-200 rounded-xl shadow-inner flex items-center justify-center">
            <ImagePlus className="text-gray-400" size={40} />
          </div>
          <div className="aspect-w-4 aspect-h-3 bg-gray-200 rounded-xl shadow-inner flex items-center justify-center">
            <ImagePlus className="text-gray-400" size={40} />
          </div>
          <div className="aspect-w-4 aspect-h-3 bg-gray-200 rounded-xl shadow-inner flex items-center justify-center">
            <ImagePlus className="text-gray-400" size={40} />
          </div>
        </div>
      </section>

      <section className="bg-white p-6 md:p-12 rounded-2xl shadow-md max-w-4xl mx-auto mt-10">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Contact Us
        </h2>
        <div className="grid gap-4 text-gray-700">
          <div className="flex items-center gap-3">
            <Phone /> <span>(215) 555-1234</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail /> <span>info@klutterklear.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Building2 /> <span>North Wales, PA</span>
          </div>
        </div>
      </section>
    </main>
  );
}
