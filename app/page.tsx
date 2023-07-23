import Image from "next/image"
import ProtectButtonSelector from "@/components/flashbots-protect/protect-button-selector"

export default function IndexPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 pb-8 pt-6 md:py-10 bg-mauve-2">
      <div className="flex max-w-[980px] flex-col text-center items-center prose prose-mauve border border-black">
        <h1 className="md:text-5xl font-bold px-2">
          Elevate Your Transaction Security
        </h1>
        <p className="max-w-[700px] text-xl text-cyan-12">
          Your fortress against frontrunning, sandwich attacks, and more on the Ethereum network.
        </p>
      </div>
      <div className="flex items-center flex-col md:flex-row gap-4 mt-4 ">
        <Image src="/flashboty.png" width={260} height={260} alt="Flashbots" />
        <div className="px-4 text-center">
          <strong>1.</strong>
          <p>Integrate directly with your wallet through our RPC endpoint.</p>
          <strong>2.</strong>
          <p>Experience robust, hands-free defense against MEV threats.</p>
          <strong>3.</strong>
          <p>Earn rewards from searchers for making transactions.</p>
        </div>
      </div>
      <div className="flex flex-row md:flex-row gap-4 mt-4 bg-cyan-5 ">
        <ProtectButtonSelector />
      </div>
      <div className="background">

      </div>
      <Image className="border border-black" src="/calm-guy.png" width={1480} height={1480} alt="Calm guy" />

      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">


      </div>
    </section>
  )
}
