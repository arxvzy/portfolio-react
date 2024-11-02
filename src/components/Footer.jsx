const year = new Date().getFullYear();
export default function Footer() {
  return (
    <div className="w-full p-4 bg-primary mt-auto border-t border-slate-700">
      <p className="text-center">Copyright © {year} by Arya Bima</p>
    </div>
  );
}
