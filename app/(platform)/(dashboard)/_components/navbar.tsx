"use client"

import { Plus } from "lucide-react";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { FormPopover } from "@/components/form/form-popover";

import { MobileSidebar } from "./mobile-sidebar";

export const Navbar = () => {
  const switchToApp2 = () => {
    // Redirect to the second app (http://localhost:3001)
    window.location.href = 'http://localhost:3001/documents';
  };

  return (
    <nav className="fixed z-50 top-0 px-4 w-full h-14 border-b shadow-sm bg-white flex items-center">
      <MobileSidebar />
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>
        <FormPopover align="start" side="bottom" sideOffset={18}>
          <Button variant="primary" size="sm" className="rounded-sm hidden md:block h-auto  py-1.5 px-2">
            Create
          </Button>
        </FormPopover>
        <FormPopover>
          <Button variant="primary" size="sm" className="rounded-sm block md:hidden">
            <Plus className="h-4 w-4" />
          </Button>
        </FormPopover>
      </div>
      
      <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl="/organization/:id"
          afterLeaveOrganizationUrl="/select-org"
          afterSelectOrganizationUrl="/organization/:id"
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
          }}
        />

        <Button 
          onClick={switchToApp2}
          variant="outline"
          size="sm"
          className="mr-2 transition duration-300"
        >
          Noter
        </Button>
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: {
                height: 30,
                width: 30,
              }
            }
          }}
        />
      </div>
    </nav>
  );
};
