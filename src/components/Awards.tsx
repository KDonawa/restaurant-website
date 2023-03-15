import { images } from "@/assets";
import { awards } from "@/data";
import Heading from "./shared/Heading";

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

          <ul className="grid gap-x-5 gap-y-10 sm:grid-cols-2">
            {awards.map((award, i) => (
              <Award
                key={i}
                imageUrl={award.imageUrl}
                title={award.title}
                subtitle={award.subtitle}
              />
            ))}
          </ul>
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
    <li className="flex w-fit gap-2">
      <img src={imageUrl} alt="award" className="h-12 w-12" />
      <div className="flex flex-col">
        <span className="text-1">{title}</span>
        <span className="text-3">{subtitle}</span>
      </div>
    </li>
  );
}

export default Awards;
