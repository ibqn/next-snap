import { Button } from 'components/button'
import Image from 'next/image'
import HeroDesktop from './hero-desktop.png'
import HeroMobile from './hero-mobile.png'

import ClientMaker from './client-maker.svg'
import ClientAudiophile from './client-audiophile.svg'
import ClientDatabiz from './client-databiz.svg'
import ClientMeet from './client-Meet.svg'

export const Main = () => {
  return (
    <section className="mt-6 grid grid-rows-2 xl:grid-cols-2 xl:gap-5">
      <div className="relative order-2 flex flex-col items-center text-center xl:order-1 xl:items-start xl:justify-center xl:text-left">
        <h1 className="mt-6 text-3xl font-black xl:whitespace-pre-line xl:text-8xl">
          Make
          <br />
          remote work
        </h1>
        <p className="my-12 whitespace-pre-line text-lg text-medium-gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, nulla
          exercitationem. Totam saepe consequatur quasi consequuntur delectus
          cumque culpa error libero nobis tempora, ab, asperiores, veritatis
          dolore magnam deserunt perferendis.
        </p>
        <Button isFilled>learn more</Button>
        <div className="bottom-2 mt-20 ml-0 flex justify-around gap-x-10 xl:absolute xl:gap-x-20">
          <ClientDatabiz />
          <ClientAudiophile />
          <ClientMeet />
          <ClientMaker />
        </div>
      </div>
      <div className="order-1 mt-20 hidden  xl:flex">
        <Image src={HeroDesktop} alt="Hero image" />
      </div>
      <div className="mb-8 flex justify-center  xl:hidden">
        <Image src={HeroMobile} alt="Hero image" />
      </div>
    </section>
  )
}
