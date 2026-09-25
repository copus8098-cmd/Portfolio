// app/about/page.tsx

export default function About() {
  return (
    <section className="min-h-screen bg-neutral-950 text-neutral-200 py-20 relative overflow-hidden">
      {/* خلفية شبكية خفيفة */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* إطار علوي ذهبي */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* العنوان الرئيسي */}
        <div className="mb-16 border-b border-amber-600/30 pb-8">
          
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-neutral-100 tracking-tight">
            About <span className="text-amber-500">Me</span>
          </h1>
        </div>

        <div className="space-y-14">
          {/* Background */}
          <article className="relative pl-8 border-l-2 border-amber-600/60">
            <span className="absolute -left-[9px] top-0 w-4 h-4 bg-amber-600 rotate-45" />
            <h2 className="text-xs uppercase tracking-[0.3em] text-amber-500 mb-3 font-semibold">
              I. Background
            </h2>
            <p className="text-neutral-300 leading-relaxed font-light">
              I have an academic background in{' '}
              <span className="text-amber-400 font-medium">Statistics</span> and{' '}
              <span className="text-amber-400 font-medium">Data Analysis</span>,
              with an interest in using data, programming, and analytical methods
              to understand and solve real-world problems. My studies have given
              me a solid foundation in statistics, Python, SQL, data analysis, and
              mathematical modeling.
            </p>
          </article>

          {/* Technical Skills */}
          <article className="relative pl-8 border-l-2 border-amber-600/60">
            <span className="absolute -left-[9px] top-0 w-4 h-4 bg-amber-600 rotate-45" />
            <h2 className="text-xs uppercase tracking-[0.3em] text-amber-500 mb-5 font-semibold">
              II. Technical Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                'Python',
                'SQL',
                'Data Analysis',
                'Statistics',
                'R',
                'MATLAB',
                'Adobe Lightroom',
                'Photoshop',
                'Capture One',
                'GIS',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1.5 border border-neutral-700 text-neutral-300 text-xs uppercase tracking-wider hover:border-amber-500 hover:text-amber-400 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>

          {/* Photography & Image Editing */}
          <article className="relative pl-8 border-l-2 border-amber-600/60">
            <span className="absolute -left-[9px] top-0 w-4 h-4 bg-amber-600 rotate-45" />
            <h2 className="text-xs uppercase tracking-[0.3em] text-amber-500 mb-3 font-semibold">
              III. Photography & Image Editing
            </h2>
            <p className="text-neutral-300 leading-relaxed font-light">
              Outside of my academic and technical work, I have a strong personal
              interest in <span className="text-amber-400 font-medium">photography</span> and{' '}
              <span className="text-amber-400 font-medium">image editing</span>. I
              enjoy exploring composition, lighting, architecture, and visual
              storytelling, as well as improving photographs through
              post-processing and color correction.
            </p>
          </article>

          {/* What I Enjoy */}
          <article className="relative pl-8 border-l-2 border-amber-600/60">
            <span className="absolute -left-[9px] top-0 w-4 h-4 bg-amber-600 rotate-45" />
            <h2 className="text-xs uppercase tracking-[0.3em] text-amber-500 mb-3 font-semibold">
              IV. What I Enjoy
            </h2>
            <p className="text-neutral-300 leading-relaxed font-light">
              I enjoy combining{' '}
              <span className="text-amber-400 font-medium">analytical thinking</span>{' '}
              with <span className="text-amber-400 font-medium">creativity</span>.
              Whether I am working with data, building a web application, or
              editing a photograph, I like understanding the details, experimenting
              with different approaches, and continuously improving the final
              result.
            </p>
          </article>
        </div>

        {/* توقيع / خاتمة */}
        <div className="mt-20 pt-8 border-t border-amber-600/30 flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
            Established · MMXXIV
          </p>
          <div className="flex gap-2">
            <span className="w-2 h-2 bg-amber-600 rotate-45" />
            <span className="w-2 h-2 bg-amber-600/60 rotate-45" />
            <span className="w-2 h-2 bg-amber-600/30 rotate-45" />
          </div>
        </div>
      </div>
    </section>
  );
}