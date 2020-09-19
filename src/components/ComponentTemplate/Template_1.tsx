import React from "react";
import styled from "styled-components";

const Container = styled.div``;

interface IProps {
  text: string;
}
const Template = ({ text }: IProps) => {
  return <Container>{text}</Container>;
};

export default Template;
