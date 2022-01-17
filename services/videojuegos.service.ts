import { Injectable } from "@angular/core";

@Injectable()
export class VideojuegosService{
  private videojuegos: Videojuego[]=[
    {
    nombre: 'Fortnite',
    descripcion:'Fortnite es un videojuego del año 2017 desarrollado por la ' +
      'empresa Epic Games, lanzado como diferentes paquetes de software que ' +
      'presentan diferentes modos de juego, pero que comparten el mismo motor de ' +
      'juego y mecánicas. Fue anunciado en los Spike Video Game Awards en 2011',
    img:'assets/img/fortnite.jpg',
    lanzamiento:'2017',
    consola:'PS4',





  },
    {
      nombre: 'The Witcher 3',
      descripcion:'The Witcher 3: Wild Hunt es un videojuego de rol desarrollado' +
        ' y publicado por la compañía polaca CD Projekt RED. Esta compañía es la ' +
        'desarrolladora mientras que la distribución corre a cargo de la Warner ' +
        'Bros. Interactive, en el caso de Norteamérica y Bandai Namco para Europa.',
      img:'assets/img/Witcher.jpg',
      lanzamiento:'2015',
      consola:'Xbox',

    }
    ,
    {
      nombre: 'Resident Evil 2 Remake',
      descripcion:'Resident Evil 2 Remake —cuyo título original en Japón es Biohazard 2' +
        ' es un videojuego de disparos en tercera persona perteneciente al género de videojuego' +
        ' de terror, desarrollado y publicado por Capcom, se trata de una nueva versión del videojuego ' +
        'homónimo de 1998',
      img:'assets/img/ResidentEvil2.jpg',
      lanzamiento:'2015',
      consola:'Xbox',

    }    ,
    {
      nombre: 'For Honor',
      descripcion:'For Honor es un videojuego de acción en tercera persona que destacó por su sistema ' +
        'de combate tridireccional. Ha sido desarrollado por Ubisoft Montreal y distribuido por Ubisoft ' +
        'para las plataformas Microsoft Windows, PlayStation 4 y Xbox One.',
      img:'assets/img/ForHonor.jpg',
      lanzamiento:'2014',
      consola:'PS4',

    }
    ,
    {
      nombre: 'Nier Automata',
      descripcion:'NieR: Automata es un videojuego de rol de acción desarrollado por PlatinumGames ' +
        'y publicado por Square Enix para PlayStation 4, Microsoft Windows y Xbox One. Aunque en un ' +
        'principio la distribuidora planeó su lanzamiento para noviembre de 2016, finalmente lo publicó' +
        ' el 23 de febrero de 2017 en Japón.',
      img:'assets/img/Nier.jpg',
      lanzamiento:'2017',
      consola:'PS4',

    }
    ,
    {
      nombre: 'Fallout 4',
      descripcion:'Fallout 4 es un videojuego de rol de acción desarrollado por Bethesda Game Studios y distribuido' +
        ' por Bethesda Softworks. Es la séptima entrega de la serie Fallout. El título se anunció el 3 de junio de 2015' +
        ' mediante la publicación de un tráiler en la página oficial de Bethesda',
      img:'assets/img/fallout.jpg',
      lanzamiento:'2015',
      consola:'PS4',

    },
    {
      nombre: 'Bloodborne',
      descripcion:'Bloodborne es un videojuego de rol de acción dirigido por Hidetaka Miyazaki, desarrollado por From ' +
        'Software y JapanStudio distribuido por Sony Computer Entertainment para la plataforma de PlayStation 4',
      img:'assets/img/Bloodborne.jpg',
      lanzamiento:'2015',
      consola:'PS4',

    },
    {
      nombre: 'Bloodborne',
      descripcion:'Tom Clancy\'s Ghost Recon Breakpoint es un videojuego de acción y disparos táctico desarrollado y ' +
        'distribuido por Ubisoft. Es la undécima entrega de la saga Tom Clancy\'s Ghost Recon. Su lanzamiento se produjo' +
        ' el 4 de octubre de 2019',
      img:'assets/img/GhosRecon.jpg',
      lanzamiento:'2019',
      consola:'Xbox',

    },
    {
      nombre: 'Battlefield 2042',
      descripcion:'Battlefield 2042 es un videojuego de disparos y acción bélica en primera persona, desarrollado por DICE ' +
        'y distribuido por Electronic Arts.​ El videojuego será lanzado el 19 de noviembre del 2021 en las plataformas ' +
        'PlayStation 4, PlayStation 5, Xbox One, Xbox Series X y Series S, y Windows.​',
      img:'assets/img/Batlefront.jpg',
      lanzamiento:'2019',
      consola:'Xbox',

    },
    {
      nombre: 'Star Wars Jedi Fallen Order',
      descripcion:'Star Wars Jedi: Fallen Order es un videojuego de acción y aventura para un solo jugador desarrollado por ' +
        'Respawn Entertainment y publicado por Electronic Arts, ambientado en el universo de Star Wars. La trama se sitúa entre' +
        ' el Episodio lll: La Venganza de los Sith y el Episodio lV: Una Nueva Esperanza.',
      img:'assets/img/fallenorder.jpg',
      lanzamiento:'2019',
      consola:'Xbox',

    },
    {
      nombre: 'Rage 2',
      descripcion:'Rage 2 es un videojuego de disparos en primera persona desarrollado por Avalanche Studios junto con id ' +
        'Software y publicado por Bethesda Softworks. Es la continuación del título de 2010, Rage. El juego fue lanzado ' +
        'para Microsoft Windows, PlayStation 4 y Xbox One el 14 de mayo de 2019',
      img:'assets/img/rage2.jpg',
      lanzamiento:'2020',
      consola:'Xbox',

    }
    ,
    {
      nombre: 'Spiderman PS4',
      descripcion:'El juego narra una historia completamente original de El Hombre Araña que no está ligada a películas o ' +
        'cómics anteriores.5​ Cubre ambos aspectos del personaje, tanto de Peter Parker como el hombre araña, además de ' +
        'presentarlo en una faceta más experimentada',
      img:'assets/img/spiderman.jpg',
      lanzamiento:'2020',
      consola:'PS4',

    }
  ];

  constructor() {
    console.log('Servicio listo para usarse.');
  }

  getVideojuegos(): Videojuego[] {
    return this.videojuegos;
  }
  getVideojuego(idx: number){
    return this.videojuegos[idx] ;
  }

  buscarVideojuegos(termino: string): Videojuego[]{
    let videojuegosArr: Videojuego[]=[];
    termino=termino.toLowerCase();
    for(let videojuego of this.videojuegos){
      let nombre = videojuego.nombre.toLowerCase();
      if (nombre.indexOf(termino)>=0){
        videojuegosArr.push(videojuego);
      }

    }
    return videojuegosArr;

  }
}
export interface Videojuego{

  nombre:string;
  descripcion: string;
  img:string;
  lanzamiento: string;
  consola: string;
}
