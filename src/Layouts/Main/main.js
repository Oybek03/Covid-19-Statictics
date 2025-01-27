import React from "react";

/* saytga kirilganda ochiladigan page */

const main = (props) => {
  // props bu yerda davlatlarni olib keladigan obect

  const test = props.regions.length ? "none" : "block";

  const cl = props.regions.length ? "main2" : "";

  const renderRegionListHtml = () => {
    if (!props.regions.length) return;

    return props.regions[0]?.data.data.map((val) => {
      console.log(val);
      return (
        <div
          className="regions"
          id={val.iso}
          key={val.iso}
          onClick={() => {
            props.selectRegionsAction(val.iso);
            props.getProvincesAction();
          }}
        >
          <h3>{val.name}</h3>
        </div>
      );
    });
  };

  return (
    <>
      <div className="main" style={{ display: test }}>
        <h1 className="title">
          Welcome to the <span className="covid-19">covid-19</span> statistics
          website <span>!</span>
        </h1>
        <button
          className="come"
          onClick={() => {
            props.getRegionsAction();
          }}
        >
          Come in
        </button>
      </div>
      <div className={cl}>{renderRegionListHtml()}</div>
    </>
  );
};

export default main;
