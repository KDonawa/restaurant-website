import { images } from "@/assets";

type Props = {
  children: React.ReactElement | string;
  className?: string;
};

function Heading1({ children, className }: Props) {
  return (
    <div className={className}>
      <div className="flex w-fit flex-col gap-1">
        <span className="font-serif font-semibold">{children}</span>
        <img src={images.spoon} alt="spoon" className="w-8" />
      </div>
    </div>
  );
}

export default Heading1;
