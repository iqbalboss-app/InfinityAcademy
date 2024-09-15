import React from 'react'
import AnimatedElement from '../Animation/AnimatedElement'
import Link from "next/link";

export default function Footer() {

  return (
    <div className="relative bottom-0 bg-[#272626]">
      <footer className="text-white body-font">
        <div className="container px-5 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

          {/* G Map  */}
          <AnimatedElement className=' rounded-lg '>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.4709083572698!2d89.8968234753991!3d25.72193637737689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e2ad007b4461db%3A0x8196697c5c94e2d!2sINFINITY%20ACADEMY%20HATSINGIMARI!5e0!3m2!1sen!2sus!4v1726392453070!5m2!1sen!2sus"
            width="100%" height="400" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </AnimatedElement>


          {/* Footer Links  */}
          {/* Departments */}
          <AnimatedElement className=" flex-grow flex flex-wrap mb-10 text-left order-first">
            {/* AOT Online */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">Follow Us</h2>
              <nav className="list-none mb-10">
                <li>
                  <a target='_blank' href='https://www.facebook.com/profile.php?id=61555937886408' className="text-white hover:text-gray-300 cursor-pointer"> &#8658; facebook</a>
                </li>
              </nav>
              
            </div>
                        {/* Admission Enquiry */}
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">Admission Enquiry</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href='/contact' className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Contact Us</Link>
                </li>

              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">Address</h2>

              <p className="text-white hover:text-gray-300 cursor-pointer">Hatsingimari,</p>
              <p className="text-white hover:text-gray-300 cursor-pointer">Near DC Office,</p>
              <p className="text-white hover:text-gray-300 cursor-pointer">South Salmara Mankachar</p>
              <p className="text-white hover:text-gray-300 cursor-pointer">Hatsingimari , 783135</p>
              <h4 className="text-white hover:text-gray-300 cursor-pointer">+91 987667876</h4>
              <h4 className="text-white hover:text-gray-300 cursor-pointer">+91 987654321</h4>

            </div>

          </AnimatedElement>
        </div>

        <div>
          <div>
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p className="text-gray-300 text-sm text-center sm:text-left">© 2024 INFINITY ACADEMY            —
                <a rel="noopener noreferrer" className="text-gray-300 ml-1" target="_blank">@infiacademy</a>
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a className="ml-3 text-gray-300">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>

              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

