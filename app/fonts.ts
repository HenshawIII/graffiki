import localFont from 'next/font/local'

export const riamo = localFont({
  src: [
    {
      path: '../public/riamo/Riamosans-Regular-AF65f80e05965b6.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/riamo/Riamosans-Bold-AF65f80e0561360.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/riamo/Riamosans-Italic-AF65f80e058ff9d.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/riamo/Riamosans-Bolditalic-AF65f80e0579c85.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/riamo/Riamosans-Thin-AF65f80e059cf6e.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/riamo/Riamosans-Thinitalic-AF65f80e05b5ecb.otf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../public/riamo/Riamosans-Black-AF65f80e053401a.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/riamo/Riamosans-Blackitalic-AF65f80e05507d6.otf',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-riamo',
  display: 'swap',
})

export const fahkwang = localFont({
  src: [
    {
      path: '../public/Fahkwang/Fahkwang-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/Fahkwang/Fahkwang-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/Fahkwang/Fahkwang-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/Fahkwang/Fahkwang-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/Fahkwang/Fahkwang-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/Fahkwang/Fahkwang-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/Fahkwang/Fahkwang-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/Fahkwang/Fahkwang-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/Fahkwang/Fahkwang-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/Fahkwang/Fahkwang-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../public/Fahkwang/Fahkwang-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/Fahkwang/Fahkwang-ExtraLightItalic.ttf',
      weight: '200',
      style: 'italic',
    },
  ],
  variable: '--font-fahkwang',
  display: 'swap',
}) 