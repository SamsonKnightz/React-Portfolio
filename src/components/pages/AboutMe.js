import React from 'react';
import ProfilePhoto from '../../assets/MePhotoModified.jpg'


export default function AboutMe() {
  return (
    <div class="container p-2 mt-3">
            <h2 class="text-center text-primary fw-bolder pb-3 mb-3">here's what to know about me</h2>
            <div class="row d-flex justify-content-center">
                <div class="col-4">
                    <img src={ProfilePhoto} className='img-fluid rounded' alt='Profile photo' />
                </div>
                <div class="col-6">
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
  );
}
