import { useState } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";

const navLinks = [
  { label: "Products", items: ["Vercel", "Next.js", "Analytics", "Edge Network"] },
  { label: "Solutions", items: ["Startups", "Enterprise", "Ecommerce", "AI"] },
  { label: "Resources", items: ["Docs", "Templates", "Examples", "Changelog"] },
  { label: "Pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="#" className="inline-flex items-center gap-2">
              <div className="h-5 w-5 rotate-45 bg-white"></div>
              <span className="text-white text-base font-semibold">Vercel</span>
            </a>

            <nav className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <div key={link.label} className="relative">
                  <button
                    onMouseEnter={() => setActive(link.label)}
                    onMouseLeave={() => setActive(null)}
                    className="text-sm text-white/80 hover:text-white px-3 py-2 rounded-md inline-flex items-center gap-1"
                  >
                    {link.label}
                    {link.items && <ChevronDown className="h-4 w-4" />}
                  </button>
                  {link.items && active === link.label && (
                    <div onMouseEnter={() => setActive(link.label)} onMouseLeave={() => setActive(null)} className="absolute left-0 mt-2 w-64 rounded-xl border border-white/10 bg-black/90 p-3 shadow-2xl">
                      <ul className="space-y-1">
                        {link.items.map((item) => (
                          <li key={item}>
                            <a href="#" className="block rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/5">{item}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80 hover:bg-white/10">
              <Search className="h-4 w-4" />
              Search
            </button>
            <a href="#" className="text-sm text-white/80 hover:text-white">Log in</a>
            <a href="#" className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90">Sign up</a>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 py-3">
            <div className="flex flex-col gap-2 pb-3">
              {navLinks.map((link) => (
                <button key={link.label} className="text-left px-2 py-2 rounded-md text-white/80 hover:bg-white/5">
                  {link.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10 inline-flex items-center gap-2">
                <Search className="h-4 w-4" />
                Search
              </button>
              <a href="#" className="text-sm text-white/80">Log in</a>
              <a href="#" className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-black">Sign up</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
