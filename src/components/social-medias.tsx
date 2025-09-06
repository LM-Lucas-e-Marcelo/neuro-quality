import {
  RiFacebookBoxLine,
  RiInstagramLine,
  RiWhatsappLine,
  RiMapPin2Line,
} from "react-icons/ri";

export const SocialMedias = () => {
  return (
    <ul className="flex gap-3 text-white mt-6">
      <li className="p-2 rounded-md bg-primary hover:scale-125 transition-transform duration-300">
        <a
          href="https://www.instagram.com/neuro.quality/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiInstagramLine size={24} />
        </a>
      </li>
      <li className="p-2 rounded-md bg-primary hover:scale-125 transition-transform duration-300">
        <a
          href="https://www.facebook.com/neuro.quality/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiFacebookBoxLine size={24} />
        </a>
      </li>
      <li className="p-2 rounded-md bg-primary hover:scale-125 transition-transform duration-300">
        <a
          href="https://wa.me/552120350171"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiWhatsappLine size={24} />
        </a>
      </li>
      <li className="p-2 rounded-md bg-primary hover:scale-125 transition-transform duration-300">
        <a
          href="https://www.google.com/maps/place/Cl%C3%ADnica+NeuroQuality/@-22.9841404,-43.2128589,15z/data=!4m6!3m5!1s0x9bd5c684cf5265:0x7d8dd0e9197cc34a!8m2!3d-22.9841404!4d-43.2128589!16s%2Fg%2F11tcq0100_?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiMapPin2Line size={24} />
        </a>
      </li>
    </ul>
  );
};
