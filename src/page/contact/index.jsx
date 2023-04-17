import { Link } from "react-router-dom";
import styled from "styled-components";

function ContactPage() {
  return (
    <>
      <ContactSection>
        <fieldset>
          <legend>საკონტაქტო</legend>
          <h1>თამაზი ტურ.</h1>
          <a href="tel:+995599513566">+995-599-51-35-66</a>
          <div className="contacts">
            <p>ვაცაპი</p>
            <p>ვიბერი</p>
            <p>მესენჯერი</p>
          </div>
        </fieldset>
      </ContactSection>
    </>
  );
}

export default ContactPage;

const ContactSection = styled.section`
  min-height: 100vh;
  ${(props) => props.theme.flexCenter}
  flex-direction: column;
  fieldset {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    width: 90%;
    max-width: 500px;
    color: ${(props) => props.theme.colors.white};
    letter-spacing: 3px;
    h1 {
      font-weight: 500;
    }
    a {
      color: ${(props) => props.theme.colors.lightBlue};
      transition: 500ms;

      &:hover {
        transition: 500ms;
        color: ${(props) => props.theme.colors.red};
      }
    }
    .contacts {
        display: flex;
        gap: 15px;
        letter-spacing: 1px;
        font-size: 0.8rem;
    }
  }
`;
