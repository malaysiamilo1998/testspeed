'use client'
import Image from 'next/image'
import ImageComponent from './components/LoadImage'

export default function Home () {
  const domainName = [
    ['https://tcelue.co', 'tcelue.co'],
    ['https://tcelue.ooo', 'tcelue.ooo'],
    ['https://tcelue.tv', 'tcelue.tv'],
    ['https://tcelue.cc', 'tcelue.cc'],
    ['https://tcelue.com', 'tcelue.com'],
    ['https://tcelue.ws', 'tcelue.ws']
  ]
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <div className='fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t lg:static lg:h-auto lg:w-auto lg:bg-gray-500 rounded-lg'>
          <a
            className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
            href='https://tcelue.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src='/tcelue-logo.png'
              alt='Tcelue Logo'
              width={229}
              height={50}
              priority
            />
          </a>
        </div>
      </div>
      <p>
        在测试完成后，页面可能会显示加载所花费的时间（以毫秒为单位），用于指示域名的加载速度。
      </p>
      <div className='mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left gap-4'>
        {domainName.map(name => (
          <ImageComponent
            key={Math.random()}
            domainName={name[1]}
            domainAddress={name[0]}
            imageSrc={`${name[0]}/template/eis_bet/img/logo.png`}
          />
        ))}
      </div>
    </main>
  )
}
