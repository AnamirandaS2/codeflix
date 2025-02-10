import Image from 'next/image'
import bannerPokemon from '../assets/image.png'
import Header from './components/Header'
import { InformationCircleIcon, PlayIcon } from '@heroicons/react/16/solid'

export default function Home() {
    return (
        <div className="relative h-screen lg:h-[140vh] overflow-hidden bg-gradient-to-b from-transparent via-black/100 to-[130%] to-black">
            <Header />
            <main className="relative pb-24 pl-4 lg:pl-16">
                <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
                    <div className="absolute left-0 top-0 -z-10 flex h-[95vh] w-screen">
                        <Image
                            src={bannerPokemon}
                            alt="pipipopo"
                            fill={true}
                            className="h-[65vh] object-cover object-top lg:h-[95vh]"
                        />
                    </div>
                    <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
                        PÓKEMON
                    </h1>
                    <p className="text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl">
                        Explore o mundo de Pokémon com Ash Ketchum e seu
                        parceiro Pikachu enquanto eles fazem novos amigos,
                        encontram Pokémon poderosos e buscam o objetivo supremo
                        de Ash: Tornar-se um Mestre Pokémon!
                    </p>
                </div>
                <div className="flex space-x-3">
                    <button className="md:text-xl flex cursor-pointer items-center gap-x-2 rounded px-5 py-1.5 font-semibold transition hover:opacity-75 md:px-8 md:py-2.5 bg-white text-black">
                        <PlayIcon className="h-6" />
                        Play
                    </button>
                    <button className="md:text-xl flex cursor-pointer items-center gap-x-2 rounded px-5 py-1.5 font-normal transition hover:opacity-75 md:px-8 md:py-2.5 bg-white bg-opacity-30 text-white">
                        <InformationCircleIcon className="h-6" />
                        More Info
                    </button>
                </div>
            </main>
        </div>
    )
}
