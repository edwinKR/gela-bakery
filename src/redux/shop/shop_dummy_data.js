// async function generateDataCollection() {
//   const promises = [];
//   for (let i = 0; i < 10; i++) {
//     promises.push(fetch('https://dog.ceo/api/breeds/image/random'));
//   }

//   const collectedPromises = await Promise.all(promises);
//   const collectedResponses = await Promise.all(collectedPromises.map(res => res.json()));

//   return collectedResponses.map((data, uid) => {
//     const newData = {};
//     newData.id = uid;
//     newData.name = `Doggie ${newData.id}`;
//     newData.imageUrl = data.message;
//     newData.price = Math.floor(Math.random() * 10) + 1;
//     return newData;
//   });
// }

// export default generateDataCollection;

const SHOPPING_DUMMY_DATA = [
  {
    id: 1,
    category: 'Bread',
    routeName: 'bread',
    items: [
      {
        id: 1,
        name: 'Bagel',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7J4btcJGQZezCY9mDEPYSL5uKIoLKXfcX5vAvHbsbKN44qcZA',
        price: 3,
      },
      {
        id: 2,
        name: 'Sourdough',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7J4btcJGQZezCY9mDEPYSL5uKIoLKXfcX5vAvHbsbKN44qcZA',
        price: 5,
      },
      {
        id: 3,
        name: 'Rye Bread',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7J4btcJGQZezCY9mDEPYSL5uKIoLKXfcX5vAvHbsbKN44qcZA',
        price: 5,
      },
      {
        id: 4,
        name: 'Brioche',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7J4btcJGQZezCY9mDEPYSL5uKIoLKXfcX5vAvHbsbKN44qcZA',
        price: 8,
      },
      {
        id: 5,
        name: 'Ciabatta',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7J4btcJGQZezCY9mDEPYSL5uKIoLKXfcX5vAvHbsbKN44qcZA',
        price: 6,
      },
      {
        id: 6,
        name: 'Brown Bread',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7J4btcJGQZezCY9mDEPYSL5uKIoLKXfcX5vAvHbsbKN44qcZA',
        price: 5,
      },
      {
        id: 7,
        name: 'Croissant',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7J4btcJGQZezCY9mDEPYSL5uKIoLKXfcX5vAvHbsbKN44qcZA',
        price: 6,
      },
      {
        id: 8,
        name: 'Cornbread',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7J4btcJGQZezCY9mDEPYSL5uKIoLKXfcX5vAvHbsbKN44qcZA',
        price: 7,
      },
      {
        id: 9,
        name: 'Anpan',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7J4btcJGQZezCY9mDEPYSL5uKIoLKXfcX5vAvHbsbKN44qcZA',
        price: 6,
      },
    ],
  },
  {
    id: 2,
    category: 'Macaroon',
    routeName: 'macaroon',
    items: [
      {
        id: 10,
        name: 'Regular',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Macaroons_in_Korea.jpg',
        price: 220,
      },
      {
        id: 11,
        name: 'Fatcaroon',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Macaroons_in_Korea.jpg',
        price: 280,
      },
      {
        id: 12,
        name: 'Pearlcaroon',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Macaroons_in_Korea.jpg',
        price: 110,
      },
      {
        id: 13,
        name: 'Dacquoise',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Macaroons_in_Korea.jpg',
        price: 160,
      },
    ],
  },
  {
    id: 3,
    category: 'Cookies',
    routeName: 'cookies',
    items: [
      {
        id: 14,
        name: 'Chocolate Chip Cookie',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/b/b9/Chocolate_Chip_Cookies_-_kimberlykv.jpg',
        price: 125,
      },
      {
        id: 15,
        name: 'Butter Cookie',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/b/b9/Chocolate_Chip_Cookies_-_kimberlykv.jpg',
        price: 90,
      },
      {
        id: 16,
        name: 'Chocolate Cookie',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/b/b9/Chocolate_Chip_Cookies_-_kimberlykv.jpg',
        price: 90,
      },
      {
        id: 17,
        name: 'Oatmeal ',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/b/b9/Chocolate_Chip_Cookies_-_kimberlykv.jpg',
        price: 165,
      },
      {
        id: 18,
        name: 'Oreo',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/b/b9/Chocolate_Chip_Cookies_-_kimberlykv.jpg',
        price: 185,
      },
    ],
  },
  {
    id: 4,
    category: 'Cake',
    routeName: 'cake',
    items: [
      {
        id: 19,
        name: 'Cheesecake',
        imageUrl:
          'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?cs=srgb&dl=blueberries-cake-chocolate-chocolate-cake-291528.jpg&fm=jpg',
        price: 25,
      },
      {
        id: 20,
        name: 'Strawberry',
        imageUrl:
          'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?cs=srgb&dl=blueberries-cake-chocolate-chocolate-cake-291528.jpg&fm=jpg',
        price: 20,
      },
      {
        id: 21,
        name: 'Flower Cake',
        imageUrl:
          'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?cs=srgb&dl=blueberries-cake-chocolate-chocolate-cake-291528.jpg&fm=jpg',
        price: 80,
      },
      {
        id: 22,
        name: 'Chocolate Moose',
        imageUrl:
          'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?cs=srgb&dl=blueberries-cake-chocolate-chocolate-cake-291528.jpg&fm=jpg',
        price: 80,
      },
      {
        id: 23,
        name: 'Coconut Cake',
        imageUrl:
          'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?cs=srgb&dl=blueberries-cake-chocolate-chocolate-cake-291528.jpg&fm=jpg',
        price: 45,
      },
      {
        id: 24,
        name: 'Lemon Cream',
        imageUrl:
          'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?cs=srgb&dl=blueberries-cake-chocolate-chocolate-cake-291528.jpg&fm=jpg',
        price: 135,
      },
      {
        id: 25,
        name: 'White Chocolate',
        imageUrl:
          'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?cs=srgb&dl=blueberries-cake-chocolate-chocolate-cake-291528.jpg&fm=jpg',
        price: 20,
      },
    ],
  },
  {
    id: 5,
    category: 'Korean',
    routeName: 'korean',
    items: [
      {
        id: 26,
        name: 'Injeolmi',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSB4JGAzWpX8QlqtwENL5g9FZpldz2YAQxZ2eUYb9tjMnVxKOPh',
        price: 325,
      },
      {
        id: 27,
        name: 'Rainbow Rice Cake',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSB4JGAzWpX8QlqtwENL5g9FZpldz2YAQxZ2eUYb9tjMnVxKOPh',
        price: 20,
      },
      {
        id: 28,
        name: 'Ho Dduk',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSB4JGAzWpX8QlqtwENL5g9FZpldz2YAQxZ2eUYb9tjMnVxKOPh',
        price: 25,
      },
      {
        id: 29,
        name: 'Ssook Dduk',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSB4JGAzWpX8QlqtwENL5g9FZpldz2YAQxZ2eUYb9tjMnVxKOPh',
        price: 25,
      },
      {
        id: 30,
        name: 'Song Pyeon',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSB4JGAzWpX8QlqtwENL5g9FZpldz2YAQxZ2eUYb9tjMnVxKOPh',
        price: 40,
      },
      {
        id: 31,
        name: 'Hook Im Ja',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSB4JGAzWpX8QlqtwENL5g9FZpldz2YAQxZ2eUYb9tjMnVxKOPh',
        price: 25,
      },
    ],
  },
];

export default SHOPPING_DUMMY_DATA;
