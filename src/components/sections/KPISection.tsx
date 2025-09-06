import { Reveal } from "@/components/Reveal";
import { kpis } from "@/data/kpis";
import { LucideIcon } from "lucide-react";

interface KPICardProps {
  label: string;
  value: string;
  icon: LucideIcon;
}

const KPICard = ({ label, value, icon: Icon }: KPICardProps) => (
  <Reveal>
    <div className="group rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-center gap-3">
        <div className="rounded-md bg-indigo-100 p-2 text-primary group-hover:scale-110 transition">
          <Icon className="size-5" />
        </div>
        <div>
          <div className="text-2xl font-bold">{value}</div>
          <div className="text-xs text-muted-foreground">{label}</div>
        </div>
      </div>
    </div>
  </Reveal>
);

export const KPISection = () => {
  return (
    <section className="container -mt-10 md:-mt-12">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map(({ label, value, icon }) => (
          <KPICard key={label} label={label} value={value} icon={icon} />
        ))}
      </div>
    </section>
  );
};
