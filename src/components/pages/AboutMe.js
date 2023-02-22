import React from 'react';
import ProfilePhoto from '../../assets/MePhotoModified.jpg'
import '../../styles/Section.css';

const styles = {
  sectionStyles: {
    background: 'black',
    color: "white",

  },
};


export default function AboutMe() {
  return (
    <section style={styles.sectionStyles} className="section">
      <div class="container p-2 mt-3">
        <h2 class="text-center text-light fw-bolder pb-3 mb-3">About Me</h2>
        <div class="row d-flex justify-content-center">
          <div class="col-4">
            <img src={ProfilePhoto} className='img-fluid rounded' alt='ProfilePhoto' />
          </div>
          <div class="col-6">
            <p><span class="fw-bolder fs-4 text-light">Hello, I am Samson Vang </span>
              <br /><br />
              I enjoy working on cars as a hobby, but I am passionate about learning code.
              <br /><br />
              Growing up as a child, I was always interested
              in what code was. My father who was an IT tech for over 20 years introduced me into coding with the language of C++ at the age of 15.
              <br /><br />
              As young man I chased fast, pretty cars. Little did I know the pandemic would lead me back on my journey of coding.
              <br /><br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
