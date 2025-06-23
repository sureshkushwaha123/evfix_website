import React from 'react'

const FooterLinks = ({links}) => {
    console.log("FooterLinks",links);
  return (
    <>
    {links.map((link) => (
        <li key={link.name} className="cursor-pointer transition-all hover:text-green-500 
        duration-300 hover:translate-x-[2px]">
            <a href="">{link.name}</a>
        </li>
    ))}
    </>
  )
}

export default FooterLinks
