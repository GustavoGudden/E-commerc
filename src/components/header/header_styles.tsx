import styled from "styled-components";

export const Headercomp = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
`;

export const Div = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  color: white;

  &.userIcon {
    border: 1px solid #686eff;
    border-radius: 50px;
    height: 2px;
    margin-right: 4rem;
  }
`;
