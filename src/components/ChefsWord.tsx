import { images } from "@/assets";
import Heading1 from "./shared/Heading1";

function ChefsWord() {
  return (
    <section className="flex items-center justify-center bg-texture py-20">
      <div className="mx-[8vw] flex grid-cols-2 flex-col items-center gap-16 sm:w-[500px] md:mx-0 md:grid md:w-[700px] md:items-start lg:w-[800px] xl:w-4/6">
        <img src={images.chef} alt="chef" className="w-[400px] md:w-auto" />

        <div className="order-first flex flex-col gap-10 md:order-none">
          <div>
            <Heading1 className="mb-2">Chef's Word</Heading1>
            <h2 className="heading-2">What We Believe In</h2>
          </div>

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
        </div>
      </div>
    </section>
  );
}

export default ChefsWord;
