import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <nav className="flex gap-8 text-lg text-gray-500 font-semibold items-center">
        <Link
          className="text-primary text-3xl font-semibold flex gap-3 items-center"
          href={"/"}
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
        <Link href={"/"} className="">
          Home
        </Link>
        <Link href={""} className="">
          Menu
        </Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
      </nav>

      <nav className="flex gap-4 text-lg font-semibold items-center">
        <Link
          href={"/login"}
          className="bg-primary px-8 py-2 text-white rounded-full hover:border-primary hover:text-primary hover:border hover:bg-white  transition-all hover:shadow-2xl hover:shadow-black/25"
        >
          Login
        </Link>
        <Link
          href={"/register"}
          className="border-primary border px-8 py-2 text-primary rounded-full hover:bg-primary hover:text-white transition-all hover:shadow-2xl hover:shadow-black/25 "
        >
          Register
        </Link>
      </nav>
    </header>
  );
}
