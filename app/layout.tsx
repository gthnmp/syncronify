import './globals.css'
import {notoSerif, openSans,poiretOne} from '@/components/Fonts'

export const metadata = {
  title: 'Syncronify',
  description: 'A private place to connect and collaborate',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg" sizes="<generated>"/>
      </head>
      <body className={`${notoSerif.variable} ${openSans.variable} ${poiretOne.variable}`}>
        <div className="min-h-screen bg-background flex flex-col items-center font-sans">
          {children}
        </div>
      </body>
    </html>
  )
}
