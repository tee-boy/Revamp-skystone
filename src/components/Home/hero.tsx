import React from 'react'

const Hero = () => {
  return (
    <div>
       <div className="relative bg-blue-100">
  {/* Background image or content */}
  <div className="h-[300px] bg-gradient-to-r from-blue-300 to-pink-200"></div>

  {/* Curved white section */}
  <div className="relative bg-white rounded-t-[100px] -mt-[100px] p-8">
    <h2 className="text-3xl font-bold text-center">
      Get quick loans on your preferred channels
    </h2>
    {/* Add your navigation or other content below */}
  </div>
</div>

    </div>
  )
}

export default Hero
