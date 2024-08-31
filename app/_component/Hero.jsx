import Image from 'next/image'

const Hero = () => {
  return (
    <section>
  <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6  lg:px-8 ">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="hidden md:block relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <Image
          alt="hero section image"
          src='/doctor-2.jpeg'
          width={800}
          height={800}
          className="absolute inset-0 h-full w-full object-cover rounded-3xl"
        />
      </div>
      <div className="md:hidden relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <Image
          alt="hero section image"
          src='/doctors.jpg'
          width={900}
          height={600}
          className="absolute inset-0 h-full w-full object-cover rounded-3xl"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Find and Book <span className=' text-green-500'>Appointment</span> with Your <span className=' text-green-500'>Doctor</span> </h2>

        <p className="mt-4 text-gray-600">
        "Find and Book Appointment with Your Doctor" is a user-friendly platform that allows you to easily search for doctors by location, specialty, and availability. You can view detailed profiles, including reviews and fees, and book appointments directly online. The platform offers reminders and virtual consultation options, making it convenient to manage your healthcare appointments efficiently.
        </p>

        <a
          href="#"
          className="mt-8 inline-block rounded bg-black px-12 py-3 text-sm font-medium text-white transition hover:bg-[#222222] focus:outline-none ">
          Explore Now
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero