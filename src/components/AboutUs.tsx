import { images } from "@/assets";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center gap-16 bg-texture py-28 px-16 sm:px-32 md:flex-row md:gap-10 md:px-16 lg:px-32 xl:px-64"
    >
      <img
        src={images.G}
        alt=""
        className="absolute top-1/2 left-1/2 w-80 -translate-x-1/2 -translate-y-1/2"
      />

      {/* About Us */}
      <motion.div
        className="z-10 flex flex-col items-center gap-3 md:items-end"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <div className="flex w-fit flex-col gap-1">
          <h2 className="heading-2">About Us</h2>
          <img
            src={images.spoon}
            alt="spoon"
            className="w-8 md:rotate-180 md:self-end"
          />
        </div>
        <p className="text-2 text-center md:text-end">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button className="btn hidden md:block">Know More</button>
      </motion.div>

      {/* Knife Image */}
      <motion.img
        src={images.knife}
        alt=""
        className="z-10 hidden h-[600px] md:block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 1 }}
        variants={{
          hidden: { opacity: 0, y: 250 },
          visible: { opacity: 1, y: 0 },
        }}
      />

      <button className="btn z-10 mx-auto md:hidden">Know More</button>

      {/* Our History */}
      <motion.div
        className="z-10 flex flex-col items-center gap-3 md:items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <div className="flex w-fit flex-col gap-1">
          <h2 className="heading-2">Our History</h2>
          <img src={images.spoon} alt="spoon" className="w-8" />
        </div>
        <p className="text-2 text-center md:text-start">
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
          odio nec aliquet.
        </p>
        <button className="btn hidden md:block">Know More</button>
      </motion.div>
    </section>
  );
}

export default AboutUs;
