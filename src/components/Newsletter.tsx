import { useState } from "react";
import Heading from "./shared/Heading";

function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <Heading
        main="Subscribe To Our Newsletter"
        sub="Newsletter"
        align="center"
      />

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
