import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import {Link} from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import React from "react";
import haircare from "../assets/haircare.png"
import HeroHeader from "@/components/HeroHeader";

const blogPosts = [
  {
    id: "hair-care",
    title: "Essential Hair Care Tips for Healthy, Shiny Hair",
    description:
      "Discover the secrets to beautiful, healthy hair with these simple yet effective tips for nourishment, gentle care, and smart styling.",
    image: haircare,
    date: "April 25, 2024",
  },
]

const Blogs = () => {
    return(
      <div>
        <HeroHeader
           title="Insights, Tips, and the Latest in Hair Restoration Care"
            badge="Blogs"
            height="h-[365px]"
        />
        {/* Testimonial Badge */}
        <div className="flex justify-center mb-4">
            <span className="text-[#3C2031] text-[25px] font-semibold">Blogs</span>
        </div>
        {/* Section Header */}
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#141219] mb-4">Tips for Healthy Hair Care</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn practical tips, do’s and don’ts, and expert guidance to maintain strong and healthy hair every day.
            </p>
        </div>
        <main className="max-w-6xl mx-auto px-6 py-16">
            <div className="space-y-12">
                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <Card
                        key={post.id}
                        className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-0"
                        >
                        <div className="overflow-hidden relative group">
                            <img
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            className="w-[417px] h-[408px] object-cover hover:scale-105 transition-transform duration-300 mx-auto" // ✅ fixed size
                            />
                            <Link to={`/blog/${post.id}`} className="absolute bottom-4 right-4">
                            <Button className="bg-white text-black hover:bg-gray-50 shadow-lg rounded-full px-4 py-2 font-medium group">
                                Read more
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                            </Link>
                        </div>
                        <CardContent className="p-6 space-y-4">
                            <div className="space-y-2">
                            <p className="text-sm text-muted-foreground">{post.date}</p>
                            <h2 className="text-xl font-semibold text-foreground leading-tight">
                                {post.title}
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {post.description}
                            </p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
                </div>
            </div>
        </main>
        <div className="max-w-7xl mx-auto px-6">
          <Banner/>
        </div>
        <Footer/>
      </div>
    )
}
export default Blogs