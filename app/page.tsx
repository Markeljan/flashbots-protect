import Image from "next/image"
import ProtectButtonSelector from "@/components/flashbots-protect/protect-button-selector"

export default function IndexPage() {
  return (
    <section>
      <section className="flex flex-col items-center justify-center gap-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col text-center items-center prose prose-mauve">
          <h1 className="md:text-5xl font-bold px-4 pt-6">
            Protect Your Transactions with Flashbots
          </h1>
          <p className="max-w-[700px] font-semibold text-xl text-cyan-12 px-4 -mt-5">
            Your fortress against frontrunning, sandwich attacks, and more on the Ethereum network.
          </p>
        </div>
        <div className=" flex flex-col md:flex-row justify-between items-center bg-cyan-4 dark:bg-cyan-2 pt-8 min-h-[150px] w-full ">
          <div className="flex justify-center w-1/2 md:pl-80">
            <Image src="/flashboty.png" width={400} height={400} alt="Flashbots" className="order-2 md:order-1 mb-4 md:mb-0" />
          </div>
          <div className="md:h-[400px] w-1/2 flex flex-col items-center justify-start text-center md:text-left order-1 md:order-2 md:pr-80 pt-2">
            <ProtectButtonSelector />
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row gap-6 my-10 ">
          <div className="flex flex-col px-4 text-center text-xl gap-4">
            <div className="
            flex flex-row items-center justify-center py-4 px-6
              rounded-full
              bg-mauve-4
            "><p>Integrate directly with your wallet through our RPC endpoint.</p>
            </div>
            <div className="
            flex flex-row items-center justify-center py-4 px-6
              rounded-full
              bg-mauve-4
            "><p>Experience robust, hands-free defense against MEV threats.</p>
            </div>
            <div className="
            flex flex-row items-center justify-center py-4 px-6
              rounded-full
              bg-mauve-4
            "><p>Earn rewards from searchers for making transactions.</p>
            </div>
          </div>
        </div>
      </section >

      <div className="relative">
        <Image src="/sitter-mask.png" width={1480} height={1480} alt="A cool cat" />
        <div className="absolute top-2 left-16 md:top-1/3 md:left-64 bg-cyan-3 text-cyan-12 p-1 md:p-4 rounded-md shadow-lg opacity-75">
          <h3 className="text-sm md:text-xl font-bold opacity-100">Illuminate</h3>
          <p>Bringing transparency to MEV activity.</p>
        </div>
        <div className="absolute top-16 left-5 md:top-40 md:left-2/3 bg-cyan-3 text-cyan-12 p-1 md:p-4 rounded-md shadow-lg opacity-75">
          <h3 className="text-sm md:text-xl font-bold opacity-100">Democratize</h3>
          <p>Democratizing access to MEV revenue.</p>
        </div>
        <div className="absolute bottom-12 right-7 md:bottom-20 md:right-32 bg-cyan-3 text-cyan-12 p-1 md:p-4 rounded-md shadow-lg opacity-75">
          <h3 className="text-sm md:text-xl font-bold opacity-100">Distribute</h3>
          <p>Sustainable distribution of MEV revenue.</p>
        </div>
      </div>
    </section >
  )
}
