import { images } from "@/assets";
import Heading from "./shared/Heading";

function FindUs() {
  return (
    <section className="flex items-center justify-center bg-texture py-20">
      <div className="mx-[8vw] flex grid-cols-2 flex-col items-center gap-16 sm:w-[500px] md:mx-0 md:grid md:w-[700px] md:items-start lg:w-[800px] xl:w-4/6">
        <div className="flex flex-col gap-7">
          <Heading main="Find Us" sub="Contact" />

          {/* Address */}
          <div className="text-3">
            238 Fake Expressway, Apt. 123, 90210, California, United States
          </div>

          {/* Opening Hours */}
          <div className="flex flex-col gap-2">
            <span className="text-1">Opening Hours</span>
            <span className="text-xs text-gray-light">
              Mon - Fri: 10:00 am - 02:00 am
            </span>
            <span className="text-xs text-gray-light">
              Sat - Sun: 10:00 am - 03:00 am
            </span>
          </div>

          <button className="btn">Visit Us</button>
        </div>

        <img src={images.findUs} alt="chef" className="w-[400px] md:w-auto" />
      </div>
    </section>
  );
}

export default FindUs;
