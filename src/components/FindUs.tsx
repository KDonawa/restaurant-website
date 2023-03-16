import { images } from "@/assets";
import Heading from "./shared/Heading";
import { motion } from "framer-motion";

function FindUs() {
  return (
    <section
      id="contact"
      className="flex items-center justify-center bg-texture py-20"
    >
      <div className="mx-[8vw] flex grid-cols-2 flex-col items-center gap-16 sm:w-[500px] md:mx-0 md:grid md:w-[700px] md:items-start lg:w-[800px] xl:w-4/6">
        <motion.div
          className="flex flex-col gap-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.25 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Heading main="Find Us" sub="Contact" />

          {/* Address */}
          <div className="text-3">9W 53rd St, New York, NY 10019, USA</div>

          {/* Opening Hours */}
          <div className="flex flex-col gap-2">
            <span className="text-1">Opening Hours</span>
            <span className="text-xs text-gray-light">
              Mon - Fri: 8:00 am - 12:00 am
            </span>
            <span className="text-xs text-gray-light">
              Sat - Sun: 10:00 am - 11:00 pm
            </span>
          </div>

          <button className="btn">Visit Us</button>
        </motion.div>

        <motion.img
          src={images.findUs}
          alt="chef"
          className="w-[400px] md:w-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1 },
          }}
        />
      </div>
    </section>
  );
}

export default FindUs;
