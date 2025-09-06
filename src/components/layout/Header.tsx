import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Phone, Stethoscope, Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Início" },
  { to: "#exames", label: "Exames" },
  { to: "#sobre", label: "Sobre nós" },
  { to: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full overflow-hidden text-white">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-fuchsia-900 to-indigo-900" />
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F1b105275ec4c457cafc45b5767bbaac5%2F697e0d81c43e4e8c88fac829002d502a?format=webp&width=96"
            alt="Clínica NeuroQuality"
            className="h-8 w-8 rounded-lg object-contain"
          />
          <span className="font-extrabold tracking-tight text-lg">Clínica NeuroQuality</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((n) => {
            const isAnchor = n.to.startsWith("#");
            if (isAnchor) {
              return (
                <a key={n.to} href={n.to} className="text-white hover:underline transition-colors">
                  {n.label}
                </a>
              );
            }
            return (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  cn(
                    "text-white hover:underline transition-colors",
                    isActive && "text-white font-semibold",
                  )
                }
              >
                {n.label}
              </NavLink>
            );
          })}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Button asChild className="gap-2">
            <a href="https://wa.me/552120350171">
              <Stethoscope className="size-4" /> Agendar consulta
            </a>
          </Button>
        </div>
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md border"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white/90">
          <div className="container py-3 grid gap-2">
            {nav.map((n) => (
              <a
                key={n.to}
                href={n.to}
                className="py-2 text-foreground/80 hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <Button asChild variant="ghost" className="flex-1">
                <a href="#contato"><Phone className="mr-2 size-4"/>WhatsApp</a>
              </Button>
              <Button asChild className="flex-1">
                <a href="#agendar">Agendar</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
