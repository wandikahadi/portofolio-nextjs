import Link from "next/link";

import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const socials = [
    {icon: <FaGithub/>, path:"https://github.com/wandikahadi"},
    {icon: <FaLinkedin/>, path:"https://linkedin.com/in/wandikahadi/"},
    {icon: <FaInstagram/>, path:"https://instagram.com/wandika_12k"},
    {icon: <FaEnvelope/>, path:"mailto:wandikahadi94@gmail.com"},
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