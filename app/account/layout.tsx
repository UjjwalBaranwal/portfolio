import Link from "next/link";
import SideNavigation from "../_components/Sidebar";

export default async function Layout({ children }) {
  return (
    <div className="container max-w-screen-xl  mx-auto my-3   bg-gray-900 text-white">
      <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
        <SideNavigation />
        <div className="py-1">{children}</div>
      </div>
    </div>
  );
}
