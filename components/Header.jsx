import Link from "next/link";
import Nav from "./Nav";
import {Button} from "./ui/button";
const Header = () => {
  return (
   <header className="py-8 xl:py-12 text-white">
    <div className="container mx-auto flex items-center justify-between">
        {/* logo */}
        <Link href="/">
            <h1 className="text-4xl font-semibold">
                Aman <span className="text-accent">Tripathi.</span>
            </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
            <Nav/>
            <Link href = "/contact">
                <Button>
                    Contact Me
                </Button>
            </Link>
        </div>
        {/* mobile nav */}
        <div className="xl:hidden">
            <Button>
                {/* <Menu/> */}
            </Button>
        </div>
    </div>
   </header>
   
  )
}

export default Header
