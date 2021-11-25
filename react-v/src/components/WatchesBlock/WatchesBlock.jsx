import React from "react";
import "../../components/WatchesBlock/WatchesBlock.css";
import season from "../../images/season21.svg";
import watches from "../../images/watches.svg";
import man from "../../images/man.svg";
import newCollection from "../../images/Новая коллекция.svg";
import collection2018 from "../../images/коллекция 2018.svg";
import kostum from "../../images/kostum.svg";
import line from "../../images/Line.svg";


const WatchesBlock = () => {
  return (
    <div>
      <div className="seasonBlock">
        <div className="season">
          <img src={season} alt="" />
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr " }}
          className="watchTwoBlocks"
        >
          <div className="3pics">
            <img
              style={{ width: "240px", height: "290px" }}
              src={watches}
              alt=""
            />
            <img
              style={{ width: "240px", height: "290px" }}
              src={watches}
              alt=""
            />
            <img
              style={{ width: "240px", height: "290px" }}
              src={watches}
              alt=""
            />
          </div>
          <img
            style={{ width: "100%", height: "auto", position: "relative" }}
            src={man}
            alt=""
          />
          <img className="newCollection" src={newCollection} alt="" />
        </div>
        <button className="btnCatalog" style={{ padding: "10px" }}>
          КАТАЛОГ
        </button>
      </div>

      <div className="seasonBlock">
        <div className="season"></div>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr " }}
          className="watchTwoBlocks"
        >
          <img
            style={{ width: "100%", height: "auto", position: "relative" }}
            src={kostum}
            alt=""
          />
          <div style={{textAlign:'center'}} className="3pics">
            <img className="collection2018" src={collection2018} alt="" />
            <img className='line' src={line} alt="" />
            <p className="textCostum" style={{ color: "white", paddingLeft:'20%' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
              rutrum ornare ut mattis habitant dui arcu. Sagittis amet nunc ut
              neque quis nibh arcu. Vivamus vestibulum nisi et venenatis sed
              scelerisque magna consectetur. Amet convallis quis gravida
              facilisis vulputate. Faucibus facilisi habitasse ipsum interdum
              dictum aliquet. Velit quis ullamcorper pulvinar nulla malesuada
              integer. Aenean praesent viverra nulla nullam natoque volutpat
              curabitur auctor. Viverra viverra ullamcorper scelerisque risus
              dignissim egestas. Id aliquam a aliquam egestas leo orci pharetra
              sed diam.{" "}
            </p>
            <button className="btnCollection" style={{ padding: "7px 20px" }}>
              посмотреть коллекцию
            </button>
          </div>
        </div>
        <button className="btnCatalog" style={{ padding: "10px" }}>
          КАТАЛОГ
        </button>
      </div>
    </div>
  );
};

export default WatchesBlock;
