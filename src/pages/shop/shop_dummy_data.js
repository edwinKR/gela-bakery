async function generateDataCollection() {
  const promises = [];
  for (let i = 0; i < 10; i++) {
    promises.push(fetch('https://dog.ceo/api/breeds/image/random'));
  }

  const collectedPromises = await Promise.all(promises);
  const collectedResponses = await Promise.all(collectedPromises.map(res => res.json()));

  return collectedResponses.map((data, uid) => {
    const newData = {};
    newData.id = uid;
    newData.name = `Doggie ${newData.id}`;
    newData.imageUrl = data.message;
    newData.price = Math.floor(Math.random() * 10) + 1;
    return newData;
  });
}

export default generateDataCollection;
