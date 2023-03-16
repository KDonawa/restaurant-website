import { images } from "@/assets";
import Heading from "./shared/Heading";
import { motion } from "framer-motion";

function ChefsWord() {
  return (
    <section className="flex items-center justify-center bg-texture py-20">
      <div className="mx-[8vw] flex grid-cols-2 flex-col items-center gap-16 sm:w-[500px] md:mx-0 md:grid md:w-[700px] md:items-start lg:w-[800px] xl:w-4/6">
        <motion.img
          src={images.chef}
          alt="chef"
          className="w-[400px] md:w-auto"
        />

        <motion.div
          className="order-first flex flex-col gap-10 md:order-none"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.25 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Heading main="What We Believe In" sub="Chef's Word" />

          <div>
            <img
              src={images.quote}
              alt="quote"
              className="mr-2 inline-block w-8"
            />
            <span className="text-xs italic text-gray-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor
              sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris
              eget sit. Nulla scelerisque scelerisque congue ac consequat,
              aliquam molestie lectus eu. Congue iaculis integer curabitur
              semper sit nunc.
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-serif text-lg text-primary">Kevin Luo</span>
            <span className="text-xs text-gray-light">Chef & Founder</span>
          </div>

          <img src={images.sign} alt="chef-signature" className="w-40" />
        </motion.div>
      </div>
    </section>
  );
}

export default ChefsWord;
