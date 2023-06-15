import ReactWhatsapp from "react-whatsapp";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Header from "./components/Header";
import ProductsSection from "./components/ProductsSection";
import { useRef } from "react";

function Home() {
  // page ref
  const pageRef = useRef({
    Header: { current: {} },
    About: { current: {} },
    Products: { current: {} },
    Contact: { current: {} },
  });
  // custom function to attach ref to sections
  const attachRef = (sectionName, refElement) => {
    pageRef.current[`${sectionName}`].current = refElement;
  };

  // custom function to handle scrolling to sections
  const handleScroll = (sectionName) => {
    if (sectionName === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else
      window.scrollTo({
        top: pageRef.current[`${sectionName}`].current.offsetTop - 80,
        behavior: "smooth",
      });
  };

  // whatsapp number
  const number = "+918928775685";
  return (
    <div className="bg-bgColor2">
      <div className="bg-bgColor1">
        {/* header section */}
        <section
          className="sticky top-0 shadow-md z-[10000]"
          ref={(el) => attachRef("Header", el)}
        >
          <Header handleScroll={handleScroll} />
        </section>

        {/* about section */}
        <section
          className="mb-8 mt-8 lg:mt-24 lg:mb-24"
          ref={(el) => attachRef("About", el)}
        >
          <AboutSection />
        </section>

        {/* product section */}
        <section
          className="mb-4 lg:mb-16"
          ref={(el) => attachRef("Products", el)}
        >
          <ProductsSection />
        </section>

        {/* contact section */}
        <section
          className="bg-bgColor2 pt-4 lg:pt-16 pb-14 lg:pb-24"
          ref={(el) => attachRef("Contact", el)}
        >
          <ContactSection />
        </section>
      </div>

      <ReactWhatsapp number={number}>
        {/* WhatsApp icon */}
        <i className="fa fa-whatsapp whatsapp-icon fixed bottom-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-[50px] bg-[#25d366] text-white text-base"></i>
      </ReactWhatsapp>
    </div>
  );
}

export default Home;
