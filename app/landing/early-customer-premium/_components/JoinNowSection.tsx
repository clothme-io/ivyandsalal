import { EmailOptInForm } from "@/app/components/EmailOptInForm";
import { toast } from 'sonner';

export const runtime = "edge";

const JoinNowSection = ({ className }: { className?: string }) => {
  return (
    <section className={`min-h-[100svh] flex justify-center relative ${className}`}>
      <div className="px-6 md:px-10 md:w-[856px] pb-[57px]">
        <div className="text-center space-y-4 pt-12 md:pt-20">
          <h1 className="text-[30px] md:text-[40px] font-bold text-black">Why Join As VIP NOW!</h1>
          <div className="space-y-[26px] mt-10 lg:whitespace-nowrap">
            <p>We will send you  an exclusive VIP Card that will give you a 5% lifetime discount only 100 will be released.</p>
            <p>We will send you  an exclusive VIP Card that will give5% lifetime discount only 100 will be released.</p>
            <p>We will send you  an exclusive VIP Card that will give you a 5% lifetionly 100 will be released.</p>
          </div>
        </div>

        <EmailOptInForm
          className="w-full [&_input]:!bg-[#D9D9D9] mt-[50px] md:mt-[89px]"
          action={{
            title: "Join As VIP",
            // callback: async (email) => {
            //   console.log({ email })
            //   try {
            //     await new Promise((resolve, reject) => setTimeout(reject, 5000))
            //     toast('Email submitted')
            //   } catch (e) {
            //     toast.error('Failed to submit email')
            //   }
            // }
          }}
          note="We promise to never sell or redistribute your email"
        />
      </div>
    </section>
  )
}

export default JoinNowSection