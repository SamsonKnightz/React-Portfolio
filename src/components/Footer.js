import React from "react"
import "../../src/styles/Footer.css"


const styles = {
    footerStyles: {
      background: 'black',
      color: "white",
  
    },
  };


function Footer() {
    return (
<footer class="bg-black text-center text-lg-start" className="footer" style={styles.footerStyles}>
  <div class="container p-4">
    <div class="row">
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <ul class="list-unstyled mb-0">
          <li>
            <a href="https://www.linkedin.com/in/samson-vang/" class="text-white">LinkedIn</a>
          </li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <ul class="list-unstyled">
          <li>
            <a href="https://stackoverflow.com/users/21252899/samson-vang" class="text-white">StackOverflow</a>
          </li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <ul class="list-unstyled mb-0">
          <li>
            <a href="https://github.com/SamsonKnightz" class="text-white">Github</a>
          </li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <ul class="list-unstyled">
          <li>
            <a href="mailto:samson.vang@live.com" class="text-white">Email</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="text-center p-3 text-white">
    © 2020 Copyright:
    <p class="text-white">Samson Vang</p>
  </div>

</footer>
    );
}

export default Footer;