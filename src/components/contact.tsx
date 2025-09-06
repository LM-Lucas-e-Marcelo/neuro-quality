
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Reveal } from "./Reveal";

export const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-muted/30">
      <Reveal>
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estamos aqui para ajudar você. Agende sua consulta ou tire suas
              dúvidas
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle>Localização</CardTitle>
            </CardHeader>
            <CardContent>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14692.314029467663!2d-43.2128589!3d-22.9841404!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd5c684cf5265%3A0x7d8dd0e9197cc34a!2sCl%C3%ADnica%20NeuroQuality!5e0!3m2!1spt-BR!2sbr!4v1757167589395!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </CardContent>
            </Card>
            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">
                      Telefone
                    </h3>
                    <p className="text-muted-foreground">
                      <a href="tel:2120350171">(21) 2035-0171</a>
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">E-mail</h3>
                    <a
                      href="mailto:info@neuroquality.com"
                      className="text-muted-foreground"
                    >
                      info@neuroquality.com
                    </a>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Endereço
                      </h3>
                      <p className="text-muted-foreground">
                        Ipanema, Rio de Janeiro – RJ.
                        <br />
                        Rua Visconde de Pirajá, 595. Sala 705.
                        <br />
                        CEP: 22410-003.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Horário de Funcionamento
                      </h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p>Segunda a Sexta: 8h às 17h</p>
                        <p>Sábado: 08h às 12h</p>
                        <p>Domingo: Fechado</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
