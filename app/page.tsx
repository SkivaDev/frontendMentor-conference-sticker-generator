import Form from "@/components/Form";

export default function Home() {
  return (
    <div className="w-full ">
      <main>
        <div className="w-full max-w-[880px] mx-auto px-4 pt-[7px] sm:pt-[20px] pb-[118px] bg-violet-700">
          <div className="text-white text-center">
            <h1 className="text-[24px] sm:text-[55px] md:text-[60px] font-medium sm:font-bold leading-[35px] sm:leading-[65px] tracking-[2px] sm:tracking-[-1px]">
              Your Journey to Coding Conf 2025 Starts Here!
            </h1>
            <p className="text-[16px] sm:text-[20px] md:text-[23px] leading-[24px] sm:leading-[30px] tracking-[1.5px] sm:tracking-normal mt-[22px]">
              Secure your spot at next year&apos;s biggest coding conference.
            </p>
          </div>

          <div className="mt-[37px] sm:mt-[27px] w-full max-w-[492px] mx-auto">
            <Form />
          </div>
        </div>
      </main>
    </div>
  );
}
