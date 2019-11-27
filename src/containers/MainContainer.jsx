import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Main from "components/Main";

const MainContainer = () => {
  const { loading, error, data } = useQuery(gql`
    {
      hn {
        topStories(limit: 10) {
          id
          title
        }
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <Main stories={data.hn.topStories} />;
};

export default MainContainer;
