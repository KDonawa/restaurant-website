import { images } from "@/assets";
import SubHeading from "./shared/SubHeading";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="my-[5vw]">
      <div className="flex grid-cols-2 flex-col items-center px-[12vw] sm:px-28 md:px-44 lg:grid lg:px-24 xl:px-48">
        <div className="pb-10 lg:p-14">
          <motion.div
            className="flex flex-col gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <SubHeading>Chase The New Flavor</SubHeading>

            <h1 className="font-serif text-6xl font-semibold text-primary">
              The Key To Fine Dining
            </h1>

            <p className="text-2">
              Sit tellus lobortis sed senectus vivamus molestie. Condimentum
              volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
              aliquam amet tellus
            </p>
          </motion.div>

          <motion.button
            className="btn mt-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.25 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            Explore Menu
          </motion.button>
        </div>

        <motion.img
          src={images.welcome}
          alt="hero"
          className="w-[450px] px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.75 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        />
      </div>
    </section>
  );
}

export default Hero;
