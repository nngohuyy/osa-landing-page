'use client'

import Image from 'next/image';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className='pb-4 md:pb-20 pt-[50px] px-4 md:px-0'>
      <div className='max-w-screen-xl text-white footer-background mx-auto px-6 md:px-14 py-10 md:py-20 border-2 md:border-4 border-black rounded-3xl'>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col-reverse md:flex-row md:justify-between gap-8 md:gap-[240px]'>
            <div className='flex flex-col gap-0 md:gap-10'>
              <p className="text-[0.9rem] md:text-base">
                Established in 2015, the OISP Student Ambassadors Club
                actively promotes the positive image of OISP students.
                The club acts as a bridge between OISP and the student body,
                fostering connections between Vietnamese and international
                students, and facilitating engagement between students and
                potential employers.
              </p>
              <div>
                <p className='text-[0.9rem] md:text-base font-bold mb-2'>Follow us on social media!</p>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/oisp.student.ambassadors" className="text-2xl">
                    <i className="pi pi-facebook text-[2rem] hover:text-[#1877F2]"></i>
                  </a>
                  <a href="https://www.instagram.com/osaxoi/" className="text-2xl">
                    <i className="pi pi-instagram text-[2rem] hover:text-[#E1306C]"></i>
                  </a>
                  <a href="https://www.youtube.com/@oispstudentambassadors2015" className="text-2xl">
                    <i className="pi pi-youtube text-[2rem] hover:text-[#FF0000]"></i>
                  </a>
                  <a href="https://www.youtube.com/@oispstudentambassadors2015" className="text-2xl">
                    <i className="pi pi-tiktok text-[2rem] hover:text-[#2AF0EA]"></i>
                  </a>
                </div>
              </div>
            </div>
            <Image
              src={`/osa_vertical_white.svg`}
              alt="OSA Logo"
              className='h-20 md:h-28'
              width={500}
              height={100}
            />
          </div>
          <div>
            <div className='h-1 bg-[#E4E4E7]'></div>
            <p className="footnote mt-2 font-normal leading-tight">
              Copyright © {currentYear} OISP Student Ambassadors. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}