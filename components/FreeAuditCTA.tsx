import { auditMailto } from "@/content/landing";

export function FreeAuditCTA() {
  return (
    <section id="free-audit" className="scroll-mt-8 bg-accent text-white" aria-labelledby="audit-heading">
      <div className="container-page grid gap-6 py-12 md:grid-cols-[1fr_auto] md:items-center md:py-14">
        <div>
          <h2 id="audit-heading" className="max-w-3xl text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
            Want to know what can be improved on your website?
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-blue-100">
            Send your website URL and I’ll prepare a short 3–5 point audit with practical
            improvement ideas around clarity, mobile usability, trust signals, and
            contact/RFQ flow.
          </p>
        </div>
        <a
          href={auditMailto}
          className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-bold text-accent transition-colors hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Request a free audit
        </a>
      </div>
    </section>
  );
}
