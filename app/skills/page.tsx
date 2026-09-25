// app/skills/page.tsx
import { Brain, Code, Image as ImageIcon, Globe, BarChart3, Database } from 'lucide-react';

const groups = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    items: ['Stable Diffusion', 'Midjourney', 'ChatGPT API', 'CLIP', 'YOLO'],
  },
  {
    icon: Code,
    title: 'Python',
    items: ['NumPy', 'Pandas', 'OpenCV', 'Pillow', 'scikit-learn'],
  },
  {
    icon: ImageIcon,
    title: 'Image / Data Processing',
    items: ['Image segmentation', 'EXIF analysis', 'Batch processing', 'Metadata'],
  },
  {
    icon: Globe,
    title: 'Web / Software Development',
    items: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'Git'],
  },
  // ← مهاراتك الجديدة المضافة
  {
    icon: BarChart3,
    title: 'Statistics & Data Analysis',
    items: ['Statistics', 'Data Analysis', 'Mathematical Modeling', 'R', 'MATLAB'],
  },
  {
    icon: Database,
    title: 'Databases & Tools',
    items: ['SQL', 'GIS'],
  },
  {
    icon: ImageIcon,
    title: 'Photography & Editing',
    items: ['Adobe Lightroom', 'Photoshop', 'Capture One'],
  },
];

export default function Skills() {
  return (
    <section className="min-h-screen bg-white text-neutral-900 py-20 relative">
      {/* خط علوي */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600" />

      <div className="max-w-6xl mx-auto px-6">
        {/* العنوان */}
        <div className="mb-14 border-b border-neutral-200 pb-8">
          <p className="text-blue-600 tracking-[0.4em] text-xs uppercase mb-4 font-semibold">
            — Toolkit —
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            AI & Technical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Skills
            </span>
          </h1>
          <p className="text-neutral-500 mt-4 max-w-2xl">
            A modern stack combining data science, artificial intelligence,
            visual computing, and web development.
          </p>
        </div>

        {/* الشبكة */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-neutral-200">
          {groups.map((g, idx) => {
            const Icon = g.icon;
            return (
              <div
                key={g.title}
                className={`group p-6 border-neutral-200 hover:bg-neutral-50 transition-colors relative ${
                  // شبكة حادة بدون زوايا دائرية
                  'border-r border-b'
                }`}
              >
                {/* رقم الشريحة */}
                <span className="absolute top-4 right-4 text-[10px] font-mono text-neutral-300 group-hover:text-blue-600 transition-colors">
                  {String(idx + 1).padStart(2, '0')}
                </span>

                {/* الأيقونة والعنوان */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-neutral-900 text-white flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Icon size={20} />
                  </div>
                  <h2 className="text-base font-bold tracking-tight uppercase">
                    {g.title}
                  </h2>
                </div>

                {/* الوسوم */}
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 border border-neutral-200 text-neutral-600 hover:border-blue-600 hover:text-blue-600 transition-colors font-mono"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* شريط سفلي */}
        <div className="mt-10 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-neutral-400">
          <span>— Full Stack Profile —</span>
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-blue-600" />
            <span className="w-2 h-2 bg-indigo-600" />
            <span className="w-2 h-2 bg-neutral-900" />
          </div>
        </div>
      </div>
    </section>
  );
}