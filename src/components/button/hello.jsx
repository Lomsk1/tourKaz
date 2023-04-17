import { Link } from "react-router-dom";
import styled from "styled-components";

function ButtonHello({ text, url }) {
  return (
    <LinkComponent to={url}>
      <svg width="277" height="62">
        <defs>
          <linearGradient id="grad1">
            <stop offset="0%" stopColor="#035E7B" />
            <stop offset="100%" stopColor="#035D7B38" />
          </linearGradient>
        </defs>
        <rect
          x="5"
          y="5"
          rx="25"
          fill="none"
          stroke="url(#grad1)"
          width="266"
          height="50"
        ></rect>
      </svg>
      <span>{text}</span>
    </LinkComponent>
  );
}

export default ButtonHello;

const LinkComponent = styled(Link)`
  position: relative;
  display: inline-block;
  width: 277px;
  height: 50px;
  font-size: 1em;
  font-weight: bold;
  line-height: 60px;
  text-align: center;
  text-transform: uppercase;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 17px;
  letter-spacing: 0.045em;

  svg {
    position: absolute;
    top: 0;
    left: 0;
  }

  svg rect {
    //stroke: #EC0033;
    stroke-width: 4;
    stroke-dasharray: 353, 0;
    stroke-dashoffset: 0;
    -webkit-transition: all 600ms ease;
    transition: all 600ms ease;
  }

  span {
    background: #035e7b;
    background: -moz-linear-gradient(left, #035e7b 0%, #035d7b63 100%);
    background: -webkit-linear-gradient(left, #035e7b 0%, #035e7b 100%);
    background: linear-gradient(to right, #035e7b 0%, #035e7b 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff8282', endColorstr='#e178ed',GradientType=1 );

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &:hover svg rect {
    stroke-width: 4;
    stroke-dasharray: 196, 543;
    stroke-dashoffset: 437;
  }
`;
