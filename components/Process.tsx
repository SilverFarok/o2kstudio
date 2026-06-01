import { processSteps } from "@/content/landing";

export function Process() {
  return (
    <section id="process" className="section-space scroll-mt-8 bg-ink text-white" aria-labelledby="process-heading">
      <div className="container-page">
        <div className="max-w-3xl">
          <h2 id="process-heading" className="text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
            A clear path from website review to practical improvements
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            No long discovery process. I review your current website, identify the most
            useful fixes, and help you decide what should be improved first.
          </p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-md bg-white/15 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="min-h-64 bg-ink p-6 transition-colors hover:bg-[#102a56] lg:p-7"
            >
              <p className="text-sm font-bold tracking-[0.16em] text-blue-300">0{index + 1}</p>
              <h3 className="mt-6 text-lg font-bold leading-7 tracking-[-0.02em]">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
