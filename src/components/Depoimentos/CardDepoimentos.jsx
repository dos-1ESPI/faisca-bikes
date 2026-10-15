import React from 'react'

const CardDepoimentos = ({depoimento, nomeCliente, cidadeCliente}) => {
  return (
    <div className='bg-white p-6 rounded-2xl w-100 flex justify-between flex-col border border-gray-200 shadow-lg shadow-gray-150'>
      <h2 className='italic mb-4'>{depoimento}</h2>
      <div className='text-start'>
        <h3 className='text-[0.9rem] text-gray-700'>{nomeCliente}</h3>
        <h4 className='text-[0.8rem] text-gray-600'>{cidadeCliente}</h4>
      </div>
    </div>
  )
}

export default CardDepoimentos
