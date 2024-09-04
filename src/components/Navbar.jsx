"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const links = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contacts",
      path: "/contacts",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
    {
      title: "Meals",
      path: "/meals",
    },
    {
      title: "Categories",
      path: "/categories",
    },
    {
      title: "Dashboard",
      path: "/dashboard",
    },
  ];
  const handle = () => {
    router.push("/signUp");
  };

  if(pathName.includes('dashboard')) return(
    <nav className="flex items-center justify-between p-4 bg-gray-900 shadow-lg">
      <h4 className="text-2xl font-bold text-white">
        <Link href="/">Dashboard</Link>
      </h4>

      

      <button className="px-4 py-2 text-white transition-colors duration-300 bg-red-600 rounded-md hover:bg-red-700">
        Logout
      </button>
    </nav>
  )
  return (
    <nav className="flex items-center justify-between p-4 text-white bg-gray-800 shadow-lg">
      <h4 className="text-2xl font-bold">
        <Link href="/">Next Hero</Link>
      </h4>

      <ul className="flex space-x-5">
        {links?.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`${
              pathName === link.path ? "text-gray-400 underline" : ""
            }`}
          >
            {link.title}
          </Link>
        ))}
      </ul>

      <button
        className="px-4 py-2 transition-colors duration-300 bg-blue-600 rounded-md hover:bg-blue-700"
        onClick={handle}
      >
        Sign Up
      </button>
    </nav>
  );
};

export default Navbar;
