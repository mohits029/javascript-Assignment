import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Headder from './Headder';
import Mid from './Midbody';
import Image from './images/mohit.png';
import Text from './Components/Textcomponent.js';
import Rightext from './Components/Rightext.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
const t= "hello my name is mohit sarkar i am pursuing BCA from droan group of college i know a few programming language such as c. c++, java and python and rightnow i learning webdevelopment";
const headderlist= ["Mohit","Projects", "Testimonial", "About", "Education", "Demo","Demo", "Demo", "Demo"];
root.render(

  <div>
 <Headder hest= {headderlist}/>
 <Mid Img= {Image} name= "Mohit sarkar"/>
 <Text text= {t}/>
 <Rightext text= {t} link="https://www.google.com"/>
 </div>
);
