import React from 'react'
import { Links } from '../data/defaultLeftLinks';

type Props = {
  onSectionClick: (cardLink: string) => void;
  activeComponent: string;
}

const DefaultLeft = ({onSectionClick, activeComponent}: Props) => {
  const handleClick = (cardLink: string) => {
    onSectionClick(cardLink)
  }

  return (
    <div className='w-[25%] '>
        {
          Links.map((link, index) => {
            return (
              <div className='my-4' key={index}>
                <button className={`border rounded-lg w-full shadow-sm text-left py-4 px-4 font-normal text-base ${
              activeComponent === link.component
                ? "bg-[#FFBA35] text-[#101010]" 
                : "bg-white text-[#101010] border-[#878787]" 
            }`} onClick={() => handleClick(link.component)}>{link.title}</button>
              </div>
            )
          })
        }
    </div>
  )
}

export default DefaultLeft