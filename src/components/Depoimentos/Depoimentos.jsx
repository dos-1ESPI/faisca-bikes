import React from "react";
import CardDepoimentos from "./CardDepoimentos";

const Depoimentos = () => {
  return (
    <div className="flex flex-col text-center py-12 px-4 bg-[#F5F3EE]">
      <h2 className="mb-1 text-[#0F4C5C]">DEPOIMENTOS</h2>
      <h3 className="mb-8 text-[1.6rem] font-bold">Quem já pedala com a gente</h3>
      <div className="flex flex-row gap-8 justify-center">
        <CardDepoimentos 
        depoimento="Troquei o carro pela Urban e economizo uma grana todo mês. Chego no trabalho em 20 minutos."
        nomeCliente="Wellington Cidade"
        cidadeCliente="São Paulo"/>
        <CardDepoimentos
        depoimento="Achei que subida ia ser problema. Com o nível 3 de assistência, nem sinto."
        nomeCliente="Lucas Silva"
        cidadeCliente="São Paulo" />
      </div>
    </div>
  );
};

export default Depoimentos;
