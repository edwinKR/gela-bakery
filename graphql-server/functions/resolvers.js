const admin = require('firebase-admin');
const serviceAccount = require('./service-account.json');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://jela-bakery-db.firebaseio.com',
});

const db = admin.firestore();

// GraphQL resolver: Structure resolvers into a map where the keys correspond to tye types and fields in the schema.
// Provide instructions for turning GraphQL operation(a query, mutation, or subscription) into data. They either return the same type of data we specify in our schema or a promise for that data.
// Resolver functions accept four arguments: (parent, args, context, info) =>  data
// parent: Object that contains the result returned from the resolver on the parent type
// args: Object that contains the arguments passed to the field
// context: Object shared by all resolvers in a GraphQL operation.
// info: Info about the execution state of the operation which should only be used in advanced cases.

const resolvers = {
  Query: {
    categories: async () => {
      try {
        const categories = [];

        await db
          .collection('categories')
          .get()
          .then((snapshot) => {
            snapshot.forEach((doc) => {
              const categorySnapshot = {
                id: doc.id,
                ...doc.data(),
              };

              categories.push(categorySnapshot);
            });
          });
        console.log('CATEGORIES>>>>> ', categories);
        return categories;
      } catch (error) {
        console.log('Query Error: categories>> ', error);
      }
    },
    category: async (parent, args, context, info) => {
      try {
        const { id } = args;
        const categoryRef = await db.collection('categories').doc(id);
        const getCategoryDoc = await categoryRef.get();
        const singleCategory = getCategoryDoc.data();
        const result = {
          id,
          ...singleCategory,
        };
        return result;
      } catch (error) {
        console.log('Query Error: category>> ', error);
      }
    },
    getCategoriesByName: async (parent, args, context, info) => {
      try {
        const { name } = args;
        const categoriesRef = await db.collection('categories');
        const result = [];
        await categoriesRef
          .where('category', '==', name)
          .get()
          .then((snapshot) => {
            snapshot.forEach((doc) => {
              const singleData = doc.data();
              if (singleData.category === name) {
                const singleCategory = {
                  id: doc.id,
                  ...singleData,
                };
                result.push(singleCategory);
              }
            });
          });
        return result[0];
      } catch (error) {
        console.log('Query Error: getCategoriesByName>> ', error);
      }
    },
  },
  Item: {
    category: (parent, args, context, info) => {
      const { id, category } = parent;
      return { id, category };
    },
  },
  Category: {
    items: (parent, args, context, info) => {
      const { items } = parent;
      return items;
    },
  },
};

module.exports = resolvers;
