import React from 'react';
import MenuItem from '../menu_item/MenuItem';

import './menu_container.style.scss';

export default class MenuContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      category: [
        {
          name: 'Bread',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEmOgBC14t3Tu2BQzvr_s7_hYze0IFQxPhriZvnq-eAga5I2D6',
        },
        {
          name: 'Cookies',
          imageUrl:
            'https://p0.pxfuel.com/preview/392/798/478/coffee-chocolate-grains-cinnamon.jpg',
        },
        {
          name: 'Macaroon',
          imageUrl: 'https://cdn.pixabay.com/photo/2017/05/02/07/16/macaroons-2277481_960_720.jpg',
        },
        {
          name: 'Cake',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTV8oXLZoi401nsbtS2y3Lg-_W46N1hjGSptWnRdIsWMLhFumZ0',
        },
        {
          name: 'Korean(Original)',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQM_3jAsm3r3QSM-HdXiLAKYUSdIkpG2N-OAp35NIkWzegW2T0f',
        },
      ],
    };
  }

  render() {
    const { category } = this.state;

    return (
      <div className="menu-container">
        {category.map(({ name, imageUrl }) => (
          <MenuItem key={name} name={name} imageUrl={imageUrl} />
        ))}
      </div>
    );
  }
}
