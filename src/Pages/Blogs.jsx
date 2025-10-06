import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { blogData } from "../Data/blogData.js";
import HeroHeader from "@/components/HeroHeader";

const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blog/${blog.slug}`} className="block">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
          {blog.image && (
            <img 
              src={blog.image} 
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute bottom-4 right-4 bg-white rounded-full px-4 py-2 flex items-center gap-2 text-sm font-medium text-gray-800 shadow-md">
            Read more
            <ArrowRight size={16} />
          </div>
        </div>
        
        <div className="p-6">
          <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            {blog.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {blog.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  if (selectedBlog) {
    return <BlogPost blog={selectedBlog} onBack={() => setSelectedBlog(null)} />;
  }
    return(
      <div>
        <HeroHeader
           title="Insights, Tips, and the Latest in Hair Restoration Care"
            badge="Blogs"
            height="h-[365px]"
        />
        {/* Blogs Badge */}
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
        <div className="min-h-screen">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Blog</h1>
              <p className="text-gray-600">Discover tips, trends, and insights for beautiful hair</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogData.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-3">
          <Banner/>
        </div>
        <Footer/>
      </div>
    )
}
export default Blogs