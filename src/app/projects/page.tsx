"use client";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Card } from "@components/Card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { CaretLeft, CaretRight } from "@phosphor-icons/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EVENTS } from "../../constants/eventList";
import { CustomButton } from "@components/Button";
import { Play } from "@phosphor-icons/react/dist/ssr";

export default function ProjectsPage() {
  return (
    <div className={`translate-y-[-75px] flex flex-col`}>
      <section className="h-[50rem] flex flex-col justify-end bg-[url(/icf25_hero.jpg)] bg-cover bg-center">
        <div className="px-14 py-10 h-full bg-black bg-opacity-75 text-white justify-end flex flex-col">
          <div className="w-[640px] mx-auto flex flex-col items-center gap-5">
            <h1 className="leading-none mb-3 text-center">
              INTERNATIONAL CONNECTION FESTIVAL 2025
            </h1>
            <p className="text-center font-normal text-lg">
              {`International Connection Festival 2025, themed "Into the Harmony," took place on May 10th at Ho Chi Minh City University of Technology, VNU-HCM. This magical event featured traditional costume performances, national item exhibitions, and music festivals, attracting over 500 young people to celebrate and experience diverse cultures.`}
            </p>
            <Link
              href="https://www.facebook.com/InternationalConnectionFestival/posts/pfbid02tp1FupmXwhJWRb4aZFtvPeeY2EVd64YELXHiNvPHToqvFxEGiSpo5XhocbvSA7f4l"
              target="_blank"
            >
              <CustomButton
                className={`mt-2`}
                startContent={<Play size={18} weight="bold" />}
              >
                Watch the recap
              </CustomButton>
            </Link>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center mt-16">
        <h1>Our past projects</h1>
        <div className="relative flex items-center w-full">
          <Button
            id="prevBtn"
            radius="full"
            isIconOnly
            className="rounded-full bg-muted/25 absolute left-6 z-10 p-2"
          >
            <CaretLeft size={48} weight="bold" />
          </Button>
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={20}
            modules={[Navigation]}
            simulateTouch={false}
            navigation={{
              nextEl: "#nextBtn",
              prevEl: "#prevBtn",
            }}
          >
            {EVENTS.eventList.map((event) => (
              <SwiperSlide key={event.id} className="!h-auto">
                <Card {...event} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Button
            id="nextBtn"
            radius="full"
            isIconOnly
            className="rounded-full bg-muted/25 absolute right-6 z-10 p-2"
          >
            <CaretRight size={48} weight="bold" />
          </Button>
        </div>
      </section>
    </div>
  );
}
