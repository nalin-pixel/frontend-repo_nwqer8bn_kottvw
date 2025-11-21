import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="pointer-events-none absolute left-1/3 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-24 text-center">
        <h1 className="mx-auto max-w-4xl text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">
          Develop, Preview, Ship
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-white/70">
          Build the best web experiences with a platform designed for speed, reliability, and scale.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90 inline-flex items-center gap-2" href="#">
            Start deploying
            <ArrowRight className="h-4 w-4" />
          </a>
          <a className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/80 hover:bg-white/10" href="#">
            Explore templates
          </a>
        </div>

        <div className="mt-16">
          <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-black/40 p-2 shadow-2xl backdrop-blur">
            <div className="aspect-[16/9] w-full rounded-xl bg-gradient-to-br from-slate-900 to-black">
              <div className="h-full w-full rounded-lg border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent)] p-6 text-left">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <pre className="h-full whitespace-pre-wrap text-sm text-white/80">$ npx create-next-app@latest\n$ git push vercel main\n✅ Production deployment complete</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
