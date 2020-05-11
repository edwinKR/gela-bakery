import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import PreviewItemCollection from './PreviewItemCollection';
import Spinner from '../../components/with_spinner_HOC/Spinner';

const GET_CATEGORY_BY_NAME = gql`
  query getCategoriesByName($name: String!) {
    getCategoriesByName(name: $name) {
      id
      category
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const PreviewItemCollection_Container = (props) => {
  console.log(props);

  const { match } = props;
  return (
    <Query query={GET_CATEGORY_BY_NAME} variables={{ name: match.params.collectionRouteName }}>
      {(queryProps) => {
        const { loading, data } = queryProps;
        if (loading) return <Spinner />;
        const { getCategoriesByName } = data;
        return <PreviewItemCollection singleCategory={getCategoriesByName} />;
      }}
    </Query>
  );
};

export default PreviewItemCollection_Container;
