import Hero from "@/components/hero"
import About from "@/components/about"
import Collection from "@/components/collection"
import Advantages from "@/components/advantages"
import Comparison from "@/components/comparison"
import Philosophy from "@/components/philosophy"
import Lifestyle from "@/components/lifestyle"
import Testimonials from "@/components/testimonials"
import Blog from "@/components/blog"
import Newsletter from "@/components/newsletter"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import CustomCursor from "@/components/custom-cursor"

export default function Home() {
  return (
    <>
      <CustomCursor />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Collection />
        <Advantages />
        <Comparison />
        <Philosophy />
        <Lifestyle />
        <Testimonials />
        <Blog />
        <Newsletter />
        <FAQ />
        <Footer />
      </main>
      <CookieBanner />
    </>
  )
}
