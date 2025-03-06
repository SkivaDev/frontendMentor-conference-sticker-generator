import Form from "@/components/Form";

export default function Home() {
  return (
    <div className="w-full ">
      <main>
        <div className="w-full max-w-[880px] mx-auto px-4 py-[20px] bg-violet-700">
          <div className="text-white text-center">
            <h1 className="text-[60px] font-bold leading-[65px] tracking-[-1px]">
              Your Journey to Coding Conf 2025 Starts Here!
            </h1>
            <p className="text-[23px] leading-[30px] mt-[22px]">
              Secure your spot at next year&apos;s biggest coding conference.
            </p>
          </div>

          <div className="mt-[40px] w-full max-w-[495px] mx-auto">
            <Form />
          </div>
        </div>
      </main>
    </div>
  );
}
