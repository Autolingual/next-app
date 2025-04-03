/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Shop() {
  return (
    <section className="w-full py-12">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6 max-w-xl mx-auto lg:max-w-none">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="grid gap-1">
            <h1 className="text-2xl font-bold tracking-tight">
              Shop by Category
            </h1>
            <p className="text-muted-foreground">
              Explore our wide range of product categories and discover the
              perfect items for your needs. From fashion to electronics, home
              decor to outdoor gear, we have it all. Browse through our
              extensive selection and find the products that speak to your style
              and interests.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="grid gap-6 relative group">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Clothing"
              width={450}
              height={600}
              className="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
            />
            <div className="grid gap-1">
              <h3 className="font-semibold">Clothing</h3>
              <p className="text-sm leading-none">
                Discover the latest fashion trends and update your wardrobe with
                our curated collection of stylish and high-quality clothing.
              </p>
            </div>
          </div>
          <div className="grid gap-6 relative group">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Electronics"
              width={450}
              height={600}
              className="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
            />
            <div className="grid gap-1">
              <h3 className="font-semibold">Electronics</h3>
              <p className="text-sm leading-none">
                Upgrade your tech with our latest gadgets and electronics. From
                smartphones and laptops to home appliances and entertainment
                systems, we have everything you need to stay connected and
                entertained.
              </p>
            </div>
          </div>
          <div className="grid gap-6 relative group">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Home & Garden"
              width={450}
              height={600}
              className="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
            />
            <div className="grid gap-1">
              <h3 className="font-semibold">Home & Garden</h3>
              <p className="text-sm leading-none">
                Transform your living space with our wide selection of home
                decor, furniture, and gardening supplies. Create a cozy and
                inviting atmosphere in your home or outdoor space.
              </p>
            </div>
          </div>
          <div className="grid gap-6 relative group">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Beauty & Personal Care"
              width={450}
              height={600}
              className="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
            />
            <div className="grid gap-1">
              <h3 className="font-semibold">Beauty & Personal Care</h3>
              <p className="text-sm leading-none">
                Pamper yourself with our premium selection of beauty and
                personal care products. From skincare and makeup to haircare and
                wellness items, we have everything you need to look and feel
                your best.
              </p>
            </div>
          </div>
          <div className="grid gap-6 relative group">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Sports & Outdoors"
              width={450}
              height={600}
              className="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
            />
            <div className="grid gap-1">
              <h3 className="font-semibold">Sports & Outdoors</h3>
              <p className="text-sm leading-none">
                Gear up for your next adventure with our extensive collection of
                sports and outdoor equipment. From camping and hiking gear to
                fitness and workout essentials, we have everything you need to
                explore the great outdoors.
              </p>
            </div>
          </div>
          <div className="grid gap-6 relative group">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Toys & Games"
              width={450}
              height={600}
              className="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
            />
            <div className="grid gap-1">
              <h3 className="font-semibold">Toys & Games</h3>
              <p className="text-sm leading-none">
                Discover the perfect playtime essentials for kids and adults
                alike. From classic board games and puzzles to the latest video
                games and interactive toys, we have something for every age and
                interest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
