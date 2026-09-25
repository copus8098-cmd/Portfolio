// app/editing/page.tsx
'use client';
import { useState } from 'react';

function BeforeAfter({ before, after }: { before: string; after: string }) {
  const [pos, setPos] = useState(50);
  return (
    <div className="relative aspect-video rounded-2xl overflow-hidden select-none">
      <img src={after} className="absolute inset-0 w-full h-full object-cover" />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <img src={before} className="w-full h-full object-cover" />
      </div>
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
        style={{ left: `${pos}%` }}
      />
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={e => setPos(+e.target.value)}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
      />
    </div>
  );
}

export default function Editing() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-12">Image Editing</h1>
      <div className="space-y-8">
        <BeforeAfter before="/images/ba1-before.jpg" after="/images/ba1-after.jpg" />
        <BeforeAfter before="/images/ba2-before.jpg" after="/images/ba2-after.jpg" />
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">Editing Techniques</h2>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            'Color grading & tone mapping',
            'Perspective correction',
            'HDR blending',
            'Dodge & burn',
            'Sky replacement',
            'Lens distortion fix',
          ].map(t => (
            <li key={t} className="p-4 bg-white border rounded-xl">{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}