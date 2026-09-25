// app/contact/page.tsx
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/BrandIcons';

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'nourelislem.tahir@gmail.com',
    href: 'mailto:nourelislem.tahir@gmail.com',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/nour-elislem-tahir-a8588029b',
    href: 'https://www.linkedin.com/in/nour-elislem-tahir-a8588029b',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/theawssemdoudd',
    href: 'https://github.com/theawssemdoudd',
  },
];

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <p className="text-neutral-600 mb-12">
        متاح للتعاون في مشاريع التصوير المعماري والتحليل البصري.
      </p>
      <div className="space-y-4">
        {contacts.map(c => {
          const Icon = c.icon;
          return (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-white border rounded-2xl hover:border-blue-500 hover:shadow-md transition group"
            >
              <div className="w-12 h-12 bg-neutral-100 group-hover:bg-blue-50 rounded-xl flex items-center justify-center transition">
                <Icon size={22} className="text-neutral-700 group-hover:text-blue-600 transition" />
              </div>
              <div>
                <p className="text-xs text-neutral-500">{c.label}</p>
                <p className="font-medium">{c.value}</p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}