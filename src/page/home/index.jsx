import { Link } from "react-router-dom";
import styled from "styled-components";
import ButtonHello from "../../components/button/hello";

function Homepage() {
  return (
    <>
      <HomeSection>
        {/* Background */}
        <div className="filter" />
        <h1>
          გსურთ მზიერ საქართველოში დასვენება და დღესასწაული ყოველ დღე? <br />
          <br /> მაშინ ეს იდეალური მოგზაურობა თქვენთვისაა
        </h1>
        <h4>ტური 7 დღე და 6 ღამე</h4>
        <p>
          დასვენებითა და საცხვორებლით: <span>ქუთაისი, ბათუმი, თბილისი</span>
        </p>
        {/* <Link></Link> */}
        <ButtonHello text={"მეტი დეტალისთვის"} url={"tour"} />
      </HomeSection>
    </>
  );
}

export default Homepage;

const HomeSection = styled.section`
  min-height: 100vh;
  position: relative;
  ${(props) => props.theme.flexCenter}
  flex-direction: column;
  text-align: center;
  gap: 1em;
  @media (max-width: 440px) {
    min-height: 150vh;
  }
  .filter {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url("https://i.pinimg.com/originals/46/81/ab/4681ab70e71472cf2906d7f15f1d0f82.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    filter: brightness(0.2);
    z-index: -1;
  }
  h1 {
    color: ${(props) => props.theme.colors.white};
    font-size: 2rem;
  }
  h4 {
    color: #77aca2;
    font-size: 1.4rem;
  }
  p {
    font-size: 1.2rem;
    color: #77aca2;
    span {
      color: #8becdb;
      font-size: 1.4rem;
      font-weight: 700;
    }
  }
`;
