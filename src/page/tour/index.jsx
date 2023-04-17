import styled from "styled-components";
import { tourJson } from "../../components/json/tour";

function TourPage() {
  return (
    <>
      <TourSection>
        <header>
          <div className="rotate" />
          <div className="info">
            <p>შესაძლებელია დღეების ცვლილება</p>
            <h6>მითითებულ ფასში შედის:</h6>
            <ul>
              <li>ტრანსფერი აეროპორტიდან</li>
              <li>სასტუმროში ცხოვრება დილის საუზმით</li>
              <li>ექსკურსია პროგრამის მიხედვით</li>
              <li>ტრანსპორტით მომსახურება</li>
            </ul>
          </div>

          <div className="rotate" />
        </header>

        <main>
          {/* Days */}
          {tourJson &&
            tourJson.map((data) => (
              <aside
                key={data.id}
                style={{ backgroundImage: `url(${data.CoverImage})` }}
              >
                <div className="image">
                  <img src={data.mainImage} alt="img" />
                  <div className="text">
                    <h2>{data.day} დღე</h2>

                    <p>{data.description}</p>
                  </div>
                </div>
              </aside>
            ))}
        </main>
      </TourSection>
    </>
  );
}

export default TourPage;

const TourSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  header {
    margin-top: 30px;
    min-height: 3rem;
    ${(props) => props.theme.flexCenter}
    justify-content: space-between;
    padding: 5px 30px;
    .rotate {
      border: 1px solid green;
      width: 20px;
      height: 20px;
      animation: divRotate linear infinite 5s;
      @media (max-width: 550px) {
        display: none;
      }
    }
    .info {
      p {
        font-weight: 900;
        font-size: 1.3rem;
        color: ${(props) => props.theme.colors.white};
        letter-spacing: 3px;
        @media (max-width: 650px) {
          font-size: 1rem;
        }
      }
      h6 {
        font-weight: 500;
        font-size: 1rem;
        color: ${(props) => props.theme.colors.white};
        letter-spacing: 3px;
        margin-top: 15px;
        @media (max-width: 650px) {
          font-size: 0.8rem;
        }
      }
      ul {
        margin-top: 15px;
        list-style-type: decimal;
        li {
          color: ${(props) => props.theme.colors.lightBlue};
          @media (max-width: 650px) {
            font-size: 0.8rem;
          }
        }
      }
    }

    @keyframes divRotate {
      to {
        transform: rotate(360deg);
      }
    }
  }
  aside {
    min-height: 100vh;
    background-color: black;
    ${(props) => props.theme.flexCenter}
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    .image {
      width: 600px;
      height: 400px;
      background-color: blanchedalmond;
      position: relative;
      display: flex;
      align-items: center;
      @media (max-width: 1200px) {
        margin-left: -200px;
      }
      @media (max-width: 900px) {
        width: 90%;
        max-width: 400px;
        aspect-ratio: 1/1;
        margin: 0;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }

      .text {
        width: 450px;
        height: 300px;
        background-color: #ffffff93;
        position: absolute;
        right: -225px;
        padding: 40px;
        @media (max-width: 900px) {
          width: 100%;
          height: 100%;
          left: 0;
        }
        h2 {
          color: ${(props) => props.theme.colors.red};
        }
        p {
          margin-top: 20px;
          color: ${(props) => props.theme.colors.mainBgColor};
          font-weight: 700;
        }
      }
    }
  }
`;
