"use client";

import { useState } from "react";
import { MenuItem } from "@/app/types/siteSettings";

type Props = {
  phone: string;
  email: string;
  title: string;
  menu: MenuItem[];
  imageUrl: string;
};

export default function Header({ phone, email, title, menu, imageUrl }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 shadow z-50" style={{ backgroundColor: "#cd2e28" }}>
      {/* TOP BAR - Espande fino al bordo */}
      <div className="bg-gray-100 text-sm py-2 text-white" style={{ backgroundColor: "#cd2e28" }}>
        <div className="max-w-7xl mx-auto px-6 flex justify-end gap-6">
          <a href={`tel:${phone}`} className="hover:text-gray-600">
            {phone}
          </a>
          <a href={`mailto:${email}`} className="hover:text-gray-600">
            {email}
          </a>
        </div>
      </div>
  <div 
        className="w-full h-[1px]" 
        style={{ backgroundColor: "#8b0000" }} // Rosso scuro (#8b0000)
      ></div>
      {/* HEADER PRINCIPALE - Espande fino al bordo */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Titolo */}
        <div className="flex items-center gap-4">
          <img
            src={imageUrl}
            className="h-16 w-auto object-contain"
            alt="Logo"
          />
          <div className="h-16 flex items-center">
            <h1 className="font-bold text-xl text-white">{title}</h1>
          </div>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-6">
          {menu.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white hover:text-gray-200 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Hamburger Mobile */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="md:hidden bg-white shadow px-6 py-4 space-y-3">
          {menu.map((item) => (
            <a key={item.href} href={item.href} className="block text-gray-800 hover:text-red-600">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}