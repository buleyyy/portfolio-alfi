import { trust } from "@/lib/content";

export default function TrustProof() {
  return (
    <section className="py-16 md:py-20 px-6 md:px-10" style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {trust.map((item, i) => {
          const content = (
            <>
              <p className="text-lg md:text-xl font-bold gradient-text">{item.value}</p>
              <p className="text-xs mt-1.5 uppercase tracking-wider" style={{ color: "var(--text-tertiary)" }}>
                {item.label}
              </p>
            </>
          );
          return item.href ? (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`scroll-animate delay-${i * 100} hover:opacity-80 transition-opacity`}
            >
              {content}
            </a>
          ) : (
            <div key={item.label} className={`scroll-animate delay-${i * 100}`}>
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}
