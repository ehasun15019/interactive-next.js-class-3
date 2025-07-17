import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='py-6'>
        <ul className='flex gap-6 mt-[60px]'>
            <li>
                <Link href="/">Home</Link>
            </li>

            <li>
                <Link href="/static">Static</Link>
            </li>

            <li>
                <Link href="/dynamic">Dynamic</Link>
            </li>

            <li>
                <Link href="/hybrid">Hybrid</Link>
            </li>

            <li>
                <Link href="/isr">ISR</Link>
            </li>

            <li>
                <Link href="/rsc">RSC</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header