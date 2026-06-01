import { Icon } from "@/components/Icons";
import { services } from "@/content/landing";

export function Services() {
  return (
    <section id="services" className="section-space scroll-mt-8" aria-labelledby="services-heading">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <h2 id="services-heading" className="section-title">
              Practical website improvements for industrial businesses
            </h2>
            <p className="mt-5 max-w-md leading-7 text-muted">
              Start with the most useful improvements. A full redesign is only one of the
              options.
            </p>
          </div>
          <div className="grid border-t border-line sm:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="border-b border-line py-5 sm:px-5 sm:[&:nth-child(odd)]:pl-0"
              >
                <div className="flex items-start gap-4">
                  <Icon name={service.icon} className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <h3 className="font-bold tracking-[-0.015em] text-ink">{service.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{service.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
