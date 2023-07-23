import Link from "next/link"
import Image from "next/image"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import SimpleDropdown from "@/components/simple-dropdown"
import ProtectButtonSelector from "@/components/flashbot-protect-panel"

export default function IndexPage() {
  return (
    <section className="grid justify-center items-center gap-6 pb-8 pt-6 md:py-10 bg-mauve-2">
      <div className="flex max-w-[980px] flex-col text-center items-center prose prose-mauve">
        <h1 className="md:text-5xl font-bold px-2">
          Elevate Your Transaction Security
        </h1>
        <p className="max-w-[700px] text-xl text-cyan-12">
          Your fortress against frontrunning, sandwich attacks, and more on the Ethereum network.
        </p>
        <div className="flex items-center flex-col md:flex-row gap-4 mt-4">
          <Image src="/flashboty.png" width={260} height={260} alt="Flashbots" />
          <div >
            <p><strong>1.</strong> Integrate directly with your wallet through our RPC endpoint.</p>
            <p><strong>2.</strong> Experience robust, hands-free defense against MEV threats.</p>
            <p><strong>3.</strong> Earn rewards from searchers for making transactions.</p>
          </div>
        </div>
        <div className="flex flex-row md:flex-row gap-4 mt-4">

          <ProtectButtonSelector />
        </div>
      <Image src="/calm-guy.png" width={1080} height={1080} alt="Calm guy" />
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">

      </div>
    </section>
  )
}
