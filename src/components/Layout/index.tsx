import { cn } from "@/lib/utils";
import { ScrollArea } from "../ui/scroll-area";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const Layout = () => {
  return (
    <ScrollArea className={cn("min-h-[100vh] min-w-[100vw] overflow-y-scroll")}>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </ScrollArea>
  );
};

export default Layout;
