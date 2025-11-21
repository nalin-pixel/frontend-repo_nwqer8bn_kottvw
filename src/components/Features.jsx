import { Globe, Zap, ShieldCheck, Layers, Cloud, Rocket } from "lucide-react";

const features = [
  { icon: Globe, title: "Global Edge Network", desc: "Run your app close to users worldwide with automatic routing and caching." },
  { icon: Zap, title: "Lightning Fast", desc: "Optimized performance from dev to prod with zero-config deployments." },
  { icon: ShieldCheck, title: "Secure by Default", desc: "Built-in best practices for security, SSL, and isolation." },
  { icon: Layers, title: "Framework Native", desc: "First-class support for Next.js and modern React features." },
  { icon: Cloud, title: "Scales Effortlessly", desc: "From hobby projects to enterprise workloads without complex ops." },
  { icon: Rocket, title: "Ship Faster", desc: "Preview every change with instant rollbacks and team workflows." },
];

export default function Features() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Everything you need to build and grow</h2>
          <p className="mt-3 text-white/70">A platform designed for developer velocity and business outcomes.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-white font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
