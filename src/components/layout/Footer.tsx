import { SocialMedias } from "../social-medias";

export function Footer() {
  return (
    <footer id="contato" className="mt-24 border-t bg-gradient-to-r from-fuchsia-900 to-indigo-900 text-white">
      <div className="container grid gap-8 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F1b105275ec4c457cafc45b5767bbaac5%2F697e0d81c43e4e8c88fac829002d502a?format=webp&width=96"
              alt="Clínica NeuroQuality"
              className="h-8 w-8 rounded-lg object-contain"
            />
            <span className="font-extrabold tracking-tight text-lg">Clínica NeuroQuality</span>
          </div>
          <p className="mt-4 text-sm text-zinc-100 max-w-sm">
            Cuidado neurológico com excelência, tecnologia e acolhimento.
          </p>
          <SocialMedias />
        </div>
        <div>
          <h4 className="font-semibold">Atendimento</h4>
          <ul className="mt-3 space-y-2 text-sm text-zinc-100">
            <li>Seg–Sex: 08h às 18h</li>
            <li>WhatsApp: (21) 2035-0171</li>
            <li>Email: info@neuroquality.com</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Endereço</h4>
          <ul className="mt-3 space-y-2 text-zinc-100">
            <li>Rua Visconde de Pirajá, 595. Sala 705.</li>
            <li>Ipanema. Rio de Janeiro - RJ.</li>
          </ul>
        </div>
      </div>
      <div className="border-t py-6 text-center text-zinc-100">
        © {new Date().getFullYear()} Clínica NeuroQuality. Todos os direitos reservados.
      </div>
    </footer>
  );
}
