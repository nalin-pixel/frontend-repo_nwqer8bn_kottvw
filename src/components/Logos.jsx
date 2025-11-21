const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
  "https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png",
];

export default function Logos() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-center text-sm uppercase tracking-widest text-white/50">Trusted by teams of all sizes</p>
        <div className="mt-8 grid grid-cols-2 gap-6 opacity-80 sm:grid-cols-3 md:grid-cols-5">
          {logos.map((src, i) => (
            <div key={i} className="flex items-center justify-center">
              <img src={src} alt="logo" className="h-8 w-auto invert opacity-70" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
