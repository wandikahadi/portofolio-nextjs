import Link from "next/link";

import { FaGithub, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
    {icon: <FaGithub/>, path:""},
    {icon: <FaLinkedin/>, path:""},
    {icon: <FaYoutube/>, path:""},
    {icon: <FaTwitter/>, path:""},
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index)=>(
            <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        ))}
    </div>
  )
}

export default Social