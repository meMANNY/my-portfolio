import Link from 'next/link';
import {FaGithub, FaLinkedin, FaTwitter,} from 'react-icons/fa';
import {TbBrandLeetcode} from 'react-icons/tb';

const socials = [
  {icon: <FaGithub/>, path: ''},
  {icon: <FaLinkedin/>, path: ''},
  {icon: <FaTwitter/>, path: ''},
  {icon: <TbBrandLeetcode/>, path: ''},
];
const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item,index)=>{
        return(
          <Link key = {index} href={item.path} className={iconStyles}>
              {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials
