import figure from './figure.png'
function BottomCard() {
  return(
    <div className="w-96 h-96 border-2 bg-whiteP-600 rounded-2xl shadow-buttons flex items-center justify-center  flex-col gap-4 p-4">
      <h2 className='text-primary font-medium text-2xl text-center'>Llega a mas clientes conectandote a la web</h2>
      <div className='flex flex-col justify-center items-center relative'>
        <span className='font-bold absolute right-2 top-2 text-xl'> +500</span>
        <img src={figure} alt=" Imagen alusiva a clientes"  className='w-4/5 mx-auto block'/>
        <span className='font-bold absolute left-2 bottom-2 text-xl'> +1K </span>
      </div>
    </div>
  )
}

export default BottomCard