import {assets} from '../assets/assets'

function Contact() {
  return (
    <div>
        <p className='text-center my-5 font-medium text-xl'>CONTACT US</p>
      <div className='flex gap-8 sm:flex-row flex-wrap justify-center'>
        {/* left side */}
        <div>
            <img className='w-[400px]' src={assets.contact_image} alt="" />
        </div>

        {/* right side */}
        <div className='my-5'>
            <p className='font-medium text-xl  text-gray-600 mb-4'>OUR OFFICE</p>
          <div className='my-5 text-gray-600 font-medium'>
          <p>54709 Willms Station </p>
          <p>Suite 350, Washington, USA</p>
          </div>
          <div className='font-medium text-gray-600 mb-5'>
            <p>Tel: (415) 555‑0132</p>
            <p>Email : rishabhtiwari7309@gmail.com</p>
          </div>
          <p className='font-medium text-gray-700 text-xl'>CAREERS AT PRESCRIPTO</p>
          <p className='my-5 text-gray-600 font-medium'>Learn more about our teams and job openings.</p>
          <button className='px-7 border border-gray-700 py-2'>Explore Jobs</button> 
        </div>
      </div>
    </div>
  )
}

export default Contact