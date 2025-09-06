import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { Star } from "lucide-react";
import { SocialMedias } from "../social-medias";

export const HeroSection = () => {
  const redirectToWhatsapp = () => {
    window.open('https://wa.me/552120350171', '_blank')
  }
  return (
    <section className="relative overflow-hidden">
      <div className="bg-[url(/hero.jpg)] absolute inset-0 bg-cover bg-center blur-sm -z-20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-fuchsia-100/70 to-indigo-100/70" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-300/30 blur-3xl" />
      <div className="absolute -bottom-10 -left-10 h-80 w-80 rounded-full bg-indigo-300/30 blur-3xl" />
      <div className="container py-20 md:py-28 grid items-center gap-10 md:grid-cols-2">
        <Reveal>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              <Star className="size-3 text-yellow-500" /> 5.0 no Google
            </span>
            <h1 className="mt-4 text-4xl/tight font-extrabold tracking-tight md:text-5xl/tight">
              Cuidar de você é a nossa prioridade
            </h1>
            <p className="mt-4 text-zinc-700 max-w-prose">
            A NeuroQuality foi pensada para o atendimento exclusivo e personalizado, exames e consultas com hora marcada, profissionais humanizados, atentos e preocupados em proporcionar o melhor diagnóstico e tratamento. Prezamos pelo atendimento ético, humanizado, eficaz e seguro para cada paciente. Contamos com profissionais especializados com experiência e constante aperfeiçoamento.
            </p>
            <SocialMedias/>
            <div id="agendar" className="mt-8 flex flex-wrap gap-3">
              <Button onClick={redirectToWhatsapp} className="shadow-lg shadow-fuchsia-500/20">Agendar consulta</Button>
              <Button variant="secondary">
                Resultado de exames
              </Button>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="relative mx-auto max-w-md">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 via-fuchsia-200/40 to-indigo-100 p-2 shadow-xl">
              <div className="h-full w-full rounded-xl bg-white/80 backdrop-blur p-6 grid place-items-center bg-[url(/doctor.jpg)] bg-cover bg-center"/>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
