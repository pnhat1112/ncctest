import React from 'react';
import Menu from './components/Menu';
import './App.css';

function App() {
  return (
    <div style={containerStyle}>
      <Menu/>
      <div style={mainStyle}>
        <img className="NCC-logo" src="img/logoNCC.png" alt="Logo" style={{flexDirection: "row",}}/>
        <div style={content1}>
          <h4>Lorem ipsum dolor sit asmet?</h4>
          <span className='span'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu
            posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia
            ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauriS a nibh auctor commodo. Praesent et nisi eu justo eleifend convalliS. Quisque
            suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper
            turpiS pellentesque a.
          </span>
        </div>
        <div style={content2}>
          <div style={mainContent2}>
            <h4>Lorem ipsum dolor sit asmet?</h4>
            <img className="NCC-logo" src="img/css.png" alt="Logo" style={imageContent2}/>
            <span className='span'>
              Lorem ipsum dolor sit amet, consectetur adipjscing elit Sed non dui sodales, faucibus libero ut. posuere feliS. Donec imperdiet
              suscipit accumsan , Aenean consequat condimentum velit ut tempor Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at
              ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor,
              Nam porta massa in metus bibendum congue- Pellentesque ultrices vestibulum mattis.
            </span>
          </div>
          <div style={mainContent2}>
            <h4>Lorem ipsum dolor sit asmet?</h4>
            <img className="NCC-logo" src="img/html.png" alt="Logo" style={imageContent2}/>
            <span className='span'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu
              posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia
              ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauriS a nibh auctor commodo. Praesent et nisi eu justo eleifend convalliS. Quisque
              suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper
              turpiS pellentesque a.
            </span>
          </div>
          <div style={mainContent2}>
            <h4>Lorem ipsum dolor sit asmet?</h4>
            <img className="NCC-logo" src="img/url.png" alt="Logo" style={imageContent2}/>
            <span className='span'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu
              posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia
              ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauriS a nibh auctor commodo. Praesent et nisi eu justo eleifend convalliS. Quisque
              suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper
              turpiS pellentesque a.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const containerStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 8fr",
  gridGap: "10px",
  height: "100%",
};

const mainStyle = {
  padding: "20px",
  height: "100vh",
  textAlign: "center",
};
const content1 = {
  marginTop: "30px",
  padding: "10px 200px 30px 200px",
  backgroundColor: "#EFEFEF",
};
const content2 = {
  marginTop: "30px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridGap: "10px",
};

const mainContent2 = {
  textAlign: "justify",
  display: "inline-block",
  paddingRight: "40px"
};

const imageContent2 = {
  width: "100px", 
  height: "100px", 
  float: 'left',
}


export default App;
