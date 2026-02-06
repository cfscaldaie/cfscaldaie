
"use client";

import { useState } from "react";
import { MenuItem } from "@/app/types/siteSettings";
type Props = {
  phone:string;
  email:string
  title: string;
  menu: MenuItem[];
  imageUrl: string;
};

export default function Header({phone,email, title, menu, imageUrl }: Props) {
  const [open, setOpen] = useState(false);
  
  
  return (
    <header className="sticky top-0 shadow z-50" >

      {/* TOP BAR */}
      <div className="bg-gray-100 text-sm py-2 text-white" style={{ backgroundColor: "#cd2e28" }}>
        <div className="max-w-7xl mx-auto px-6 flex justify-end gap-6">

          <a
            href="tel:{data.phone}"
            className="hover:text-gray-600"
          >
            {phone}
          </a>

          <a
            href="mailto:{data.email}"
            className="hover:text-gray-600"
          >
            {email}
          </a>

        </div>
      </div>

      {/* HEADER PRINCIPALE */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between" style={{ backgroundColor: "white" }}>

        {/* Logo + Titolo */}
        <div className="flex items-center gap-4">
          <img
            src={imageUrl}
            className="h-16 w-auto object-contain"
            alt="Logo"
          />
          <div className="h-16 flex items-center">
          <h1 className="font-bold text-xl">{title}</h1>
          </div>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-6">
          {menu.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Hamburger Mobile */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="md:hidden bg-white shadow px-6 py-4 space-y-3">
          {menu.map((item) => (
            <a key={item.href} href={item.href} className="block">
              {item.label}
            </a>
          ))}
        </div>
      )}

    </header>
  );
}
