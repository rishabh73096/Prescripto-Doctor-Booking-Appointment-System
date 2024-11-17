import {assets} from '../assets/assets' 

function About() {
  return (
    <>
        <p className="text-center font-medium text-gray-500 text-xl my-5">ABOUT  <span className="text-black">US</span> </p>
      <div className='flex justify-center flex-wrap gap-8'>
        {/* left side */}
        <div>
            <img className='w-80 ' src={assets.about_image} alt="" />
        </div>

        {/* right side */}
        <div className='max-w-[700px] text-gray-600  '>
          <p className='mb-5'>
          Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>
          <p className='mb-5'>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
          <p className='mb-5 font-medium text-gray-600'>Our Vision</p>
          <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>

      </div>
        <p className='mx-10 my-12 font-medium text-gray-600 text-xl'>WHY CHOSE <span className='text-gray-800'>US</span></p>
      <div className='flex flex-col md:flex-row'>
        <div className='border border-gray-400  grid grid-cols-3 grid-rows-none px-10 py-10 gap-10'>
          <div className='border-r border-r-slate-500'>
            <p className='text-gray-800 font-medium text-xl pb-5'>EFFICIANCY:</p>
            <p className='text-gray-600'>Streamlined appointment scheduling that fits into your busy lifestyle</p>
           </div>
          <div className='border-r border-r-slate-500'>
            <p className='text-gray-800 font-medium text-xl pb-5'>CONVENIENCE:</p>
            <p className='text-gray-600'>Access to a network of trusted healthcare professionals in your area.</p>
           </div>
          <div>
            <p className='text-gray-800 font-medium text-xl pb-5'>PERSONALIZATION:</p>
            <p className='text-gray-600'>Tailored recommendations and reminders to help you stay on top of your health.</p>
           </div>
        </div>
      </div>
    </>
  )
}

export default About