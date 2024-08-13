import { SearchIcon } from 'lucide-react';
import Header from './_components/header'; // Certifique-se de ajustar o caminho conforme necessário
import { Input } from './_components/ui/input';
import { Button } from './_components/ui/button';
import Image from 'next/image';

const Home = () => {
  return (
    <div>
      {/* header */}
      {/* Renderizando o Componente Header */}
      <Header />
      <div className="p-5">
        {/* Renderizando o Texto com o nome do user e a data do dia */}
        <h2 className="text-xl font-bold">Olá, Caio!</h2>
        <p>Segunda-Feira, 12 de Agosto</p>
        {/* Input com a  barra de pesquisa */}
        
        <div className="mt-6 flex itemns-center gap-2">
          <Input placeholder="Faça sua busca..."/>  
          {/*Adding um btn com um icon de barra de pesquisa*/}
          <Button>
            <SearchIcon/> {/*Icon de pesquisa*/}
          </Button>
        </div>
            
            {/*Image Banner Agendamento*/}
          <div className="relative h-[150px] w-full mt-6">
            <Image alt="Agende nos melhores conosco" 
            src="/banner01.jpg" 
            fill 
            className="rounded-xl object-cover"/>
          </div>
        </div>
    </div>
  )
}

export default Home;