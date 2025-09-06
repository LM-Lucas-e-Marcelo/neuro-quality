import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { exames } from "@/data/exams";
import { LucideIcon } from "lucide-react";

interface ExamCardProps {
  title: string;
  icon: LucideIcon;
  index: number;
  description: string
}

const ExamCard = ({ title, description, icon: Icon, index }: ExamCardProps) => (
  <Reveal delay={index * 50}>
    <div className="max-w-[400px] h-[170px] group block rounded-2xl border bg-gradient-to-br from-white to-indigo-50/40 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center gap-3">
        <div className="rounded-md bg-indigo-100 p-2 text-primary">
          <Icon className="size-5" />
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  </Reveal>
);

export const ExamsSection = () => {
  return (
    <section className="container py-20" id="exames">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">Nossos serviços</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Exames e serviços</h2>
          <p className="mt-3 text-muted-foreground">Tecnologia, precisão e conforto do início ao fim.</p>
        </div>
      </Reveal>
      <div className="mt-10 gap-6 flex items-center flex-wrap justify-center">
        {exames.map(({ title, icon, description }, index) => (
          <ExamCard key={title} title={title} icon={icon} description={description} index={index} />
        ))}
      </div>

    </section>
  );
};
