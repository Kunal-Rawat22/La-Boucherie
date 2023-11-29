import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <Link
        className="text-primary text-3xl font-semibold flex gap-3 items-center"
        href={""}
      >
        <Image
          src={"/logo.png"}
          objectFit="contain"
          width={100}
          height={100}
          alt={"Salad"}
        />
        {/* <Image
          src={"/logo.png"}
          objectFit="contain"
          width={70}
          height={70}
          alt={"Salad"}
        />
        La Boucherie */}
      </Link>
      <nav className="flex gap-8 text-lg text-gray-500 font-semibold items-center">
        <Link href={""} className="">
          Home
        </Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
        <Link
          href={""}
          className="bg-primary px-8 py-2 text-white rounded-full"
        >
          Login
        </Link>
      </nav>
    </header>
  );
}
