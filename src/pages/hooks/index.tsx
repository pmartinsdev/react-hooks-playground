import React from "react";
import Description from "../../components/atoms/Description";
import Title from "../../components/atoms/Title";

import PageHeader from "../../components/molecules/PageHeader";
import HookButtons from "../../components/organisms/HookButtons";

import hookList from "../../mocks/hookList.json";

import { Container, Content } from "./styles";

const Hooks: React.FC = () => {
  return (
    <Container>
      <PageHeader title="" navigateTo="/" />

      <Content>
        <Title value="What's is the main objective ?" />
        <Description value="Provide all knowledge about react hooks into a counter application." />
      </Content>

      <HookButtons data={hookList} />
    </Container>
  );
};

export default Hooks;
