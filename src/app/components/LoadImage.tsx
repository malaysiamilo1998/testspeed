'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

interface Props {
  imageSrc: string
  domainName: string
  domainAddress: string
}

const ImageComponent = (props: Props) => {
  const [loadingTime, setLoadingTime] = useState(0)
  const ran = Math.random()
  const img = props.imageSrc + '?' + ran

  useEffect(() => {
    const image = new Image()
    const startTime = performance.now()

    image.onload = () => {
      const endTime = performance.now()

      const timeInSeconds = Math.floor(endTime - startTime)
      setLoadingTime(timeInSeconds)
    }

    image.src = img

    // Cleanup
    return () => {
      image.onload = null
    }
  }, [])

  return (
    <Link href={props.domainAddress}>
      <div className='rounded-lg p-10 border-solid border-2 border-yellow-500'>
        {/* <img src={props.imageSrc} /> */}
        <p></p>
        {loadingTime !== null && <p>{loadingTime} 毫秒</p>}
        <div>{props.domainName}</div>
      </div>
    </Link>
  )
}

export default ImageComponent
