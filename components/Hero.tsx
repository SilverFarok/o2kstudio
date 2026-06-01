import { auditMailto } from "@/content/landing";

const reviewItems = [
  ["Mobile usability", "Needs attention"],
  ["Service clarity", "Review"],
  ["RFQ path", "Improve"],
];

export function Hero() {
  return (
    <section className="overflow-hidden border-b border-line">
      <div className="container-page grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16 lg:py-24">
        <div>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.055em] text-ink sm:text-5xl lg:text-[3.7rem]">
            Manufacturing websites that build trust and generate better inquiries.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            I help industrial and manufacturing companies modernize outdated websites,
            improve mobile usability, and make RFQ/contact flows clearer for potential
            buyers.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={auditMailto} className="button-primary">
              Get a free short audit
            </a>
            <a href="#services" className="button-secondary">
              View services
            </a>
          </div>
          <p className="mt-8 max-w-xl border-l-2 border-accent pl-4 text-sm leading-6 text-muted">
            Frontend / WordPress development, website audits, and practical redesign
            support.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -left-10 -top-10 h-28 w-28 border-l border-t border-blue-100" />
          <div className="absolute -bottom-10 -right-10 h-28 w-28 border-b border-r border-blue-100" />
          <div className="relative rounded-lg border border-line bg-white p-5 shadow-soft sm:p-7">
            <div className="flex items-center justify-between gap-4 border-b border-line pb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                  Website review
                </p>
                <p className="mt-2 text-lg font-bold tracking-[-0.025em] text-ink">
                  Improvement overview
                </p>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-blue-50 text-accent">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path d="M4 4h16v12H4zM8 20h8m-4-4v4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="py-5">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">
                    Priority areas
                  </p>
                  <p className="mt-2 text-3xl font-bold tracking-[-0.045em] text-ink">03</p>
                </div>
                <p className="rounded bg-blue-50 px-3 py-1.5 text-xs font-semibold text-accent">
                  Practical next steps
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              {reviewItems.map(([label, value], index) => (
                <li
                  key={label}
                  className="flex items-center justify-between gap-4 rounded-md border border-line bg-panel px-4 py-3.5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded bg-white text-xs font-bold text-accent shadow-sm">
                      {index + 1}
                    </span>
                    <span className="text-sm font-semibold text-ink">{label}</span>
                  </div>
                  <span className="text-xs font-semibold text-muted">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
