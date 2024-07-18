
import { socialLinks } from "../User";

const Social=()=>{
    const socialIcons=socialLinks.map((socialLink, index)=>{
        return <a   key={index} title={socialLink.isEmail ? socialLink.link : ""} href={socialLink.isEmail ? `mailto:${socialLink.link}` : `${socialLink.link}`} target="_blank"  className="font-mono text-lg  hover:text-primaryColor hover:-translate-x-1 transition transform duration-300 ease-in-out" rel="noreferrer">
       <div data-aos="fade-up-left" data-aos-duration="800" > <socialLink.icon stroke={1.5} className="" size={25} /></div>
    </a>
    })

    return <div  className="flex text-textColor items-center gap-8 mb-4" >
        {socialIcons}
    </div>
}
export default Social;

