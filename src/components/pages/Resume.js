import React from 'react';
import '../../styles/Section.css';

const styles = {
    sectionStyles: {
      background: 'black',
      color: "white",

    },
  };

export default function Resume() {
  return (
    <section style={styles.sectionStyles} className="section">
    <div class="container w-50 p-3 mt-3">
    <h1 class="h1-responsive font-weight-bold text-center text-light fw-bolder pb-3 mb-3">Resume</h1>
    <div class="col-4">
    <img src="" className='img-fluid rounded' alt='ProfilePhoto' />
    </div>
    <div class="col-6">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
      velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
      ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
      non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
      ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
      rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
      tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
      porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
      vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
      fames ac ante ipsum primis in faucibus.
    </p>
  </div>
  </div>
  </section>
  );
}
