import camisa from './../../assets/images/WhatsApp Image 2023-11-17 at 15.31.50_f2e185f4.jpg'

const Promo = () => {
  return (
    <div className="w-full h-full bg-black">
      <h1 className="text-3xl text-center text-white">Casiteta Gucci</h1>
      <div className="flex flex-row gap-3 mx-auto">
        <img src={camisa} alt="" className='w-1/4'/>
        <div className="flex flex-col p-4 text-white bg-gray-700 rounded-md">
          <p>Camiseta de Punto de Algodon</p>
          <span>Є 480</span>
        </div>
      </div>
    </div>
  )
}

export default Promo