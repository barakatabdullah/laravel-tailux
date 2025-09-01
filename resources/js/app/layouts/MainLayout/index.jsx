// Import Dependencies
import clsx from "clsx";
import { Outlet } from "react-router";

// Local Imports
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

// ----------------------------------------------------------------------

export default function MainLayout({children}) {
  return (
    <>
      <Header />
      <main
        className={clsx("main-content transition-content grid grid-cols-1")}
      >
          {children}
      </main>
      <Sidebar />
    </>
  );
}
