import { images } from "@/assets";
import { useRef } from "react";
import {
  BsArrowLeftShort,
  BsArrowRightShort,
  BsInstagram,
} from "react-icons/bs";
import Heading from "./shared/Heading";

function Gallery() {
  const scrollRef = useRef<HTMLUListElement>(null);

  return (
    <section className="flex items-center justify-center py-20">
      <div className="flex w-9/12 grid-cols-3 flex-col items-center gap-20 lg:grid lg:gap-10">
        {/* Description */}
        <div className="col-span-1 flex flex-col gap-5 self-center">
          <Heading main="Photo Gallery" sub="Instagram" />

          <p className="text-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
            mattis ipsum turpis elit elit scelerisque egestas mu.
          </p>

          <button className="btn">View More</button>
        </div>

        {/* Gallery */}
        <div className="relative col-span-2 h-[350px] w-[230px] select-none justify-self-center sm:h-[300px] sm:w-[460px] md:w-[680px] lg:w-[460px] xl:w-[680px]">
          <BsArrowLeftShort
            className="absolute bottom-3 left-2 z-10 h-7 w-7 cursor-pointer rounded-sm bg-black"
            onClick={scrollLeft}
          />

          <ul
            className="carousel flex h-full gap-5 overflow-x-scroll scroll-smooth"
            ref={scrollRef}
          >
            {[
              images.gallery01,
              images.gallery02,
              images.gallery03,
              images.gallery04,
            ].map((imageUrl, i) => {
              return <Photo key={i} imageUrl={imageUrl} />;
            })}
          </ul>

          <BsArrowRightShort
            className="absolute bottom-3 right-2 z-10 h-7 w-7 cursor-pointer rounded-sm bg-black"
            onClick={scrollRight}
          />
        </div>
      </div>
    </section>
  );

  function scrollLeft() {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 220;
    }
  }
  function scrollRight() {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 220;
    }
  }
}

function Photo({
  imageUrl,
  className,
}: {
  imageUrl: string;
  className?: string;
}) {
  return (
    <div className={`relative shrink-0 cursor-pointer ${className}`}>
      <img
        src={imageUrl}
        alt="gallery"
        className="h-full w-[200px] object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 opacity-0 hover:bg-opacity-80 hover:opacity-100">
        <BsInstagram className="h-6 w-6" />
      </div>
    </div>
  );
}

export default Gallery;
