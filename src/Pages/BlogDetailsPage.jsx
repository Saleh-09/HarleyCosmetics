import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import { blogData } from "../Data/blogData.js";
import { ArrowLeft } from "lucide-react";

const BlogDetailsPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    
    // Find the blog post by slug
    const blog = blogData.find(b => b.slug === slug);
    
    // Handle case when blog is not found
    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
                    <button 
                        onClick={() => navigate('/blog')}
                        className="text-primary hover:underline"
                    >
                        Return to Blog
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div>
            {/* Back Button */}
            <div className="bg-background border-b">
                <div className="max-w-2xl mx-auto px-6 py-4">
                    <button 
                        onClick={() => navigate('/blog')}
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft size={20} />
                        <span className="font-medium">Back to Blog</span>
                    </button>
                </div>
            </div>

            {/* Hero Image */}
            <div className="max-w-4xl mx-auto px-6 py-8">
                <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
                    <img 
                        src={blog.image} 
                        alt={blog.title}
                        className="w-full h-64 md:h-96 object-cover"
                    />
                </div>
            </div>

            <main className="max-w-2xl mx-auto px-6 pb-16">
                <article className="space-y-8">
                    {/* Header */}
                    <header className="space-y-4">
                        <h1 className="text-3xl md:text-4xl font-bold leading-tight text-foreground">
                            {blog.title}
                        </h1>
                        <p className="text-sm text-muted-foreground uppercase tracking-wide">
                            {blog.date}
                        </p>
                    </header>

                    {/* Introduction */}
                    <div className="space-y-6 text-foreground leading-relaxed">
                        <p>{blog.content.intro}</p>
                    </div>

                    {/* Dynamic Sections */}
                    {blog.content.sections.map((section, index) => (
                        <section key={index} className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                                {section.heading}
                            </h2>
                            <div className="space-y-4 text-foreground leading-relaxed">
                                {section.text.split('\n\n').map((paragraph, pIndex) => (
                                    <p key={pIndex}>{paragraph}</p>
                                ))}
                            </div>
                        </section>
                    ))}

                    {/* Inspiration Quote */}
                    <div className="bg-muted/30 border-l-4 border-primary p-6 rounded-r-lg my-8">
                        <h3 className="text-lg font-medium text-foreground mb-2">
                            A Little Inspiration
                        </h3>
                        <blockquote className="text-foreground italic">
                            {blog.content.quote}
                        </blockquote>
                    </div>

                    {/* Conclusion */}
                    <div className="space-y-4 text-foreground leading-relaxed">
                        <p>{blog.content.conclusion}</p>
                    </div>
                </article>
            </main>

            <div className="max-w-7xl mx-auto px-3"> 
                <Banner/>
            </div>
            <Footer/>
        </div>
    );
};

export default BlogDetailsPage;