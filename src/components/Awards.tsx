import { images } from "@/assets";
import { awards } from "@/data";
import Heading from "./shared/Heading";
import { motion } from "framer-motion";

function Awards() {
  return (
    <section
      id="awards"
      className="relative flex items-center justify-center bg-texture py-20"
    >
      <img
        src={images.logo}
        alt=""
        className="absolute top-[3vw] left-[3vw] hidden h-20 w-20 md:block"
      />

      <div className="flex grid-cols-2 flex-col items-center gap-16 px-[8vw] sm:w-[450px] sm:px-0 md:w-[500px] lg:grid lg:w-9/12 lg:gap-10">
        <div className="flex flex-col justify-center gap-14">
          <Heading main="Our Awards" sub="Awards & Recognition" />

          <motion.ul
            className="grid gap-x-5 gap-y-10 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 1 },
              },
            }}
          >
            {awards.map((award, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                <Award
                  imageUrl={award.imageUrl}
                  title={award.title}
                  subtitle={award.subtitle}
                />
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <img
          src={images.laurels}
          alt="laurels"
          className="w-[350px] lg:w-[400px]"
        />
      </div>
    </section>
  );
}

function Award({
  imageUrl,
  title,
  subtitle,
}: {
  imageUrl: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex gap-2">
      <img src={imageUrl} alt="award" className="h-12 w-12" />
      <div className="flex flex-col">
        <span className="text-1">{title}</span>
        <span className="text-3">{subtitle}</span>
      </div>
    </div>
  );
}

export default Awards;
