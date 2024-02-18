import React from 'react'
import '@styles/IconLink.scss'

const IconLink: React.FC<{iconUrl: string, alt: string, href: string}> =
  ({iconUrl, alt, href}) => {
    return (
      <a className="icon-link" href={href} target="_blank">
        <img src={iconUrl} alt={alt} width={36} height={36}/>
      </a>
    )
  }

export default IconLink
