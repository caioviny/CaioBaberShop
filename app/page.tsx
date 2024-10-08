import { SearchIcon } from 'lucide-react';
import Header from './_components/header';
import { Input } from './_components/ui/input';
import { Button } from './_components/ui/button';
import Image from 'next/image';
import { Card, CardContent } from './_components/ui/card';
import { AvatarImage } from '@radix-ui/react-avatar';
import { Avatar } from './_components/ui/avatar';
import { Badge } from './_components/ui/badge';

import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"

const Home = async () => {
  //Chamando o Banco de Dados
  const barbershops = await db.barbershop.findMany({});
  
  return (
    <div>
      {/* header */}
      {/* Renderizando o Componente Header */}
      <Header />
      <div className="p-5">
        {/*TEXTO*/}
        {/* Renderizando o Texto com o nome do user e a data do dia */}
        <h2 className="text-xl font-bold">Olá, Caio TAVARES!</h2>
        <p>Segunda-Feira, 12 de Agosto</p>
        {/* Input com a barra de pesquisa */}

        {/*BUSCA*/}
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          {/*Adding um btn com um icon de barra de pesquisa*/}
          <Button>
            <SearchIcon /> {/*Icon de pesquisa*/}
          </Button>
        </div>

        {/*IMAGEM*/}
        {/*Image Banner Agendamento*/}
        <div className="relative h-[150px] w-full mt-6">
          <Image alt="Agende nos melhores conosco"
            src="/banner01.jpg"
            fill
            className="rounded-xl object-cover" />
        </div>

        {/*AGENDAMENTO*/}
        <h2 className="mt-6 mb-3 text-xs font-bold uppercase text-gray-400">Agendamentos</h2>

        <Card>
          <CardContent className="flex justify-between p-0">
            {/*ESQUERDA*/}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"/>
                </Avatar>
                <p className="text-sm">Rafa & Luca Barbearia</p>
              </div>
            </div>
            {/*DIREITA*/}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm mt-6">Agosto</p>
              <p className="text-2xl">15</p>
              <p className="text-sm">08:35</p>
            </div>
          </CardContent>
        </Card>

        {/*Recomendados*/}
        <h2 className="mt-6 mb-3 text-xs font-bold uppercase text-gray-400">Recomendados</h2>
        {barbershops && barbershops.length > 0 ? (
          barbershops.map(barbershop => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))
        ) : (
          <p>No barbershops available.</p>
        )}
      </div>
    </div>
  )
}

export default Home;
