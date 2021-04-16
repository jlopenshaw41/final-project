import React from "react";
import paul from "../../src/assets/paul.png"
import jenny from "../../src/assets/jenny.png"
import jen from "../../src/assets/jen.png"
import styled from "styled-components";

const Flexrow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  margin-left: 50px;
`;

const Flexcolumn = styled.div`
  text-align: left;
  color: black;
  border: .2rem;
  width: ${(props) => props.size / 12 * 100}vw;
`;

const Contact = () => {
  return (
    <div>
      <Flexrow>
          <Flexcolumn size={2}>
            <img src={jenny} style={{ height: `100px`, width: '100px', borderRadius: '50%' }} alt="paul"/>
          </Flexcolumn>
          <Flexcolumn size={9}>
            <p>I'm Jenny and during the COVID-19 pandemic, I learned to code part-time through the amazing course at Manchester Codes. Empowered by all the amazing things we can do with tech, I am more motivated than ever to join the sector and help contribute to change. This app is the final project of the 24 week course and I'm really keen to improve awareness of sustainable living and renewable energy to anyone who comes across it. Alongside coding,  I'm a keen reader, love the outdoors especially the Peak District, enjoying playing music and can't wait to get back to a museum. You can find me on <a href="https://twitter.com/niff_ellisiva">Twitter </a>and <a href="https://www.linkedin.com/in/jennifer-cant-09bb48120/">LinkedIn. </a></p>
          </Flexcolumn>
      </Flexrow>
      <Flexrow>
          <Flexcolumn size={2}>
            <img src={jen} style={{ height: `100px`, width: '100px', borderRadius: '50%' }} alt="paul"/>
          </Flexcolumn>
          <Flexcolumn size={9}>
            <p>My name is Jen and I’m a Software Engineer and mum of two boys. In March 2021, I completed a Software Engineering Fasttrack course with Manchester Codes to re-train as a developer, alongside being a full time mum. Prior to that, I had a career working in beautiful old buildings at the National Trust. I love creating things with code and exploring new technologies - this Carbon-Lo project allowed us to do just that! Please feel free to contact me via <a href="https://twitter.com/Jlopenshaw">Twitter </a>and <a href="https://www.linkedin.com/in/jennifer-openshaw/">LinkedIn. </a></p>
          </Flexcolumn>
      </Flexrow>
      <Flexrow>
          <Flexcolumn size={2}>
            <img src={paul} style={{ height: `100px`, width: '100px', borderRadius: '50%' }} alt="paul"/>
          </Flexcolumn>
          <Flexcolumn size={9}>
            <p>Hey, Folks! My name is Paul Hardy and I'm a family man from the fair old city of Manchester. After starting my working life as an IT technical resource, I've spent many years managing numerous IT and Property development projects. However, I've decided the time has come to go back to my first love and return to the world of technology. I've begun to retrain as a Software Developer under the guidance of the good people over at Manchester Codes and I'm now looking to put my newly acquired skills into practice. The Carbon-Lo project is my first step on the long Software development road. If you want to connect, you can find me on <a href="https://uk.linkedin.com/in/paul-hardy-17155540">LinkedIn! </a></p>
          </Flexcolumn>
      </Flexrow>
    </div>
  )
}

export default Contact;

