import { trustOtpions } from "@/data/trust-reasons";
import { Reveal } from "../Reveal";
import { SPECIALTIES } from "@/data/specialties";




export const SpecialtiesSection = () => {
  return (
    <section className="py-16 bg-gradient-to-t from-white to-zinc-50">
      <Reveal>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Especialidades</h2>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 justify-center">
            {SPECIALTIES.map((value, index) => (
              <div
                key={index}
                className="flex items-center flex-col gap-2 rounded-2xl border bg-gradient-to-br from-white to-indigo-50/40 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg w-[300px]"
              >
                <div className="rounded-md bg-indigo-100 p-2 shrink-0 text-primary">
                  <value.icon size={28} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-gray-600 text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};
