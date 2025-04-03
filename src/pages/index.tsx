import Link from "next/link";
import Modal from "@/components/Modal";
import DynamicText from "@/components/DynamicText";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <header>
        <h1 className="text-4xl font-bold">Welcome to Example.</h1>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h2 className="text-xl font-bold">
          This is the example for the Autolingual.
        </h2>
        <div className="underline underline-offset-2 text-blue-500 grid">
          <Link href="/about">About Page &#40; &lt;Link&gt; &#41;</Link>
          <a href="/about">About Page &#40; &lt;a&gt; &#41;</a>
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-700 mb-1">Demo Pages</p>
          <ul className="text-blue-500 underline underline-offset-2 list-disc list-inside">
            <li>
              <Link href="/shop">
                Shop Page <span>→</span>
              </Link>
            </li>
            <li>
              <Link href="/corporation">
                Corporation Page <span>→</span>
              </Link>
            </li>
          </ul>
        </div>
        <DynamicText />
        <Modal />
      </main>
    </div>
  );
}
