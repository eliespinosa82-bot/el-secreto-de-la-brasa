// ═══════════════════════════════════════
// MENU DATA — Fuente unica de verdad
// Compartido entre index.html y carta.html
// ═══════════════════════════════════════
const MENU_DATA = {
  entrantes: [
    {
      id: 'nachos', name: 'Nachos Santa Brasa', price: '11,90€',
      desc: 'Nachos crujientes, guacamole casero, carne salteada con pique, pico de gallo, crema agria, cheddar, jalapeños y frijoles.',
      allergens: '1,2',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkL7JtwTpTTrPb_1IyiZEcIzjNcHNKVbLUs4tltiWirhNrdyBbfVb6yadSGnF4aW8n3Xms3AUbJppz4bFQwDkQBtTwVoSCGCr2xtNnRl-wa9TjgTVqthk-0PEZ7mWY1n10xmsckJHTfdK9_JTX3KyCI7JdmSa6PDHqXJeQTKcA5qJTT1hVOmZRPIy5CNsxsYz6lRNet3EyLrclcLCvMZDqzKB4BiKo0N8qIFfVngni3TjApuozn3Ft0Yan06Aw2mp3fvTEni-zj5s',
      ingredients: ['Nachos crujientes', 'Guacamole casero', 'Carne salteada', 'Pico de gallo', 'Crema agria', 'Cheddar', 'Jalapeños', 'Frijoles'],
      featured: true,
      emoji: '🥗'
    },
    {
      id: 'patatas', name: 'Patatas Gajo', price: '4,50€',
      desc: 'Patatas gajo con cualquiera de nuestras salsas. Ingrediente extra por +1,50€.',
      allergens: '',
      img: 'images/entrante-patatas-gajo.png',
      ingredients: ['Patatas gajo', 'Salsa a elegir'],
      emoji: '🍟'
    },
    {
      id: 'ensalada', name: 'Ensalada de Pollo', price: '9,90€',
      desc: 'Ensalada mezclum, pollo asado al carbón, parmesano, salsa yogur, croutons al ajillo y aceitunas negras.',
      allergens: '1,2,3,4,5',
      img: 'images/entrante-ensalada-pollo.png',
      ingredients: ['Mezclum', 'Pollo asado', 'Parmesano', 'Salsa yogur', 'Croutons', 'Aceitunas negras'],
      emoji: '🥗'
    },
    {
      id: 'alitas', name: 'Alitas BBQ Koreanas', price: '5,90€',
      desc: 'Alitas de pollo crujientes asadas con salsa barbacoa coreana, decoradas con cebollino.',
      allergens: '',
      img: 'images/entrante-alitas-bbq.png',
      ingredients: ['Alitas de pollo', 'Salsa BBQ coreana', 'Cebollino'],
      emoji: '🍗'
    }
  ],
  burgers: [
    {
      id: 'la-secreta', name: 'La Secreta', price: '13,90€',
      desc: 'Pan brioche, 180g ternera angus irlandesa madurada, cebolla crispy, mermelada de bacon, cheddar americano, edam, pepinillos y salsa secreta.',
      allergens: '1,2,5,7,8,6,4,9',
      img: 'images/burger-la-secreta.png',
      ingredients: ['Pan brioche', '180g Angus madurada', 'Cebolla crispy', 'Mermelada de bacon', 'Cheddar americano', 'Edam', 'Pepinillos', 'Salsa secreta'],
      featured: true,
      premium: true,
      emoji: '🍔'
    },
    {
      id: 'la-explosiva', name: 'La Explosiva', price: '12,90€',
      desc: 'Pan brioche, 180g ternera angus, pulled pork, salsa queso cheddar de risketos, cebolla crispy y crunchy de risketos.',
      allergens: '2',
      img: 'images/burger-la-explosiva.png',
      ingredients: ['Pan brioche', '180g Angus', 'Pulled pork', 'Salsa cheddar de risketos', 'Cebolla crispy', 'Crunchy de risketos'],
      featured: true,
      emoji: '🍔'
    },
    {
      id: 'la-campera', name: 'La Campera', price: '12,90€',
      desc: 'Pan brioche, 180g ternera angus madurada, salsa jabugitos, panceta ibérica y huevo frito.',
      allergens: '2,4,7,5,6,1',
      img: 'images/burger-la-campera.png',
      ingredients: ['Pan brioche', '180g Angus madurada', 'Salsa jabugitos', 'Panceta ibérica', 'Huevo frito'],
      emoji: '🍔'
    },
    {
      id: 'la-simple', name: 'La Simple con Queso', price: '9,00€',
      desc: 'Pan brioche, 180g ternera angus madurada, cheddar americano e edam.',
      allergens: '2,4,7,5,6,1',
      img: 'images/burger-la-simple.png',
      ingredients: ['Pan brioche', '180g Angus madurada', 'Cheddar americano', 'Edam'],
      emoji: '🍔'
    },
    {
      id: 'la-pistachera', name: 'La Pistachera', price: '15,90€',
      desc: 'Pan brioche, 180g ternera angus madurada, panceta ibérica, huevo frito, mermelada de bacon y salsa especial de pistacho casera.',
      allergens: '1,2,4,5,8',
      img: 'images/burger-la-pistachera.png',
      ingredients: ['Pan brioche', '180g Angus madurada', 'Panceta ibérica', 'Huevo frito', 'Mermelada de bacon', 'Salsa de pistacho casera'],
      featured: true,
      emoji: '🍔'
    }
  ],
  rolls: [
    {
      id: 'el-furioso', name: 'El Furioso', price: '11,90€',
      desc: 'Pan brioche abierto con pulled pork y kimchi, guacamole, nachos, cheddar y jalapeños.',
      allergens: '2,1,5,6,7,11,12',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaiHtixPMkpWPpSNNK5wmQR4TNup_xIxdxtUzCkrdP4xaPHodxl7_y2vcenmjph_gUOpobXVrmcCUlFb17Y2ys34-cPXPqprVpexm-lh06U19d3TMWERr54zP4FkJZsOVg6hErQOZkCNPwuS6FB20FTVjek6dRfvjQIV5t4hqc46J3HzZYHPOUR1NW2veK-NwuJJtRBZZ-NVbG7wked_jtbIruhedpov6hbbjrX-qdXpc4acz6wrmzkSr0k4SkeMd77WeKKAl4C7E',
      ingredients: ['Pan brioche', 'Pulled pork', 'Kimchi', 'Guacamole', 'Nachos', 'Cheddar', 'Jalapeños'],
      featured: true,
      emoji: '🌭'
    },
    {
      id: 'el-simplon', name: 'El Simplón', price: '9,90€',
      desc: 'Pan brioche abierto, filetes de pollo crujiente especiado, mayo de trufa, bacon y cheddar.',
      allergens: '7,2,12,1,4,11,9,5,6',
      img: 'images/roll-el-simplon.png',
      ingredients: ['Pan brioche', 'Pollo crujiente especiado', 'Mayo de trufa', 'Bacon', 'Cheddar'],
      emoji: '🌭'
    }
  ],
  sandwiches: [
    {
      id: 'el-americano', name: 'El Americano', price: '8,90€',
      desc: 'Rebanadas de pan brioche marcadas con mantequilla, pollo trufado, huevo, cheddar americano, alioli de trufa y crujiente lechuga y tomate.',
      allergens: '2,7,4,5,6,1,10,11,12,9',
      img: 'images/sandwich-el-americano.png',
      ingredients: ['Pan brioche', 'Pollo trufado', 'Huevo', 'Cheddar americano', 'Alioli de trufa', 'Lechuga', 'Tomate'],
      emoji: '🥪'
    }
  ],
  bebidas: [
    {
      id: 'coca-cola', name: 'Coca-Cola', price: '2,50€',
      desc: 'Lata 33cl.',
      allergens: '', img: '',
      ingredients: [], noConfigure: true,
      emoji: '🥤'
    },
    {
      id: 'coca-cola-zero', name: 'Coca-Cola Zero', price: '2,50€',
      desc: 'Lata 33cl.',
      allergens: '', img: '',
      ingredients: [], noConfigure: true,
      emoji: '🥤'
    },
    {
      id: 'fanta-naranja', name: 'Fanta Naranja', price: '2,50€',
      desc: 'Lata 33cl.',
      allergens: '', img: '',
      ingredients: [], noConfigure: true,
      emoji: '🥤'
    },
    {
      id: 'fanta-limon', name: 'Fanta Limón', price: '2,50€',
      desc: 'Lata 33cl.',
      allergens: '', img: '',
      ingredients: [], noConfigure: true,
      emoji: '🥤'
    },
    {
      id: 'agua', name: 'Agua Mineral', price: '1,50€',
      desc: 'Botella 50cl.',
      allergens: '', img: '',
      ingredients: [], noConfigure: true,
      emoji: '💧'
    },
    {
      id: 'cerveza', name: 'Cerveza', price: '2,80€',
      desc: 'Caña de cerveza fría.',
      allergens: '8', img: '',
      ingredients: [], noConfigure: true,
      emoji: '🍺'
    },
    {
      id: 'cerveza-sin', name: 'Cerveza Sin', price: '2,80€',
      desc: 'Caña sin alcohol.',
      allergens: '8', img: '',
      ingredients: [], noConfigure: true,
      emoji: '🍺'
    },
    {
      id: 'limonada', name: 'Limonada Casera', price: '3,50€',
      desc: 'Limonada natural con hierbabuena.',
      allergens: '', img: '',
      ingredients: [], noConfigure: true,
      emoji: '🍋'
    }
  ],
  sauces: [
    { id: 'salsa-secreta', name: 'Salsa Secreta', price: '1,00€' },
    { id: 'bbq-japonesa', name: 'BBQ Japonesa', price: '1,00€' },
    { id: 'ali-oli-lima', name: 'Ali Oli de Lima', price: '1,00€' },
    { id: 'mayotrufa', name: 'Mayotrufa', price: '1,00€' },
    { id: 'cheddar-risketos', name: 'Cheddar de Risketos', price: '1,00€', wide: true }
  ]
};
