import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Header from "./components/Header";
import ProductsSection from "./components/ProductsSection";

function Home() {
  return (
    <div className="bg-bgColor2">
      <div className="bg-bgColor1">
        {/* header section */}
        <section className="sticky top-0 shadow-md">
          <Header />
        </section>

        {/* about section */}
        <section className="mb-8 mt-8 lg:mt-32 lg:mb-32">
          <AboutSection />
        </section>

        {/* product section */}
        <section className="mb-8 lg:mb-32">
          <ProductsSection />
        </section>

        {/* contact section */}
        <section className="pb-8 lg:pb-32">
          <ContactSection />
        </section>
      </div>
    </div>
  );
}

export default Home;
