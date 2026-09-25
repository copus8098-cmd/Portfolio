// app/page.tsx
import Link from 'next/link';
import { ArrowRight, Camera, Eye } from 'lucide-react';

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Blobs / أشكال زخرفية في الخلفية */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* النص */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Camera size={16} />
            Photography & Visual Analysis
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-neutral-900">
            Tahir Nour
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Elslem
            </span>
          </h1>

          <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
            Architectural photographer and visual analyst. I document local and
            traditional architecture through an analytical lens that blends{' '}
            <span className="text-blue-600 font-medium">art</span> and{' '}
            <span className="text-indigo-600 font-medium">technology</span>.
          </p>

          {/* Stats صغيرة تعطي ثقل */}
          <div className="flex gap-8 mb-8">
            <div>
              <p className="text-3xl font-bold text-neutral-900">20+</p>
              <p className="text-sm text-neutral-500">Projects</p>
            </div>
            <div className="border-l border-neutral-200 pl-8">
              <p className="text-3xl font-bold text-neutral-900">5+</p>
              <p className="text-sm text-neutral-500">Years</p>
            </div>
            <div className="border-l border-neutral-200 pl-8">
              <p className="text-3xl font-bold text-neutral-900">100%</p>
              <p className="text-sm text-neutral-500">Passion</p>
            </div>
          </div>

          {/* الأزرار */}
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/photography"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition inline-flex items-center gap-2 group"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="border border-neutral-300 px-6 py-3 rounded-full hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition inline-flex items-center gap-2"
            >
              <Eye size={18} />
              Contact Me
            </Link>
          </div>
        </div>

        {/* الصورة */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-amber-500/20 rounded-3xl blur-2xl" />
          <div className="relative aspect-[4/5] bg-neutral-200 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-neutral-200">
            <img
              src="/images/Hero.png"
              alt="Tahir Nour Elslem"
              className="w-full h-full object-cover"
            />
            {/* شارة صغيرة على الصورة */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-neutral-800 shadow-lg">
              📸 Architectural Storyteller
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}