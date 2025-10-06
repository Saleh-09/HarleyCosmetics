import React from 'react';
import { ArrowRight } from "lucide-react";

const BlogCard = ({ date, title, description, image }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
        {image && (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        )}
        {/* Read more button overlay */}
        <button className="absolute bottom-4 left-4 bg-white rounded-full px-4 py-2 flex items-center gap-2 text-sm font-medium text-gray-800 hover:bg-gray-50 transition-colors shadow-md">
          Read more
          <ArrowRight size={16} />
        </button>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const BlogCardGrid = () => {
  const blogs = [
    {
      id: 1,
      date: "April 25, 2024",
      title: "Essential Hair Care Tips for Healthy, Shiny Hair",
      description: "Discover the secrets to beautiful, healthy hair with these simple yet effective tips for nourishment, gentle care, and smart styling.",
      image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80"
    },
    {
      id: 2,
      date: "April 25, 2024",
      title: "Essential Hair Care Tips for Healthy, Shiny Hair",
      description: "Discover the secrets to beautiful, healthy hair with these simple yet effective tips for nourishment, gentle care, and smart styling.",
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80"
    },
    {
      id: 3,
      date: "April 20, 2024",
      title: "The Ultimate Guide to Hair Styling Techniques",
      description: "Master professional styling techniques at home with our comprehensive guide covering tools, products, and expert methods.",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
    },
    {
      id: 4,
      date: "April 18, 2024",
      title: "Natural Remedies for Hair Growth and Strength",
      description: "Explore natural ingredients and DIY treatments that promote hair growth, reduce breakage, and enhance overall hair health.",
      image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Blog</h1>
          <p className="text-gray-600">Discover tips, trends, and insights for beautiful hair</p>
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard 
              key={blog.id}
              date={blog.date}
              title={blog.title}
              description={blog.description}
              image={blog.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCardGrid;