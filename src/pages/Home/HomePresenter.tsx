import React from "react";
import styled from "styled-components";
import Button from "../../components/Buttons";

const Container = styled.div``;

interface IProps {}
const HomePresenter = ({}: IProps) => {
  return (
    <div>
      <Button text="hello" />
    </div>
  );
};

export default HomePresenter;
