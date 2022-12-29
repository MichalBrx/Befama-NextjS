import Machnies from "./Machines";
import Footer from "./Footer";
import Services from "./Services";
import AboutUs from "./AboutUs";
import ContactForm from "./ContactForm";
import WorkWithUs from "./WorkWithUs";
import Map from "./Map";
import Hero from "./Hero";



const Background = () => {


  return (
    <div>
      <Hero />

      <div className=" py-10 ">
        <Machnies />
      </div>

      <div >
        <Services />
      </div>

      <div className=" border-none flex justify-center w-full">
        <AboutUs />
      </div>

      <div
        id="work"
        className=" py-8 flex justify-center flex-wrap gap-5 bg-wave bg-no-repeat bg-bottom"
      >
        <WorkWithUs />
        <ContactForm />
      </div>

      <div className="py-10 pt-16 bg-zinc-100 flex justify-center flex-wrap">
        <Map />
      </div>

      <Footer />
    </div>
  );
};

export default Background;
