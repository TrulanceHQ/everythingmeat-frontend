import React from "react";
import { Links } from "../data/defaultLeftLinks";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

type Props = {
  onSectionClick: (cardLink: string) => void;
  activeComponent: string;
};

const LinkButtons = ({ onSectionClick, activeComponent }: Props) => {
  return Links.map((link, index) => (
    <div className="my-3 md:my-4" key={index}>
      <button
        className={`border rounded-lg w-full shadow-sm text-left py-4 px-4 font-normal text-base ${
          activeComponent === link.component
            ? "bg-[#FFBA35] text-[#101010]"
            : "bg-white text-[#101010] border-[#878787]"
        }`}
        onClick={() => onSectionClick(link.component)}
      >
        {link.title}
      </button>
    </div>
  ));
};

const DefaultLeft = ({ onSectionClick, activeComponent }: Props) => {
  return (
    <div>
      {/* Desktop view */}
      <div className="hidden md:block">
        <LinkButtons
          onSectionClick={onSectionClick}
          activeComponent={activeComponent}
        />
      </div>

      {/* Mobile menu */}
      <div className="block md:hidden">
        <Sheet>
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-10 w-10" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <LinkButtons
              onSectionClick={onSectionClick}
              activeComponent={activeComponent}
            />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default DefaultLeft;
