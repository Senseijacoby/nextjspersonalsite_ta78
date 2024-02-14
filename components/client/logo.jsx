import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image
          src="/assets/logo.svg"
          alt="Logo"
          height={50}
          width={60}
           className="h-15 w-15"
        />
        <p className= "text-3xl text-neutral-700 pb-1 font-signature">
          Jacoby.inc&#8482;
        </p>
      </div>
    </Link>
  );
};