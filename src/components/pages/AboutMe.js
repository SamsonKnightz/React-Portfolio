import React from 'react';
import ProfilePhoto from '../../assets/MePhotoModified.jpg'
import '../../styles/Section.css';

const styles = {
    sectionStyles: {
      background: 'black',
      color: 'white',
    },
  };


export default function AboutMe() {
  return (
    <section style={styles.sectionStyles} className="section">
    <div class="container p-5 mt-5">
            <h2 class="text-center text-primary fw-bolder pb-3 mb-3">About Me</h2>
            <div class="row d-flex justify-content-center">
                <div class="col-5">
                    <img src={ProfilePhoto} className='img-fluid rounded' alt='ProfilePhoto' />
                </div>
                <div class="col-5">
                    <p><span class="fw-bolder fs-4 text-secondary">Hello, I am Samson Vang </span>
                        <br /><br />

                        Lorem ipsum
                        <br /><br />

                        Lorem ipsum
                        <br /><br />

                        Lorem ipsum
                    </p>
                </div>
            </div>
        </div>
        </section>
  );
}