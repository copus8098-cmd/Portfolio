// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t mt-20 py-8 text-center text-sm text-neutral-500">
      © {new Date().getFullYear()} — All rights reserved.
    </footer>
  );
}