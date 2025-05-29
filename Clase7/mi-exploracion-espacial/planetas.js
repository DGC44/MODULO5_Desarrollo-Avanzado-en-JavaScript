const planetas = {
  interiores: [
    {
      nombre: "Mercurio",
      descripcion: "El planeta más cercano al Sol, con una superficie rocosa y muchas cráteres. Recibe su nombre apropiadamente en honor al más rápido de los antiguos dioses romanos.",
      descubiertoEn: "Antigüedad",
      coordenadas: "0.39 UA del Sol",
      imagen: "https://billiken.lat/wp-content/uploads/2023/06/mercurio1.jpg"
    },
    {
      nombre: "Venus",
      descripcion: "Planeta con una atmósfera densa y tóxica, conocido por su efecto invernadero extremo. Es el tercer objeto más brillante del cielo después del Sol y la Luna. Venus gira lentamente en dirección opuesta a la de la mayoría de los planetas.",
      descubiertoEn: "En la Antigüedad, en 1610 por Galileo Galilei.",
      coordenadas: "0.72 UA del Sol",
      imagen: "https://content.nationalgeographic.com.es/medio/2022/07/31/el-planeta-venus_de3a3995_1280x1280.jpg"
    },
    {
      nombre: "Tierra",
      descripcion: "Nuestro hogar, con agua líquida y atmósfera que sustenta la vida. Todos los planetas, excepto la Tierra, recibieron nombres de dioses y diosas griegos y romanos. Sin embargo, el nombre Tierra es una palabra germánica que simplemente significa 'el suelo'.",
      descubiertoEn: "Hace aproximadamente 4.600 millones de años.",
      coordenadas: "1 UA del Sol",
      imagen: "https://guaix.fis.ucm.es/~ncl/lucia_crespo/tierra.jpg"
    },
    {
      nombre: "Marte",
      descripcion: "El planeta rojo, con un paisaje árido y evidencia de agua congelada. Es el único planeta al que hemos enviado rovers para explorar este paisaje alienígena. Hoy en día, con frecuencia se lo llama el 'Planeta Rojo' porque los minerales de hierro en el polvo marciano se oxidan, o se oxidan, haciendo que la superficie se vea roja. ",
      descubiertoEn: "Primer registro de Galileo Galilei en 1610.",
      coordenadas: "1.52 UA del Sol",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1200px-OSIRIS_Mars_true_color.jpg"
    }
  ],

  exteriores: [
    {
      nombre: "Júpiter",
      descripcion: "El gigante gaseoso más grande del sistema solar. La icónica Gran Mancha Roja de Júpiter es una tormenta gigantesca, más grande que la Tierra, que ha azotado el planeta durante cientos de años. En realidad son nubes frías y ventosas de amoníaco y agua, que flotan en una atmósfera de hidrógeno y helio. ",
      descubiertoEn: "Primer registro de Galileo Galilei en 1610.",
      coordenadas: "5.20 UA del Sol",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Jupiter_in_true_color.jpg"
    },
    {
      nombre: "Saturno",
      descripcion: "Conocido por sus impresionantes anillos hechos de hielo y roca. También tiene docenas de lunas.",
      descubiertoEn: "Observado por primera vez por Galileo Galilei en 1610.",
      coordenadas: "9.58 UA del Sol",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg"
    },
    {
      nombre: "Urano",
      descripcion: "Un gigante de hielo con un color azul verdoso debido al metano en su atmósfera. Urano gira casi 90 grados con respecto al plano de su órbita. Esta singular inclinación hace que Urano parezca girar lateralmente, orbitando el Sol como una bola rodante.",
      descubiertoEn: "1781 por William Herschel, en el Reino Unido.",
      coordenadas: "19.22 UA del Sol",
      imagen: "https://spaceplace.nasa.gov/all-about-uranus/sp/uranus2.sp.jpg"
    },
    {
      nombre: "Neptuno",
      descripcion: "El gigante de hielo más lejano, con vientos extremadamente rápidos.Neptuno es el único planeta de nuestro sistema solar invisible a simple vistapues se encuentra más de 30 veces más lejos del Sol que la Tierra.",
      descubiertoEn: "23-24 de Septimebre de 1846",
      coordenadas: "30.05 UA del Sol",
      imagen: "https://spaceplace.nasa.gov/all-about-neptune/sp/neptune1.sp.jpg"
    }
  ],

  enanos: [
    {
      nombre: "Plutón",
      descripcion: "Un planeta enano famoso que fue reclasificado en 2006. Fue considerado durante mucho tiempo el noveno planeta de nuestro sistema solar. Tras el descubrimiento de mundos similares en zonas más profundas del Cinturón de Kuiper, la Unión Astronómica Internacional lo reclasificó.",
      descubiertoEn: "18 de febrero de 1930 por el astrónomo estadounidense Clyde William Tombaugh.",
      coordenadas: "39.48 UA del Sol",
      imagen: "https://spaceplace.nasa.gov/all-about-pluto/sp/pluto_new_horizons.sp.png"
    },
    {
      nombre: "Ceres",
      descripcion: "El único planeta enano en el cinturón principal de asteroides entre Marte y Júpiter. Aunque Ceres comprende el 25% de la masa total del cinturón de asteroides, Plutón sigue siendo 14 veces más masivo.",
      descubiertoEn: "Giuseppe Piazzi lo detectó en 1801.",
      coordenadas: "2.77 UA del Sol",
      imagen: "https://static.nationalgeographic.es/files/styles/image_3200/public/ceres_occatorcrater.jpg?w=1900&h=1198"
    },
    {
      nombre: "Makemake",
      descripcion: "Planeta enano del cinturón de Kuiper, conocido por su superficie helada. Este planeta enano tarda unos 305 años terrestres en dar una vuelta al Sol.",
      descubiertoEn: "Observado por primera vez en marzo de 2005 por ME Brown, CA Trujillo y DL Rabinowitz en el Observatorio Palomar, California.",
      coordenadas: "45.79 UA del Sol",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT49vr20yqLCDLFhKgjUv44JunsbzNbKzS96A&s"
    },
    {
      nombre: "Haumea",
      descripcion: "Planeta enano con forma elíptica y un rápido periodo de rotación. Su rápida rotación distorsiona su forma, haciendo que parezca un balón de fútbol. Haumea recibe su nombre de la diosa hawaiana de la fertilidad.",
      descubiertoEn: "España el 7 de marzo de 2003 en el Observatorio de Sierra Nevada.",
      coordenadas: "43.13 UA del Sol",
      imagen: "https://www.mdscc.nasa.gov/wp-content/uploads/2022/10/Haumea.jpg"
    },
    {
      nombre: "Eris",
      descripcion: "Planeta enano más masivo del cinturón de Kuiper, descubrió controversias en la definición de planeta. Su superficie es extremadamente fría y tarda 557 años terrestres en dar una vuelta alrededor del Sol.",
      descubiertoEn: "5 de enero de 2005",
      coordenadas: "67.78 UA del Sol",
      imagen: "https://www.65ymas.com/uploads/s1/91/38/52/eris-frustrado-decimo-planeta-sistema-solar-cumple-17-anos.jpeg"
    }
  ]
};

module.exports = planetas;
