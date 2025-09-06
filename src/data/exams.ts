import { Brain, Stethoscope, ActivitySquare, Headphones, AudioLines } from "lucide-react";

export const exames = [
  { title: "Eletroencefalograma (EEG)", description: "Exame tipo EEG em vigília e sono, mapeamento cerebral, quantitativo de rotina, em vigília, prolongado e com provas de estimulação. Realizado em adultos e crianças.", icon: ActivitySquare },
  { title: "Vídeo Eletroencefalograma Contínuo (VEEG)", description: "Exame tipo VEEG prolongado com diferentes tempos de registro como de 4h, 8h e 12h. Realizado em adultos e crianças.", icon: Brain },
  { title: "Polissonografia (PSG)", description: "Exame PSG tipo 1, 2 e 3, com montagem basal, respiratória, com titulação de CPAP/BiPAP, teste de múltiplas latências para o sono (TLMS). Realizado em adultos e crianças.", icon: Stethoscope },
  { title: "Audiometria", description: "Tonal, vocal e imitanciometria para adultos e crianças.", icon: Headphones },
  { title: "Avaliação PAC", description: "Exame de Avaliação do Processamento Auditivo (PAC) para adultos e crianças.", icon: AudioLines },
];
