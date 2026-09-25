// app/work/page.tsx

const platforms = [
  {
    name: 'Khamsat',
    nameAr: 'خمسات',
    desc: 'Arabic micro-services marketplace',
    url: 'https://khamsat.com/user/noureliselem',
    color: 'from-orange-500 to-yellow-500',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    name: 'Mostaql',
    nameAr: 'مستقل',
    desc: 'Leading Arabic freelancing platform',
    url: 'https://mostaql.com/u/Nour_r',
    color: 'from-blue-600 to-cyan-500',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 3a7 7 0 110 14 7 7 0 010-14zm0 3a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
  },
  {
    name: 'Freelancer',
    nameAr: 'فريلانسر',
    desc: 'Global projects & contests platform',
    url: 'https://www.fr.freelancer.com/u/nourelislemtahi2',
    color: 'from-sky-600 to-blue-700',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM8 9h2v6H8V9zm3 0h2.5a2.5 2.5 0 010 5H11V9zm2 2v1h.5a.5.5 0 000-1H13zm3-2h2v6h-2V9z" />
      </svg>
    ),
  },
  {
    name: 'Fiverr',
    nameAr: 'فايفر',
    desc: 'Professional gigs & services',
    url: 'https://www.fiverr.com/sellers/nourelisl',
    color: 'from-green-500 to-emerald-600',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
        <path d="M16 3a4 4 0 00-4 4v1H8V6a2 2 0 012-2h1V2H10a4 4 0 00-4 4v2H4v3h2v9h3v-9h3v9h3v-9h3V8h-3V7a1 1 0 011-1h2V3h-2zM9 8h3V7a1 1 0 011-1h3v3H9zm-2 3v9H5v-9h2zm9 0v9h-2v-9h2z" />
      </svg>
    ),
  },
  {
    name: 'Upwork',
    nameAr: 'أبورك',
    desc: "World's largest freelancing marketplace",
    url: 'https://www.upwork.com/freelancers/tahirnourelislem',
    color: 'from-emerald-600 to-green-700',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
        <path d="M18.5 6a4.5 4.5 0 00-4.4 3.5c-.7-1-1.3-2.2-1.8-3.3l-1.9.8c.6 1.5 1.4 3 2.3 4.3a7 7 0 10.4-5.3h1.9a2.6 2.6 0 012.5-1.9 2.6 2.6 0 012.6 2.6 2.6 2.6 0 01-2.6 2.6c-1 0-1.9-.6-2.4-1.5l-.9-1.4-.8 1.4c-.5.9-1.4 1.5-2.4 1.5a2.6 2.6 0 01-2.6-2.6A2.6 2.6 0 0113 5.5" />
      </svg>
    ),
  },
];

export default function Work() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">My Accounts</h1>
      <p className="text-neutral-500 mb-12">
        Find me on these freelancing platforms
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {platforms.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl overflow-hidden bg-neutral-100 hover:bg-neutral-200 transition border border-neutral-200"
          >
            <div
              className={`h-36 bg-gradient-to-br ${p.color} flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-500`}
            >
              {p.icon}
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <span className="text-sm text-neutral-500">{p.nameAr}</span>
              </div>
              <p className="text-sm text-neutral-600 mt-2">{p.desc}</p>
              <span className="inline-block mt-4 text-sm font-medium text-blue-600 group-hover:translate-x-1 transition-transform">
                Visit profile →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}