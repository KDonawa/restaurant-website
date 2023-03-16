import { images } from "@/assets";
import { RiTwitterLine, RiInstagramLine, RiFacebookFill } from "react-icons/ri";
import Newsletter from "./Newsletter";
import { motion } from "framer-motion";

function Footer() {
  return (
    <section className="flex flex-col items-center gap-12 pb-20 pt-10 text-center">
      {/* Newsletter */}
      <motion.div
        className="w-fit border-x border-y border-primary border-opacity-20 py-8 px-5 sm:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <Newsletter />
      </motion.div>

      <div className="flex w-full justify-center">
        <div className="flex w-11/12 grid-cols-3 flex-col items-center gap-8 md:grid md:gap-0">
          <div className="h-[1px] w-48 bg-primary opacity-30 md:hidden" />

          {/* Contact */}
          <div className="flex flex-col gap-2 text-center">
            <div className="font-serif text-lg text-gray-light">Contact Us</div>
            <div className="text-3 italic">
              9W 53rd St, New York, NY 10019, USA
            </div>
            <div className="text-3 flex flex-col">
              <span>+1 212-344-1230</span>
              <span>+1 212-555-1230</span>
            </div>
          </div>

          {/* Main */}
          <div className="-order-1 flex flex-col items-center gap-1 text-center md:order-none">
            <div className="mb-5 font-serif text-4xl font-bold uppercase text-primary">
              Gerícht
            </div>

            <div className="max-w-xs text-xs text-gray-light">
              "The best way to find yourself is to lose yourself in the service
              of others.”
            </div>

            <img src={images.spoon} alt="" className="h-6 w-6" />

            {/* Socials */}
            <ul className="flex gap-3 text-gray-light">
              <RiFacebookFill className="h-5 w-5 cursor-pointer hover:text-primary" />
              <RiTwitterLine className="h-5 w-5 cursor-pointer hover:text-primary" />
              <RiInstagramLine className="h-5 w-5 cursor-pointer hover:text-primary" />
            </ul>
          </div>

          <div className="h-[1px] w-48 bg-primary opacity-30 md:hidden" />

          {/* Hours */}
          <div className="flex flex-col gap-2 text-center">
            <div className="font-serif text-lg text-gray-light">
              Working Hours
            </div>

            <div className="text-3 flex flex-col">
              <span>Monday-Friday:</span>
              <span>8:00 am - 12:00 am</span>
            </div>

            <div className="text-3 flex flex-col">
              <span>Saturday-Sunday:</span>
              <span>10:00 am - 11:00 pm</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div>
        <div className="text-3 italic">2021 Gerícht. All Rights reserved.</div>
        <div className="text-3 mt-2 italic">
          Copyright &copy; {new Date().getFullYear()} Kerron Donawa
        </div>
      </div>
    </section>
  );
}

export default Footer;
