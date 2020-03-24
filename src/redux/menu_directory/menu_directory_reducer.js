const INITIAL_STATE = {
  category: [
    {
      name: 'Bread',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEmOgBC14t3Tu2BQzvr_s7_hYze0IFQxPhriZvnq-eAga5I2D6',
      linkUrl: 'bread',
    },
    {
      name: 'Cookies',
      imageUrl: 'https://p0.pxfuel.com/preview/392/798/478/coffee-chocolate-grains-cinnamon.jpg',
      linkUrl: 'cookies',
    },
    {
      name: 'Macaroon',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/05/02/07/16/macaroons-2277481_960_720.jpg',
      linkUrl: 'macaroon',
    },
    {
      name: 'Cake',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTV8oXLZoi401nsbtS2y3Lg-_W46N1hjGSptWnRdIsWMLhFumZ0',
      size: 'large',
      linkUrl: 'cake',
    },
    {
      name: 'Korean(Original)',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQM_3jAsm3r3QSM-HdXiLAKYUSdIkpG2N-OAp35NIkWzegW2T0f',
      size: 'large',
      linkUrl: 'korean',
    },
  ],
};

const menuDirReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default menuDirReducer;
