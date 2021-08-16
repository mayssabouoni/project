const products = [
  {
    name: 'Montrose Green Plush',
    image: '/images/couchh1.jpg',
    description:
    'Like everything else in the room the couch told a story, a testimony to the personality of its owner. It was a piece made more for style than comfort, a moderately priced copy of some truly talented designer. Underneath the blotches from casually dropped food it had been cream. She had aspired to a clean look, minimalis',
    category: 'sofa',
    price: 320,
    countInStock: 4,
  },
  {
    name: 'velvet sofa in light blue',
    image: '/images/couch2.jpg',
    description:    'Like everything else in the room the couch told a story, a testimony to the personality of its owner. It was a piece made more for style than comfort, a moderately priced copy of some truly talented designer. Underneath the blotches from casually dropped food it had been cream. She had aspired to a clean look, minimalis',

    category: 'sofa',
    price: 890,
    countInStock: 2,
  },
  {
    name: 'Sofa',
    image: '/images/couchh3.jpg',
    description:
    'Like everything else in the room the couch told a story, a testimony to the personality of its owner. It was a piece made more for style than comfort, a moderately priced copy of some truly talented designer. Underneath the blotches from casually dropped food it had been cream. She had aspired to a clean look, minimalis',

    category: 'sofa',
    price: 1350,
    countInStock: 0,
  },
  {
    name: 'A vintage couch',
    image: '/images/couch4.jpg',
    description:    'Like everything else in the room the couch told a story, a testimony to the personality of its owner. It was a piece made more for style than comfort, a moderately priced copy of some truly talented designer. Underneath the blotches from casually dropped food it had been cream. She had aspired to a clean look, minimalis',

    category: 'sofa',
    price: 1000.99,
    countInStock: 7,
  },
  {
    name: 'Acrylic Glass Wall Art "Indigold VII Light Blue" by Lisa Audit',
    image: '/images/framee1.jpg',
    description:' "Indigold VII Light Blue" by Lisa Audit.Lisa Audit is a Canadian artist, both born and raised in Marbleton, Quebec. She s been making art ever since she was a child. Her delicate and flowy style are so versatile and decorative, that her designs can be seen on stationary, fabric, wallpaper, and other household items. Her medium of choice are oil painting, watercolor, acrylics, and pen & ink.Acrylic wall art looks amazing in your home or business.',
    category: 'Frame',
    price: 92.99,
    countInStock: 0,
  },
  {
    name: 'Flowers Poster Floral Line Art Set Of 3 Prints Earth Tone Wall Art Minimal Print Beige Art Flower',
    image: '/images/frame3.jpg',
    description:
      '  Flowers Poster Floral Line Art Set Of 3 Prints Earth Tone Wall Art Minimal Print Beige Art Flower Line Drawing Organic Art Pastel Art',
    category: 'Frame',
    price: 195.99,
    countInStock: 6,
  },
  {
    name: 'Abstract Painting print',
    image: '/images/paint11.jpg',
    description:
      'Colombia Abstract artwork Print. Print Dimensions (with border): 16 x 20 Border: 1/2 white All prints are packaged in a clear plastic sleeve with cardboard backing. ',
    category: 'frame',
    price: 95.99,
    countInStock: 2,
  },
  {
    name: 'Modern Abstract Gold foil lines Green Canvas Art Paintings For Living ...',
    image: '/images/modern.jpg',
    description:
      'Dear, this is Gorgeous Art.. Decor Modern Abstract Gold foil lines Green Canvas Art Paintings For Living Room Bedroom Posters Decor Modern Abstract Gold foil lines Green Canvas Art Paintings For Living Room Bedroom Posters',
    category: 'frame',
    price: 89.99,
    countInStock: 5,
  },
  {
    name: 'Small White Stoneware Planter On Wooden Stand',
    image: '/images/small.jpg',
    description:
      'A beautiful white textured stoneware planter on a wooden stand. Perfect for indoor plants or decorative purposes. Size of plant pot without stand W15 D15 H15cm. The Plant pot is stoneware and the stand is made of beech wood. The wooden stand can be placed 2 ways making the overall height either 20cm or 25cm. Measurements: 15 x 25 x 15cm',
    category: 'plant',
    price: 66.99,
    countInStock: 10,
  },
  
  {
    name: 'Three Standing Brass Planters',
    image: '/images/standing.jpg',
    description:
      ' Crafted from aluminium with a light brass toned finish our bowled bodied planters sit on a striking frame to make a real impact in your home. Our set of three can be placed together for a botanical feature or spread about the home',
    category: 'plant',
    price: 275.99,
    countInStock: 3,
  },
   
  {
    name: 'indoor plant',
    image: '/images/indoorp.jpg',
    description:
      'These sturdy beauties can handle neglect',
    price: 180.99,
    category: 'plant',
    countInStock: 5,
  },
  {
    name: 'Fiddle Leaf Fig',
    image: '/images/fiddle.jpg',
    description:
      'Fiddle Leaf Fig Bush + Large Mid Century Modern Bell Planter and Walnut Stand',
    price: 75.99,
    category: 'plant',
    countInStock: 8,
  },
  {
    name: 'Entryway',
    image: '/images/meuble.jpg',
    description:
      'Beautiful Entryway Ideas on a budget! Whether it’s a grand house or a tiny nook by the door, your home’s entry is the first thing visitors see when they step inside your house and the sight that welcomes you home every day',
    price: 980.99,
    category: 'entryway',
    countInStock: 5,
  },

  {
    name: 'Modern entryway',
    image: '/images/meuble1.jpg',
    description:
      'modern luxury and simple entryway',
    price: 890.99,
    category: 'entryway',
    countInStock: 3,
  },
  {
    name: 'Mid-Century Mini Console',
    image: '/images/console1.jpg',
    description:
      'Why Youll Love It An easy piece that works with any look',
    price:  520 ,
    category: 'entryway',
    countInStock: 6,
  },
  {
    name: 'gold console',
    image: '/images/gold.jpg',
    description:
      'Easily create a refined and modern glam atmosphere in the entrance',
    price:  600.99  ,
    category: 'entryway',
    countInStock: 3,
  },
  {
    name: 'Floor standing bookcase',
    image: '/images/bookcase.jpg',
    description:
      'The tree bookshelf can be well integrated into the style of home and office. It is not only a place to store books, but also an ornament that can make your house unique',
    price:  235.99   ,
    category: 'bookcase',
    countInStock: 2,
  },
  {
    name: 'Bookcase for small space',
    image: '/images/bookcase1.jpg',
    description:
      'Tall and narrow bookcases are excellent solutions for small spaces as they offer a large amount of storage and a small footprint. Another great option is multi-purpose pieces that offer more than just',
    price:   295.99   ,
    category: 'bookcase',
    countInStock: 2,
  },
  {
    name: 'Minimalist shelf',
    image: '/images/shelf.jpg',
    description:
      'When decorating the room, it is necessary to find the right balance, which is the most important characteristic of the good taste and style. It is the minimalist design and simplicity of the shelves that allows you to, with all other furniture and details, make the room to look modern, nice and refreshed. Transform the wall in the room into a masterpiece! Wall shelves are the best solution for storing things in the room. They help to highlight all that is needed. Featuring modern design, not only have a practical purpose, but also decorative, because they look really great! Below we present you a beautiful minimalist shelf in modern style. If required, we are able to create unique products based on our clients preferences. Take a look, and you might find some wonderful design which will be suitable for your room!',
    price:   150.99   ,
    category: 'bookcase',
    countInStock: 4,
  },
  {
    name: 'Awesome bookcase',
    image: '/images/bookcase2.jpg',
    description:
      ' Shelves are not simply household items, they are the hearts of really comfortable home designs',
    price:   345.99   ,
    category: 'bookcase',
    countInStock: 2,
  },
  {
    name: 'Miror',
    image: '/images/miror.jpg',
    description:
      ' Give your space a luxe refresh with our Ornate Filigree Wall Mirrors. Elegant details grace the top of the brass frame for a stylish vintage look',
    price:    496.99  ,
    category: 'miror',
    countInStock: 2,
  },
  {
    name: 'Silver miror',
    image: '/images/miror2.jpg',
    description:
      'modern simple miror for fresh look  ',
    price:     698.99  ,
    category: 'miror',
    countInStock: 1,
  },

  {
    name: 'Wall miror',
    image: '/images/miror3.jpg',
    description:
      'dazzling round wall miror to decorate your wall  ',
    price:     135  ,
    category: 'miror',
    countInStock: 3,
  },

  {
    name: 'Rectangular miror',
    image: '/images/miror4.jpg',
    description:
      ' Sunburst Funky Rectangular Mirror 120x80cm. Funky rectangular mirror featuring multiple mirrored pieces creating a sunburst effect  ',
    price:  274.99  ,
    category: 'miror',
    countInStock: 3,
  },
  {
    name: 'Coffee table with crossed legs',
    image: '/images/basse.jpg',
    description:
      '  Is something missing from your living room set? This modern mid-century style coffee table is designed with an X-shaped metal frame in a chrome or gold tone finish for a touch of resplendent appeal ',
    price:  278.99 ,
    category: 'table',
    countInStock: 3,
  },
  {
    name: 'Round coffee table',
    image: '/images/basse2.jpg',
    description:
      '  The coffee table is a living room staple. It’s a great space to display all of your pretty finds and it ',
    price:  292.99 ,
    category: 'table',
    countInStock: 2,
  },
  {
    name: 'Table lamp',
    image: '/images/lamp.jpg',
    description:
      '  This elegant, floral-inspired lamp offers an antique-inspired glamour to any room in your home ',
    price:  115.99  ,
    category: 'lamp',
    countInStock: 4,
  },
  {
    name: 'Table lamp',
    image: '/images/lamp.jpg',
    description:
      ' An elegant, sculptural base crafted with a gold foil finish offers antique-inspired glamour to a side table, console, or nightstand. ',
    price:  87.99   ,
    category: 'lamp',
    countInStock: 2,
  },
  {
    name: 'Round coffee table',
    image: '/images/basse2.jpg',
    description:
      '  The coffee table is a living room staple. It’s a great space to display all of your pretty finds and it ',
    price:  292.99 ,
    category: 'table',
    countInStock: 2,
  },









];
export default products;
