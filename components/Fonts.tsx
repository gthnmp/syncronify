import { Open_Sans, Noto_Serif, Poiret_One } from 'next/font/google'

export const openSans = Open_Sans({ 
  subsets: ['latin'],
  weight: ['300','400','500','600','700'],
  variable: '--font-open-sans'
})

export const notoSerif = Noto_Serif({ 
  subsets: ['latin'], 
  weight: ['300','400','500','600','700'],
  variable: '--font-noto-serif',
})

export const poiretOne = Poiret_One({ 
  weight: ['400'],
  subsets: ['latin'], 
  variable: '--font-poiret-one',
})
