import React from "react";
import { MainContent } from "../../../components/common/CommonStyles";
import Filter from "../../../components/filter/Filter";
import { data } from "../../../mockData/data";
import MusicsList from "../../musicsList/MusicsList";
import PageTitle from "../../../components/PageTitle";
import { madeForYou } from "../../../mockData/madeForYou";
import Playlist from "../../playlist/Playlist";


const HomePage = () => {
  return (
    <MainContent>
      <PageTitle>Boa tarde, Gustavo!</PageTitle>
      <Filter page="" />
      <MusicsList data={data} />
      <PageTitle>Feitos para você</PageTitle>
      <Playlist madeForYou={madeForYou}/>
    </MainContent>
  );
};

export default HomePage;
