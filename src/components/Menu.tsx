import { images } from "@/assets";
import { menu } from "@/data";
import Heading from "./shared/Heading";
import { motion } from "framer-motion";

function Menu() {
  return (
    <section id="menu" className="flex items-center justify-center py-20">
      <div className="mx-[8vw] flex flex-col items-center gap-8 sm:w-[900px]">
        <Heading
          main="Today's Special"
          sub="Menu That Fits Your Palette"
          align="center"
        />

        <div className="grid gap-10 md:grid-cols-2 md:gap-16 lg:grid-cols-3 lg:gap-5">
          {/* Wines */}
          <motion.div
            className="flex flex-col gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            <h3 className="self-center font-serif text-2xl font-semibold">
              Wine & Beer
            </h3>

            <ul className="flex flex-col gap-8">
              {menu.wines.map((wine) => {
                return (
                  <MenuItem
                    key={wine.title}
                    title={wine.title}
                    price={wine.price}
                    tags={wine.tags}
                  />
                );
              })}
            </ul>
          </motion.div>

          <motion.img
            src={images.menu}
            alt="menu"
            className="block h-[400px] justify-self-center md:hidden lg:block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.75 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          />

          {/* Cocktails */}
          <motion.div
            className="flex flex-col gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 1.5 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            <h3 className="self-center font-serif text-2xl font-semibold">
              Cocktails
            </h3>

            <ul className="flex flex-col gap-8">
              {menu.cocktails.map((cocktail) => {
                return (
                  <MenuItem
                    key={cocktail.title}
                    title={cocktail.title}
                    price={cocktail.price}
                    tags={cocktail.tags}
                  />
                );
              })}
            </ul>
          </motion.div>
        </div>

        <button className="btn">View More</button>
      </div>
    </section>
  );
}

function MenuItem({
  title,
  price,
  tags,
}: {
  title: string;
  price: string;
  tags: string;
}) {
  return (
    <li className="">
      <div className="mb-1 flex items-center gap-5">
        <div className="relative">
          <span className="text-1">{title}</span>
        </div>

        <div className="h-[1px] flex-1 bg-gray-light" />

        <div className="font-serif">${price}</div>
      </div>

      <div className="text-3">{tags}</div>
    </li>
  );
}

export default Menu;
