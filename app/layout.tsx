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
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,301,701,300,501,401,901,400&display=swap" rel="stylesheet"/>
      </head>
      <body className={`${notoSerif.variable} ${openSans.variable} ${poiretOne.variable}`}>
        <div className="min-h-screen bg-background flex flex-col items-center font-sans">
          {children}
        </div>
      </body>
    </html>
  )
}
