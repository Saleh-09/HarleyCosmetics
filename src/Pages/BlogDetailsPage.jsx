import React from "react";
import haircare from "../assets/haircare.jpg";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
const BlogsDetailsPage = () => {
    return(
        <div>
            <main className="max-w-2xl mx-auto px-6 py-16">
            <article className="space-y-8">
                {/* Header */}
                <header className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold leading-tight text-foreground">
                    Essential Hair Care Tips for Healthy, Shiny Hair
                </h1>
                <p className="text-sm text-muted-foreground">APRIL 15, 2024</p>
                </header>

                {/* Introduction */}
                <div className="space-y-6 text-foreground leading-relaxed">
                <p>
                    Healthy, shiny hair is more than just a beauty goal it reflects how well you care for yourself inside and
                    out. From the food you eat to the way you wash and style, every little habit contributes to the strength and
                    glow of your hair. Here are three simple yet effective areas to focus on.
                </p>
                </div>

                {/* Section 1 */}
                <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground">Nourish Your Hair from Within</h2>
                <div className="space-y-4 text-foreground leading-relaxed">
                    <p>
                    The journey to beautiful hair starts with proper nutrition. A diet packed with protein, vitamins, and
                    minerals gives your hair the fuel it needs to grow strong and healthy. Foods like eggs, nuts, salmon,
                    spinach, and berries provide essential nutrients that support growth and reduce breakage.
                    </p>
                    <p>And don't forget water hydration is just as important for your scalp as it is for your skin.</p>
                </div>
                </section>

                {/* Section 2 */}
                <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground">Gentle Washing and Conditioning</h2>
                <div className="space-y-4 text-foreground leading-relaxed">
                    <p>
                    Washing your hair daily might seem refreshing, but it can actually strip away natural oils that protect
                    and moisturize your strands. Aim for two to three washes a week with a gentle, sulfate-free shampoo.
                    Follow up with a nourishing conditioner to restore softness and shine.
                    </p>
                    <p>
                    Use a wide-tooth comb on damp hair instead of harsh brushes, as wet hair is more delicate and prone to
                    breakage.
                    </p>
                </div>
                </section>

               

                {/* Section 3 */}
                <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground">Protect and Style Smartly</h2>
                <div className="space-y-4 text-foreground leading-relaxed">
                    <p>
                    Styling is fun, but overdoing it can damage your hair. Minimize the use of straighteners, blow-dryers, and
                    curling irons, or always apply a heat protectant when using them. Loose hairstyles are healthier than
                    tight ponytails, which can stress your roots.
                    </p>
                    <p>For added care, sleep on a silk pillowcase and schedule regular trims to keep split ends away.</p>
                </div>
                </section>

                {/* Inspiration Quote */}
                <div className="bg-muted/30 border-l-4 border-primary p-6 rounded-r-lg my-8">
                <h3 className="text-lg font-medium text-foreground mb-2">A Little Inspiration</h3>
                <blockquote className="text-foreground italic">
                    "Invest in your hair, it's the crown you never take off." 👑
                </blockquote>
                </div>

                {/* Conclusion */}
                <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                    By nourishing your body, treating your hair gently, and protecting it wisely, you can enjoy strong, vibrant,
                    and radiant locks every day.
                </p>
                </div>
            </article>
        </main>
        <Banner/>
        <Footer/>
        </div>
        
    )
}
export default BlogsDetailsPage