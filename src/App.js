import ReactWhatsapp from "react-whatsapp";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Header from "./components/Header";
import ProductsSection from "./components/ProductsSection";

function Home() {
  const number = "+918928775685";
  return (
    <div className="bg-bgColor2">
      <div className="bg-bgColor1">
        {/* header section */}
        <section className="sticky top-0 shadow-md z-[10000]">
          <Header />
        </section>

        {/* about section */}
        <section className="mb-8 mt-8 lg:mt-32 lg:mb-32">
          <AboutSection />
        </section>

        {/* product section */}
        <section className="mb-4 lg:mb-16">
          <ProductsSection />
        </section>

        {/* contact section */}
        <section className="bg-bgColor2 pt-4 lg:pt-16 pb-14 lg:pb-36">
          <ContactSection />
        </section>
      </div>

      <ReactWhatsapp number={number}>
        {/* WhatsApp icon */}
        <a
          href="https://wa.me/2348100000000"
          className="fixed bottom-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-[50px] bg-[#25d366] text-white text-base"
        >
          <i className="fa fa-whatsapp whatsapp-icon"></i>
        </a>
      </ReactWhatsapp>
    </div>
  );
}

export default Home;
