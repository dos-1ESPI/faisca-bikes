import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-[#1A1D21] text-[#F5F3EE] px-6 pt-24 pb-8 overflow-hidden">
                <section className="relative isolate flex flex-col items-center gap-6 text-center">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 rounded-full bg-[#B8F23A]/15 blur-3xl -z-10"></div>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-lg">
                        Sua próxima volta começa <span className="text-[#B8F23A]">aqui.</span>
                    </h2>
                    <p className="text-[#F5F3EE]/80">Agende um test ride gratuito e sinta a diferença na primeira pedalada.</p>
                    <button className="bg-[#B8F23A] text-[#1A1D21] font-semibold px-6 py-3 rounded-full hover:brightness-110 transition">
                        Quero testar agora
                    </button>
                </section>

                <section className="max-w-5xl mx-auto mt-24 pt-8 border-t border-[#F5F3EE]/10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                        <div className="flex flex-col gap-3">
                            <h6 className="text-lg font-bold">faísca<span className="text-[#B8F23A]">.</span></h6>
                            <p className="text-[#F5F3EE]/70">Mobilidade elétrica para a cidade</p>
                        </div>
                        <div className="flex flex-col gap-2 text-[#F5F3EE]/70">
                            <h6 className="font-bold text-[#F5F3EE]">Contato</h6>
                            <p>Av. Paulista</p>
                            <p>+55 11 12345-6789</p>
                            <p>faiscabikes@email.com</p>
                            <p>@faíscabikes</p>
                        </div>
                        <div className="flex flex-col gap-2 text-[#F5F3EE]/70">
                            <h6 className="font-bold text-[#F5F3EE]">Institucional</h6>
                            <a href="#" className="w-fit hover:text-[#B8F23A] transition">Política de privacidade</a>
                            <a href="#" className="w-fit hover:text-[#B8F23A] transition">Trocas e devoluções</a>
                            <a href="#" className="w-fit hover:text-[#B8F23A] transition">Garantia</a>
                        </div>
                    </div>
                    <p className="mt-12 text-xs text-[#8A8F98]">&copy; 2026 Faísca Bikes. Todos os direitos reservados.</p>
                </section>
            </footer>
        </>
    )
}

export default Footer