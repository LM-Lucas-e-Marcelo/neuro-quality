import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { Instagram, PhoneCall } from "lucide-react";

export const CTASection = () => {
  const redirectToWhatsapp = () => {
    window.open('https://wa.me/552120350171', '_blank')
  }

  return (
    <section className="container py-16">
      <Reveal>
        <div className="rounded-3xl border bg-gradient-to-br from-primary/10 via-fuchsia-100 to-indigo-50 p-8 md:p-12">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold">A sua qualidade de vida depende da sua saúde!</h3>
              <p className="mt-2 text-muted-foreground">Agende agora e receba atendimento acolhedor e ágil.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button onClick={redirectToWhatsapp}>Agendar agora</Button>
                <Button variant="secondary" asChild>
                  <a href="https://www.instagram.com/neuro.quality/" target="_blank" className="inline-flex items-center gap-2">
                    <Instagram className="size-4"/> Siga @neuro.quality
                  </a>
                </Button>
              </div>
            </div>
            <div className="mx-auto w-full max-w-sm">
              <div className="aspect-video rounded-xl bg-white p-4 shadow-md">
                <div className="h-full w-full grid place-items-center rounded-lg bg-fuchsia-50 text-primary">
                  <PhoneCall className="size-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
