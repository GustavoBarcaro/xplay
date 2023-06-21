import React from "react";
import PageTitle from "../../../components/PageTitle";
import { data } from "../../../mockData/data";
import Filter from "../../../components/filter/Filter";
import { MainContent } from "../../../components/common/CommonStyles";
import MusicsList from "../../musicsList/MusicsList";

const LibraryPage = () => {
  return (
    <MainContent>
      <PageTitle>Sua Biblioteca</PageTitle>
      <Filter page="/library"/>
      <MusicsList data={data}/>
    </MainContent>
  );
};

export default LibraryPage;
