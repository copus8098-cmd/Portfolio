// app/analysis/page.tsx
const analyses = [
  {
    title: 'Image 01 — Visual Analysis',
    text: 'تحليل بصري شامل: التكوين، الإضاءة، الخطوط، والتوازن البصري.',
    img: '/images/analysis1.jpg',
  },
  {
    title: 'Image 02 — Architectural Elements',
    text: 'العناصر المعمارية: الأقواس، الأعمدة، الزخارف، والمواد المستخدمة.',
    img: '/images/analysis2.jpg',
  },
  {
    title: 'Image 03 — Scene Description',
    text: 'وصف المشهد: السياق الحضري، الوظيفة، والعلاقة بالمحيط.',
    img: '/images/analysis3.jpg',
  },
];

export default function Analysis() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-12">Visual & Image Analysis</h1>
      <div className="space-y-12">
        {analyses.map(a => (
          <article key={a.title} className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-video rounded-2xl overflow-hidden bg-neutral-200">
              <img src={a.img} alt={a.title} className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-3">{a.title}</h2>
              <p className="text-neutral-600 leading-relaxed">{a.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}