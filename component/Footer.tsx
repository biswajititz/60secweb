import logo from "@/public/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

const cols = [
  { title: "Legal:", links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-&-conditions" },
      { label: "Contact Support", href: "/contact-support" },
    ],},
];



export function Footer() {
  return (
    <footer className=" text-background py-8 bg-gray-300 w-[95%] lg:container  mx-auto  rounded-4xl my-10">
      <div className=" ">
        <div className="flex flex-col justify-center items-center text-center px-0 sm:px-6 ">
          <div className="md:col-span-2">
            <div className="inline-flex items-center rounded-lg  p-2">
              <Link
                href="/"
                className="transition-colors hover:text-background"
              >
                <Image src={logo} alt="60Sec" className="h-9 w-auto" height={36} width={144} />
              </Link>
            </div>
            <p className="mt-4 max-w-sm text-sm text-black">
              Stay informed in 60 seconds. Breaking news, summarized for the way you live.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="flex flex-col sm:flex-row gap-6 md:gap-8 mt-8  items-center ">
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-blue-950">
                {c.title}
              </h4>

              <ul className=" space-y-2.5 text-sm text-black flex flex-row gap-3 sm:gap-6">
                {c.links.map((link) => (
                  <li key={link.label} className="transition-colors hover:text-blue-950 p-0 m-0">
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-blue-950 text-xs sm:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col-reverse md:flex-col items-center justify-between gap-4 border-t border-t-[#bcc0c7] pt-6 text-sm text-black md:flex-row px-6">
          <p>© 2026 60Sec. All Rights Reserved.</p>
          <p>Made for people who value their time.</p>
        </div>
      </div>
    </footer>
  );
}
