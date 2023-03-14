import { images } from "@/assets";

type Props = {
  children: React.ReactElement | string;
  className?: string;
  spoonPos?: "left" | "right" | "center";
};

function Heading1({ children, className, spoonPos = "left" }: Props) {
  let pos = "";
  if (spoonPos === "right") pos = "ml-auto rotate-180";
  if (spoonPos === "center") pos = "mx-auto";

  return (
    <div className={className}>
      <div className="flex w-fit flex-col gap-1">
        <span className="font-serif font-semibold">{children}</span>
        <img src={images.spoon} alt="spoon" className={`w-8 ${pos}`} />
      </div>
    </div>
  );
}

export default Heading1;
