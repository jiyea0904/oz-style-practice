import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: black;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    list-style: none;

    li {
      font-size: 16px;
      font-weight: 400;
      color: white;
    }
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <h1>OZ코딩스쿨</h1>
      <ul>
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </ul>
    </HeaderContainer>
  );
}
