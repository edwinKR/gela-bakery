import React from 'react';
import generateDataCollection from './shop_dummy_data.js';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shopData: [],
    };
  }

  async componentDidMount() {
    const generatedData = await generateDataCollection();
    console.log(generatedData);
    this.setState({
      shopData: generatedData,
    });
  }

  render() {
    const { shopData } = this.state;
    console.log(shopData);
    return (
      <ul>
        {shopData.map(el => {
          return (
            <li key={el.id}>
              {el.name}
              <img src={el.imageUrl} alt={el.name} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ShopPage;

// {shopData.length > 0 ? (
//   shopData.map(el => {
//     console.log(el);
//     return (
//       <li key={el.id}>
//         {el.name}
//         <img src={el.imageUrl} alt={el.name} />
//       </li>
//     );
//   })
// ) : (
//   <p>No Data</p>
// )}
