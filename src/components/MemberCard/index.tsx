import Image from "next/image";

type MemberCardProps = {
  memberFirstName: string;
  memberLastName: string;
  memberPosition: string;
  memberImage: string;
  marginTop?: string;
}

export const MemberCard = ({ memberFirstName, memberLastName, memberPosition, memberImage, marginTop }: MemberCardProps) => {
  return (
    <main
      className={`group p-6 md:p-10 h-fit flex flex-col gap-4 md:gap-6 border-3 border-black bg-white
                  rounded-tl-3xl rounded-br-3xl hover:bg-[#35589F] hover:text-white overflow-hidden
                  ${marginTop ? marginTop : 'mt-0'}
                `}
    >
      <Image
        className="rounded-3xl border-3 border-black"
        src={memberImage}
        alt="member"
        width={0} height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
      <p className="font-extrabold leading-none text-4xl md:text-5xl uppercase mb-0">{memberFirstName}<br />{memberLastName}</p>
      <p className="bg-black group-hover:bg-white group-hover:text-black font-extrabold text-white text-xl md:text-2xl px-3 md:px-4 py-2 md:py-3">{memberPosition}</p>
    </main>
  );
}
