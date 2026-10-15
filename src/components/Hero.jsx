const stats = [
    { value: "80 km", label: "de autonomia" },
    { value: "4–6 h", label: "para carga completa" },
    { value: "2 anos", label: "de garantia" },
];

function BikeIllustration({ className = "" }) {
    return (
        <svg viewBox="0 0 400 260" fill="none" className={className} aria-hidden="true">
            {/* Rodas */}
            <g stroke="#1A1D21">
                <circle cx="90" cy="180" r="68" strokeWidth="12" />
                <circle cx="310" cy="180" r="68" strokeWidth="12" />
            </g>
            <g stroke="#1A1D21" strokeOpacity="0.25" strokeWidth="2">
                <circle cx="90" cy="180" r="46" />
                <circle cx="310" cy="180" r="46" />
            </g>

            {/* Quadro */}
            <g stroke="#0F4C5C" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M90 180 L195 185 L160 82 Z" />
                <path d="M160 82 L285 90" />
                <path d="M195 185 L292 112" />
                <path d="M285 90 L310 180" />
            </g>

            {/* Bateria no tubo inferior */}
            <path d="M215 166 L268 127" stroke="#1A1D21" strokeWidth="16" strokeLinecap="round" />
            <path d="M244 147 L256 138" stroke="#B8F23A" strokeWidth="3" strokeLinecap="round" />

            {/* Selim, guidão e cubos */}
            <g stroke="#1A1D21" strokeWidth="8" strokeLinecap="round">
                <path d="M160 82 L156 62" />
                <path d="M138 60 L176 60" />
                <path d="M285 90 L280 62 L306 56" />
            </g>
            <circle cx="90" cy="180" r="8" fill="#1A1D21" />
            <circle cx="310" cy="180" r="8" fill="#1A1D21" />
            <circle cx="195" cy="185" r="12" stroke="#0F4C5C" strokeWidth="5" fill="#B8F23A" />
        </svg>
    );
}

const Hero = () => {
    return (
        <section id="hero" className="bg-[#1A1D21] text-white">
            <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-20 md:grid-cols-2 md:py-28">
                {/* Texto */}
                <div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs text-white/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#B8F23A]" />
                        Nova linha 2026 disponível
                    </span>

                    <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
                        A cidade ficou <span className="block text-[#B8F23A]">menor.</span>
                    </h1>

                    <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">
                        Bicicletas elétricas com até 80 km de autonomia, motor silencioso e design pensado
                        para o seu dia a dia. Troque o trânsito por liberdade.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="#modelos"
                            className="rounded-full bg-[#B8F23A] px-6 py-3 text-sm font-semibold text-[#1A1D21] transition hover:brightness-95"
                        >
                            Conheça os modelos
                        </a>
                        <a
                            href="#test-ride"
                            className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold transition hover:bg-white/5"
                        >
                            Agende um test ride grátis
                        </a>
                    </div>

                    <dl className="mt-12 flex flex-wrap gap-10 border-t border-white/10 pt-8">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <dt className="sr-only">{stat.label}</dt>
                                <dd className="text-3xl font-bold">{stat.value}</dd>
                                <dd className="mt-1 text-sm text-white/50">{stat.label}</dd>
                            </div>
                        ))}
                    </dl>
                </div>

                {/* Ilustração */}
                <div className="relative mx-auto w-full max-w-md">
                    <div className="flex aspect-square items-center justify-center rounded-full bg-[#B8F23A]">
                        <BikeIllustration className="w-[105%] max-w-none" />
                    </div>

                    <div className="absolute -right-2 bottom-8 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-xl md:-right-10">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#0F4C5C" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
                            <rect x="2" y="7" width="17" height="10" rx="2" />
                            <path d="M22 11v2M6 12h6" strokeLinecap="round" />
                        </svg>
                        <div>
                            <p className="text-sm font-semibold text-[#1A1D21]">Bateria removível</p>
                            <p className="text-xs text-[#1A1D21]/60">Carregue em qualquer tomada</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero