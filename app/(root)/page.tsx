import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-900 via-red-900 to-green-950 text-white px-6 relative overflow-hidden">
      {/* Decorative snowflakes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl opacity-20 animate-pulse">❄️</div>
        <div className="absolute top-32 right-20 text-4xl opacity-15 animate-pulse delay-75">❄️</div>
        <div className="absolute bottom-20 left-1/4 text-5xl opacity-10 animate-pulse delay-150">❄️</div>
        <div className="absolute top-1/2 right-10 text-3xl opacity-20 animate-pulse">⭐</div>
      </div>

      <section className="max-w-7xl mx-auto min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 relative z-10">
        
        {/* LEFT SIDE – TEXT */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <div className="inline-block px-4 py-2 bg-red-600/30 backdrop-blur-sm rounded-full border border-red-400/30 mb-4">
            <span className="text-yellow-300 text-sm font-semibold">🎁 Holiday Special Edition</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Guess My Vibe{" "}
            <span className="inline-block animate-bounce text-yellow-300">🎄</span>
          </h1>

          <p className="text-xl text-green-100 max-w-lg leading-relaxed">
            Guess what I love doing the most and unlock a special Christmas surprise 🎅🏽✨
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center md:justify-start">
            <Link
              href="/guess"
              className="group px-10 py-5 rounded-2xl 
                       bg-gradient-to-r from-red-600 to-green-600
                       text-white font-bold text-lg
                       shadow-2xl shadow-red-500/50
                       hover:shadow-red-500/70 hover:scale-105
                       transition-all duration-300
                       border-2 border-yellow-300/50"
            >
              Start Guessing →
            </Link>
            
            <button
              className="px-10 py-5 rounded-2xl 
                       bg-white/10 backdrop-blur-md
                       text-green-100 font-semibold text-lg
                       border-2 border-white/20
                       hover:bg-white/20 hover:border-white/30
                       transition-all duration-300"
            >
              Learn More
            </button>
          </div>

          <div className="flex gap-6 pt-8 text-sm text-green-200 justify-center md:justify-start">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎁</span>
              <span>Festive Fun</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span>Easy to Play</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎉</span>
              <span>Win Prizes</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – IMAGE */}
        <div className="flex-1 flex justify-center relative">
          <div className="relative">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-green-500/30 blur-3xl rounded-full"></div>
            
            <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-3xl border-2 border-white/10 shadow-2xl">
              <Image
                src="/images/jean.png"
                alt="Christmas vibe illustration"
                width={420}
                height={420}
                className="rounded-2xl object-contain"
                priority
              />
            </div>
            
            {/* Floating ornaments */}
            <div className="absolute -top-6 -right-6 text-5xl animate-bounce">🔴</div>
            <div className="absolute -bottom-6 -left-6 text-5xl animate-bounce delay-150">🟢</div>
          </div>
        </div>

      </section>

      {/* Footer accent */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 via-green-600 to-red-600"></div>
    </main>
  );
}