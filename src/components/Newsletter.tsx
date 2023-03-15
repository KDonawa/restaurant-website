import Heading1 from "./shared/Heading1";
import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <div className="flex flex-col items-center gap-2">
        <Heading1 spoonPos="center">Newsletter</Heading1>
        <h2 className="heading-2 tracking-wide">Subscribe To Our Newsletter</h2>
      </div>

      <div className="text-xs text-gray-light">
        And never miss the latest updates!
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-2 flex w-full flex-col items-center gap-2 sm:flex-row sm:gap-4"
      >
        <input
          className="h-10 w-full border border-primary bg-transparent py-2 px-3 font-serif text-sm text-gray-light"
          placeholder="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button className="btn">Subscribe</button>
      </form>
    </div>
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setEmail("");
  }
}

export default Newsletter;
