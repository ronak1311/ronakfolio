import { Info} from "../User";

const Footer=()=>{
    return <div className="mt-20 mb-10 font-mono flex flex-col gap-2 items-center">
        <div className="text-textColor text-xl md-mx:text-lg sm-mx:text-base xs-mx:text-sm xs-mx:flex flex-col items-center">&copy;{new Date().getFullYear()} | <a href="https://github.com/ronak1311" target="_blank">{Info.name} </a><span className="xs-mx:hidden"></span> </div>
    </div>
}
export default Footer;