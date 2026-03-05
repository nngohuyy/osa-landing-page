"use client";
// import './homepage.module.css';
import { DESCRIPTION, SAMPLE } from "@constants/descriptions";
import { MemberCard } from "@components/MemberCard";
import { MotionCard } from "@components/MotionCard";
import { CustomButton } from "@components/Button";

export default function Home() {
  return (
    <div className={`translate-y-[-78px] flex flex-col space-y-16 md:space-y-32`}>
      <section className="home-top-card flex flex-col justify-center items-center h-[100dvh]">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center py-24 px-4">
          <div className="flex flex-col items-center gap-4">
            <h1 className="leading-[1.1] text-center font-semibold text-5xl lg:text-[6rem]">
              We are
              <br />
              OISP Student Ambassadors!
            </h1>
            <p className="md:text-xl leading-snug text-center">
              Connecting cultures, inspiring leadership, and empowering the
              student community.
            </p>
          </div>
          {/* <CustomButton className={`mt-10`}>Learn more</CustomButton> */}
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-4 md:px-14 xl:px-14 flex flex-col gap-10 md:space-y-0 md:flex-row">
        <div className="grid md:grid-cols-2 gap-5">
          <h1 className="home-section-heading text-center md:text-left leading-none">Our mission</h1>
          <div>
            <p className="text-center md:text-left text-lg md:text-xl leading-snug">
              {DESCRIPTION.about_us_long}
            </p>
            <p className="text-center md:text-left text-lg md:text-xl leading-snug">
              {DESCRIPTION.about_us_short}
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-4 md:px-14 xl:px-14 w-full">
        <h1 className="home-section-heading !text-center">Our team</h1>
        <div className="grid md:grid-cols-3 gap-4 min-h-[500px]">
          {[
            {
              first: "Phat",
              last: "Le Huu",
              pos: "Vice President",
              img: "/images/bod/bod_huu_phat.jpg",
              mt: "mt-0",
            },
            {
              first: "Phuoc",
              last: "Ngo Huu",
              pos: "President",
              img: "/images/bod/bod_huu_phuoc.jpg",
            },
            {
              first: "Uyen Ly",
              last: "Do Ngoc",
              pos: "Vice President",
              img: "/images/bod/bod_uyen_ly.jpg",
              mt: "mt-0",
            },
          ].map((member, i) => (
            <MotionCard key={i} customDelay={i}>
              <MemberCard
                memberFirstName={member.first}
                memberLastName={member.last}
                memberPosition={member.pos}
                memberImage={member.img}
                marginTop={member.mt}
              />
            </MotionCard>
          ))}
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-4 md:px-14 xl:px-14 w-full flex flex-col-reverse md:flex-row gap-14">
        <div className="md:w-1/2 bg-gray-300 rounded-3xl overflow-clip">
          <div className="bg-[url('/eventsPage_cover.jpg')] bg-cover bg-no-repeat bg-center h-full"></div>
        </div>
        <div className="md:w-1/2">
          <h1 className="home-section-heading text-center md:text-left leading-none">Our statement</h1>
          <p className="text-center md:text-left text-lg leading-snug">
            {DESCRIPTION.statement}
          </p>
        </div>
      </section>
    </div>
  );
}
