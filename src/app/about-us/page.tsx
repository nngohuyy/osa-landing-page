"use client";

import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { CustomButton } from "@components/Button";
import { LEADERS_EXECS } from "@constants/leader_execs";
import { MotionBlogCard } from "@components/MotionCard";

export default function AboutUsPage() {
  return (
    <div className="translate-y-[-75px] mt-44 md:mt-60 mb-4">
      <section className="max-w-screen-xl mx-auto px-6 md:px-14">
        <p className="text-black font-semibold">About us</p>
        <div className="space-y-2 md:space-y-0">
          <h1 className="font-sans font-semibold mb-0 leading-[1.1]">
            Building Community
          </h1>
          <h1 className="font-sans font-semibold mb-0 leading-[1.1]">
            Bridging Opportunities
          </h1>
        </div>
      </section>
      <div className="space-y-20 md:space-y-28">
        <section className="bg-[url('/about_us_hero_1.jpg')] bg-cover bg-no-repeat bg-center bg-fixed h-dvh mt-10">
          <div className="max-w-screen-xl mx-auto px-5 md:px-14 h-full flex items-center justify-end">
            <div className="text-black bg-white w-96 py-10 px-8 rounded-3xl space-y-5">
              <h5 className="font-semibold mb-0 leading-none">Our Stories</h5>
              <p>
                We, the OISP Student Ambassadors, are dedicated to representing
                the student body with integrity, passion, and commitment. Our
                mission is to foster a vibrant and inclusive community, bridge
                opportunities, and empower every student to achieve their
                fullest potential.
              </p>
              <CustomButton
                endContent={<ArrowUpRight size={20} weight="bold" />}
              >
                Learn more
              </CustomButton>
            </div>
          </div>
        </section>
        <section className="max-w-screen-xl mx-auto px-5 md:px-14 grid md:grid-cols-2 gap-6">
          <h2 className="font-semibold leading-[1.1]">
            We do this
            <br />
            for a single cause
          </h2>
          <div className="space-y-6">
            <div>
              <p>
                To be the leading force in creating a supportive and dynamic
                environment where every student feels valued, heard, and inspired
                to contribute to the university and beyond. We envision a campus
                that celebrates diversity and fosters inclusivity, where students
                can thrive academically, socially, and personally.
              </p>
              <p>
                By empowering students with leadership skills and connecting them
                with opportunities, we aim to build a proactive community that
                addresses student needs and encourages positive impact.
              </p>
              <p>
                Our goal is to inspire purpose and drive, helping students pursue
                their passions and make meaningful contributions.
              </p>
            </div>
            <CustomButton
              className="mt-0 w-fit"
              endContent={<ArrowUpRight size={20} weight="bold" />}
            >
              Read our manifesto
            </CustomButton>
          </div>
        </section>
        <section className="max-w-screen-xl mx-auto px-5 md:px-14 flex flex-col gap-6">
          <h2 className="font-semibold leading-[1.1]">Our mission</h2>
          <div className="grid md:grid-cols-[1fr_2fr] gap-4">
            <div className="rounded-xl overflow-clip bg-[url('/osa_cover.jpg')] bg-cover bg-no-repeat bg-center h-48 md:h-80"></div>
            <div className="rounded-xl overflow-clip bg-[url('/eventsPage_cover.jpg')] bg-cover bg-no-repeat bg-center h-48 md:h-80"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            <div>
              <h2 className="font-light">01</h2>
              <h4 className="mb-2 leading-tight">Representation</h4>
              <p className="mt-4">
                To be the voice of the students, advocating for their needs and
                interests. We strive to ensure that every student&apos;s voice
                is heard and considered in university decisions, fostering a
                sense of empowerment and inclusion.
              </p>
            </div>
            <div>
              <h2 className="font-light">02</h2>
              <h4 className="mb-2 leading-tight">Community Building</h4>
              <p className="mt-4">
                To create a sense of belonging and unity among students through
                diverse and inclusive activities. We aim to bring students
                together, celebrating our differences and building a supportive
                network where everyone feels welcome and valued.
              </p>
            </div>
            <div>
              <h2 className="font-light">03</h2>
              <h4 className="mb-2 leading-tight">Opportunity Bridging</h4>
              <p className="mt-4">
                To connect students with opportunities for personal and
                professional growth. We are dedicated to identifying and
                promoting opportunities that enhance students&apos; academic,
                career, and personal development, helping them to achieve their
                full potential.
              </p>
            </div>
            <div>
              <h2 className="font-light">04</h2>
              <h4 className="mb-2 leading-tight">Leadership Development</h4>
              <p className="mt-4">
                To cultivate leadership skills and empower students to become
                future leaders. Through training, mentorship, and hands-on
                experiences, we aim to develop confident, capable leaders who
                can make a positive impact within the university and beyond.
              </p>
            </div>
          </div>
        </section>
        <section className="max-w-screen-xl mx-auto px-5 md:px-14 bg-white py-8 md:py-20 rounded-t-3xl">
          <h2 className="font-semibold leading-[1.1]">
            Welcome our team of Executives and Leaders
          </h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-10">
            {LEADERS_EXECS.BODS.map((member, index) => (
              <MotionBlogCard key={index} customDelay={index % 3}>
                <div className="flex flex-col">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.image}
                    alt="team member"
                    className="object-cover h-60 md:h-96 rounded-xl border-2"
                  />
                  <h5 className="mt-2 font-sans font-medium leading-tight">
                    {member.last_name + " " + member.first_name}
                  </h5>
                  <p className="leading-tight">{member.position}</p>
                </div>
              </MotionBlogCard>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-4 md:mt-6">
            {LEADERS_EXECS.LEADERS.map((member, index) => (
              <MotionBlogCard key={index} customDelay={index % 4}>
                <div key={member.first_name} className="flex flex-col">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.image}
                    alt="team member"
                    className="object-cover h-64 md:h-[25rem] rounded-xl border-2"
                  />
                  <h6 className="mt-2 font-sans font-medium leading-tight">
                    {member.last_name + " " + member.first_name}
                  </h6>
                  <p className="leading-tight">{member.position}</p>
                </div>
              </MotionBlogCard>
            ))}
          </div>
        </section>
      </div>
      <div className="max-w-screen-xl mx-auto rounded-b-3xl overflow-clip">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/osa_cover.jpg"
          alt="team member"
          className="object-cover h-[40rem]"
        />
      </div>
    </div>
  );
}
