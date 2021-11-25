import React from "react";
import "../BlockOne/BlockOne.css";
import coat from "../../images/coat.svg";
import middleLogo from "../../images/middleLogo.svg";

const BlockOne = () => {
  return (
    <div>
      <div className="blockOne">
        <img
          style={{ position: "relative" }}
          style={{ width: "100%", height: "auto" }}
          src={coat}
          alt=""
        />
        <img className="middleLogo" src={middleLogo} alt="" />
        <p className='title'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
          interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed
          justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis.
          Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi.
          Tortor nibh magna feugiat id nunc, dui nisl viverra.
        </p>
      </div>
    </div>
  );
};

export default BlockOne;
