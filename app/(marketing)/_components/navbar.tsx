import Link from "next/link";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const switchToApp2 = () => {
    // Redirect to the second app (http://localhost:3001)
    window.location.href = 'http://localhost:3001/documents';
  };

  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant="outline" asChild>
            <Link href="/sign-in">
              Login
            </Link>
          </Button>
          <Button
            onClick={switchToApp2}
            variant="outline"
            size="sm"
            className="transition duration-300"
          >
              Noter
          </Button>
        </div>
      </div>
    </div>
  );
};
