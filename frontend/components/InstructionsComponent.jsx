import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
import Image from 'next/image'

export default function InstructionsComponent() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <main>

        <section className="flex flex-col items-center justify-center">
          <Image src="hero-image.svg" alt="Hero image" width={960} height={256} className="w-1/2 h-auto" />
          <p className="text-lg mt-4 text-center">A decentralized log that tracks carbon credits on blockchain. <br /> By incentivizing sustainable practices with tokens, the aim is to promote a greener future.</p>
        </section>

        <div class="mt-24 mx-auto max-w-2xl lg:text-center">
          <p class="mt-2 text-3xl tracking-tight text-gray-800 sm:text-4xl">Discover platform features</p>
        </div>


        <div class="p-8 mt-12 w-3/4 mx-auto">
          <div className="grid grid-cols-2 gap-4 text-center text-black">
            <div className="bg-white p-4 w-3/4 h-32 rounded-lg shadow-md transition-transform duration-500 ease-in hover:scale-105">
              <h2 className='text-2xl' >
                Track Your Impact
              </h2>
            </div>
            <div className="bg-white p-4 w-3/4 h-32 rounded-lg shadow-md transition-transform duration-500 ease-in hover:scale-105">
              <h2 className='text-2xl' >
                Earn Tokens for Sustainability
              </h2>
            </div>
            <div className="bg-white p-4 w-3/4 h-32 rounded-lg shadow-md transition-transform duration-500 ease-in hover:scale-105">
              <h2 className='text-2xl' >
                Join a Community of Change-Makers
              </h2>
            </div>
            <div className="bg-white p-4 w-3/4 h-32 rounded-lg shadow-md transition-transform duration-500 ease-in hover:scale-105">
              <h2 className='text-2xl' >
                SDG 12, 13, and 17 Compliance
              </h2>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
