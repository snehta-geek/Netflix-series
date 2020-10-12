import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Card from "./Cards";
import Sdata from "./Serisdata";


//if multiple jsx elements are used,then we can enclose them with the help of <div>/ <>(fragment)/ [](array) tag.

ReactDOM.render(
  <>
    <h1 className="heading-style">List of top 10 Netflix Series</h1>
    {Sdata.map((val) => {
      return (
        <Card
          imgsrc={val.simg}           //properties of component
          title={val.stitle}
          name={val.sname}
          links={val.slinks}
        />
      )
    })};
  </>,

  document.getElementById('root')
);



