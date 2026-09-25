// app/photography/page.tsx
const projects = [
  {
    id: '01',
    title: 'Local Landmark',
    desc: 'معلم محلي بارز',
    img: '/images/1.jpg',
  },
  {
    id: '02',
    title: 'Urban Architecture',
    desc: 'عمارة حضرية حديثة',
    img: '/images/3.jpg',
  },
  {
    id: '03',
    title: 'Traditional Architecture',
    desc: 'عمارة تقليدية تراثية',
    img: '/images/2.jpg',
  },
];

export default function Photography() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-12">Architectural Photography</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => (
          <article
            key={p.id}
            className="group rounded-2xl overflow-hidden bg-white border hover:shadow-xl transition"
          >
            <div className="aspect-[4/3] overflow-hidden bg-neutral-200">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-5">
              <p className="text-xs text-blue-600 font-semibold">Project {p.id}</p>
              <h3 className="text-lg font-semibold mt-1">{p.title}</h3>
              <p className="text-sm text-neutral-500 mt-1">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}