import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"

//Criando componente da HEADER
const Header = () => {
    return ( 
        <Card>
            <CardContent className="flex flex-row items-center justify-between p-5">
                {/*Imagem da logo da barbearia*/}
                <Image alt="CB BARBER" src="/header-image.jpg" height={18} width={128}></Image>
                <Button size="icon" variant="outline">
                    <MenuIcon />
                </Button>
            </CardContent>
        </Card>
     )
}
 
export default Header