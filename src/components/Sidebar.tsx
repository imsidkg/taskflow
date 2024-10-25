import Image from "next/image";
import Link from "next/link";
import { DottedSeparator } from "./DottedSeperator";
import { Navigation } from "./Navigationt";



export const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-100 p-4 w-full">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={100} height={100} />
      </Link>
      <DottedSeparator className="my-4" />
      {/* <WorkspaceSwitcher /> */}
      <DottedSeparator className="my-4" />
      <Navigation />
    </aside>
  );
};