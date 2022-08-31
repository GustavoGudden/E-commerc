import styled from "styled-components";

export const Divprincipal = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 50% 50%;
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  > img {
    width: 100%;
  }
`;

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 300;
  font-size: 20px;
  padding: 1rem;

  > p {
    margin: 0;
    color: #76778a;
  }
  > h2 {
    margin: 0;
    color: #686eff;
  }

  > div {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: flex-end;
    > p {
      margin: 0;
      margin-bottom: 3rem;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    > h1 {
      margin: 0;
    }
  }
`;

export const Fundo = styled.h1`
  font-size: 400%;
  position: absolute;

  opacity: 0.1;
`;
