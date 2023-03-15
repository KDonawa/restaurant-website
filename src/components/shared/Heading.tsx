import SubHeading from "./SubHeading";

type Props = {
  main: string;
  sub: string;
  align?: "left" | "right" | "center";
};

function Heading({ main, sub, align = "left" }: Props) {
  let alignment = "items-start";
  if (align === "right") alignment = "items-end";
  if (align === "center") alignment = "items-center";
  return (
    <div className={`flex flex-col gap-2 ${alignment}`}>
      <SubHeading spoonPos={align}>{sub}</SubHeading>
      <h2 className="heading-2 tracking-wide">{main}</h2>
    </div>
  );
}

export default Heading;
