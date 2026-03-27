"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/#work", label: "Work" },
    { href: "/#about", label: "About" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[color:var(--surface-strong)]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          href="/"
          className="font-[family:var(--font-display)] text-lg uppercase tracking-[0.28em] text-[color:var(--text-primary)]"
        >
          Code on Demand
        </Link>
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">
          {links.map((link) => {
            const isActive =
              link.href === "/projects" ? pathname === "/projects" : pathname === "/";

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-[color:var(--accent)] text-[color:var(--surface)]"
                    : "text-[color:var(--text-muted)] hover:text-[color:var(--text-primary)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
