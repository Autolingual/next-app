/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  CodeIcon,
  DatabaseIcon,
  HeadphonesIcon,
  MountainIcon,
} from "@/components/icons";

export default function Corporation() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link href="#" className="flex items-center" prefetch={false}>
          <MountainIcon className="h-6 w-6 text-primary" />
          <span className="ml-2 text-lg font-semibold">Acme Corp</span>
        </Link>
        <nav className="ml-auto hidden lg:flex gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:text-primary transition-colors"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:text-primary transition-colors"
            prefetch={false}
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:text-primary transition-colors"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:text-primary transition-colors"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <button className="ml-6 hidden lg:inline-flex">Get Started</button>
      </header>
      <main className="flex-1">
        <section className="bg-black from-primary to-primary-foreground py-20 sm:py-32 lg:py-40">
          <div className="container mx-auto px-4 md:px-6 text-center text-white">
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
              Powering Businesses with Innovative Solutions
            </h1>
            <p className="mt-4 text-lg sm:text-xl lg:text-2xl">
              Discover how Acme Corp can transform your business.
            </p>
            <div className="mt-8">
              <button>Learn More</button>
            </div>
          </div>
        </section>
        <section className="py-12 sm:py-20 lg:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold">Our Services</h2>
                <p className="mt-4 text-muted-foreground">
                  Acme Corp offers a wide range of services to help your
                  business succeed. From strategy and consulting to
                  implementation and support, weve got you covered.
                </p>
                <div className="mt-6">
                  <Link
                    href="#"
                    className="inline-flex items-center text-primary hover:text-primary-foreground transition-colors"
                    prefetch={false}
                  >
                    Learn More <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted rounded-md p-4">
                  <BriefcaseIcon className="h-8 w-8 text-primary" />
                  <h3 className="mt-2 text-lg font-semibold">Consulting</h3>
                  <p className="mt-2 text-muted-foreground">
                    Get expert guidance to achieve your business goals.
                  </p>
                </div>
                <div className="bg-muted rounded-md p-4">
                  <CodeIcon className="h-8 w-8 text-primary" />
                  <h3 className="mt-2 text-lg font-semibold">Development</h3>
                  <p className="mt-2 text-muted-foreground">
                    Bring your ideas to life with our skilled developers.
                  </p>
                </div>
                <div className="bg-muted rounded-md p-4">
                  <DatabaseIcon className="h-8 w-8 text-primary" />
                  <h3 className="mt-2 text-lg font-semibold">Data Solutions</h3>
                  <p className="mt-2 text-muted-foreground">
                    Unlock the power of your data with our analytics solutions.
                  </p>
                </div>
                <div className="bg-muted rounded-md p-4">
                  <HeadphonesIcon className="h-8 w-8 text-primary" />
                  <h3 className="mt-2 text-lg font-semibold">Support</h3>
                  <p className="mt-2 text-muted-foreground">
                    Get the support you need to keep your business running.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 sm:py-20 lg:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="400"
                  alt="About"
                  className="rounded-md object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold">About Acme Corp</h2>
                <p className="mt-4 text-muted-foreground">
                  Acme Corp is a leading provider of innovative business
                  solutions. With over 20 years of experience, weve helped
                  countless organizations achieve their goals and reach new
                  heights.
                </p>
                <p className="mt-4 text-muted-foreground">
                  Our team of experts is dedicated to delivering exceptional
                  service and tailored solutions to meet the unique needs of
                  each client. Were passionate about empowering businesses and
                  driving their success.
                </p>
                <div className="mt-6">
                  <Link
                    href="#"
                    className="inline-flex items-center text-primary hover:text-primary-foreground transition-colors"
                    prefetch={false}
                  >
                    Learn More <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6 border-t">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center">
            <MountainIcon className="h-6 w-6 text-primary" />
            <span className="ml-2 text-sm font-medium">Acme Corp</span>
          </div>
          <nav className="mt-4 md:mt-0 flex gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
              prefetch={false}
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
              prefetch={false}
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
