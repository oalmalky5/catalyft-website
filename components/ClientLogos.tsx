import Image from 'next/image';
import clsx from 'clsx';
import { MotionSection, Item, fadeIn, fadeInUp } from '@/components/anim';

const clients = [
  {
    name: 'Mach49',
    logo: '/client-logos/mach49-logo-clean.png',
    className: 'max-h-8 max-w-[142px] sm:max-w-[156px]',
  },
  {
    name: 'PrintyMed',
    logo: '/client-logos/printymed-logo-clean.png',
    className: 'max-h-11 max-w-[104px] sm:max-w-[112px]',
  },
  {
    name: 'Next15',
    logo: '/client-logos/next15-logo-clean.png',
    className: 'max-h-8 max-w-[120px]',
  },
  {
    name: 'Cybereason',
    logo: '/client-logos/cybereason-logo.png',
    className: 'max-h-8 max-w-[150px] sm:max-w-[164px]',
  },
  {
    name: 'Incubeta',
    logo: '/client-logos/incubeta-logo-clean.png',
    className: 'max-h-8 max-w-[132px] sm:max-w-[146px]',
  },
  {
    name: 'Whiteshield',
    logo: '/client-logos/whiteshield-logo.svg',
    className: 'max-h-8 max-w-[142px] sm:max-w-[156px]',
  },
  {
    name: 'WorldVue',
    logo: '/client-logos/worldvue-logo-clean.png',
    className: 'max-h-9 max-w-[136px] sm:max-w-[150px]',
  },
  {
    name: 'Inkit',
    logo: '/client-logos/inkit-logo.svg',
    className: 'max-h-8 max-w-[104px]',
  },
  {
    name: 'Qashio',
    logo: '/client-logos/qashio-logo.svg',
    className: 'max-h-8 max-w-[118px]',
  },
  {
    name: 'Holborn Assets',
    logo: '/client-logos/holborn-assets-logo.png',
    className: 'max-h-8 max-w-[150px] sm:max-w-[164px]',
  },
];

export default function ClientLogos() {
  return (
    <MotionSection
      id="clients"
      className="bg-[#f7f6f2] px-6 py-14 md:py-16"
      aria-labelledby="client-work-title"
      once
      amount={0.25}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.6fr] lg:items-center xl:gap-16">
          <div>
            <Item variants={fadeIn}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Selected client work
              </p>
            </Item>
            <Item variants={fadeInUp}>
              <h2
                id="client-work-title"
                className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-neutral-950 md:text-4xl"
              >
                Companies we’ve supported in Saudi Arabia
              </h2>
            </Item>
            <Item variants={fadeInUp}>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-neutral-600">
                A selection of companies we’ve supported across setup,
                operations, restructuring, and Saudi market-entry work.
              </p>
            </Item>

            <Item variants={fadeIn}>
              <p className="mt-6 text-sm text-neutral-500">
                Some client work remains confidential and is not shown here.
              </p>
            </Item>
          </div>

          <Item variants={fadeInUp}>
            <div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-12">
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="flex min-h-14 items-center justify-center"
                  title={client.name}
                >
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={180}
                    height={64}
                    className={clsx(
                      'h-auto w-auto object-contain grayscale opacity-55 contrast-125 transition duration-200 hover:opacity-85',
                      client.className
                    )}
                  />
                </div>
              ))}
            </div>
          </Item>
        </div>
      </div>
    </MotionSection>
  );
}
