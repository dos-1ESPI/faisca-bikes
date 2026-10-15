const Beneficios = () => {
    const icons = {
        coin: (
            <>
                <circle cx="12" cy="12" r="9" />
                <path d="M14.5 9.5c-.4-.9-1.4-1.5-2.5-1.5-1.4 0-2.5.8-2.5 2s1.1 1.7 2.5 2 2.5.8 2.5 2-1.1 2-2.5 2c-1.1 0-2.1-.6-2.5-1.5M12 6.5v1.5M12 16v1.5" />
            </>
        ),
        drop: <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />,
        timer: (
            <>
                <circle cx="12" cy="13" r="8" />
                <path d="M12 9v4l2.5 2M10 2h4" />
            </>
        ),
        leaf: (
            <>
                <path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15" />
                <path d="M5 19c3-4 6-6.5 9-8" />
            </>
        ),
    };

    const beneficios = [
        {
            icon: "coin",
            title: "Economia de verdade",
            text: "Carregar a bateria custa centavos. Esqueça combustível, estacionamento e app de transporte.",
        },
        {
            icon: "drop",
            title: "Chegue sem suar",
            text: "O motor ajuda nas subidas e você chega ao trabalho pronto para o dia.",
        },
        {
            icon: "timer",
            title: "Mais rápido que o trânsito",
            text: "Ciclovias, atalhos e nenhum engarrafamento no caminho.",
        },
        {
            icon: "leaf",
            title: "Zero emissão",
            text: "Você se movimenta, e o planeta agradece.",
        },
    ];
    
    return (
        <section id="beneficios" className="bg-[#F5F3EE] py-24">
            <div className="mx-auto max-w-6xl px-6">
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F4C5C]">
                            Benefícios
                        </p>
                        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1A1D21] md:text-4xl">
                            Por que ir de elétrica?
                        </h2>
                    </div>
                    <p className="max-w-xs text-[#8A8F98]">
                        Menos tempo parado, menos gasto e mais disposição para o que importa no seu dia.
                    </p>
                </div>

                <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {beneficios.map((item) => (
                        <li key={item.title} className="rounded-2xl bg-white p-6">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0F4C5C]/10 text-[#0F4C5C]">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                >
                                    {icons[item.icon]}
                                </svg>
                            </span>
                            <h3 className="mt-5 font-bold text-[#1A1D21]">{item.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-[#8A8F98]">{item.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Beneficios