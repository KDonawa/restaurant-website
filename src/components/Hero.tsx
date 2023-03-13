import { images } from "@/assets";
import Heading1 from "./shared/Heading1";

function Hero() {
  return (
    <section className="my-[5vw]">
      <div className="flex grid-cols-2 flex-col items-center px-[12vw] sm:px-28 md:px-44 lg:grid lg:px-24 xl:px-48">
        <div className="flex flex-col gap-5 pb-10 lg:p-14">
          <Heading1>Chase The New Flavor</Heading1>

          <h1 className="font-serif text-6xl font-semibold text-primary">
            The Key To Fine Dining
          </h1>

          <p className="text-2">
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus
          </p>

          <button className="btn">Explore Menu</button>
        </div>
        <img src={images.welcome} alt="hero" className="w-[450px] px-4" />
      </div>
    </section>
  );
}

export default Hero;
