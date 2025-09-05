import React from 'react'

const Contact = () => {
    return (
        <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
            <h1 className='text-2xl sm:text-4xl font-blid mb-2 text-center'>Contact <span className='underline underline-offset-4 decoration-1 under font-light'>With Us</span></h1>
            <p className='text-center text-graya-500 mb-12 max-w-80 mx-auto'>Ready to make a Move? Let's build Your Future Together</p>


            <form className='max-w-2xl mx-auto text-gray-600 pt-8'>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 text-left'>Your name
                        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Name' placeholder='Your Name' required />
                    </div>
                    <div className='w-full md:w-1/2 text-left md:pl-4'>Your Email
                        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" name='Email' placeholder='Your Email' required />
                    </div>
                </div>
                <div className='my-6 text-left'>
                    Message
                    <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'
                        name="Message" placeholder='Message' required></textarea>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 transition text-white py-3 px-12 rounded-full shadow-md">
                    Send Message
                </button>
            </form>
            <footer className="bg-gray-900 text-gray-400 py-6 mt-10">
  <div className="container mx-auto px-6 md:px-20 lg:px-32 flex flex-col sm:flex-row justify-between items-center text-sm">
    <p>© {new Date().getFullYear()} YourCompany. All rights reserved.</p>
    <div className="flex gap-4 mt-4 sm:mt-0">
      <a href="#Privacy" className="hover:text-white transition">Privacy Policy</a>
      <a href="#Terms" className="hover:text-white transition">Terms of Service</a>
    </div>
  </div>
</footer>

        </div>
    )
}

export default Contact
