import { NavLink, Outlet, ScrollRestoration } from "react-router-dom";
import styled from "styled-components";
import Theme from "../components/theme";

function RootLayout() {
  return (
    <>
      <ScrollRestoration />
      <Theme>
        <RootHeader>
          <h3>საუკეთესო ფასი</h3>
          <h3>ექსკლუზიური შეთავაზებები</h3>
          <h3>არანაირი ჩუმი გადასახდელი</h3>
        </RootHeader>
        <RootNavigation>
          <ul>
            <li>
              <NavLink to={"/"}>მთავარი</NavLink>{" "}
            </li>
            <li>
              <NavLink to={"/tour"}>ტური</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>კონტაქტი</NavLink>
            </li>
          </ul>
        </RootNavigation>

        <main>
          <Outlet />
        </main>
      </Theme>
    </>
  );
}

export default RootLayout;

const RootHeader = styled.header`
  min-height: 2em;
  background-color: ${(props) => props.theme.colors.greenBg};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h3 {
    font-size: 0.8rem;
    font-weight: 700;
    text-align: center;
    border-right: 1px solid ${(props) => props.theme.colors.mainBgColor};
    color: ${(props) => props.theme.colors.white};
    &:last-child {
      border: none;
    }
  }
`;

const RootNavigation = styled.nav`
  min-height: 3rem;
  display: flex;
  background-color: #00030731;
  position: sticky;
  top: 0;
  z-index: 3;
  ul {
    display: flex;
    justify-content: center;
    gap: 2em;
    list-style: none;
    margin: 0 auto;
    align-items: center;
    li {
      a {
        text-decoration: none;
        font-weight: 700;
        letter-spacing: 2px;
        transition: 500ms;
        color: ${(props) => props.theme.colors.white};

        &:hover {
          transition: 500ms;
          color: ${(props) => props.theme.colors.lightBlue};
        }
      }
      .active {
        color: ${(props) => props.theme.colors.lightBlue};
      }
    }
  }
`;
