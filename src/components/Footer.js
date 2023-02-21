import React from "react"

const styles = {
    sectionStyles: {
      background: 'black',
      color: "white",
  
    },
  };

function Footer() {
    return (
        <section style={styles.sectionStyles} className="section">
        <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top sticky-bottom">
                <p class="col-md-4 mb-0 text-muted">© 2023 Samson Vang</p>

                <ul class="nav col-md-4 justify-content-end">
                    <li class="nav-item"><a href="https://github.com/SamsonKnightz" target="_" class="nav-link px-2 text-muted">Github</a></li>
                    <li class="nav-item"><a href="https://stackoverflow.com/users/21252899/samson-vang" target="_" class="nav-link px-2 text-muted">Stack Overflow</a></li>
                    <li class="nav-item"><a href="https://www.linkedin.com/in/samson-vang/" target="_" class="nav-link px-2 text-muted">LinkedIn</a></li>
                </ul>
            </footer>
        </div>
        </section>
    );
}

export default Footer;