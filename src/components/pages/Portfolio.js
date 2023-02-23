import React from 'react';
import '../../styles/Portfolio.css';

const styles = {
  portfolioStyles: {


  },
};



export default function Portfolio() {
  return (
    <div class="bg-black row row-cols-1 row-cols-md-6 g-6 p-3" >
      <div class="col">
        <div class="bg-black card h-100 " className="portfolio" style={styles.portfolioStyles}>
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" class="card-img-top" alt="Hollywood Sign on The Hill" />
          <div class="card-body">
            <h5 class="card-title text-white text-center p-4">Card title</h5>
            <p class="card-text text-white">
              This Project was DOPE!!
            </p>
            <p>
              <a type="button" class="btn btn-light btn-rounded" href="https://github.com/" >Code</a>
              <a type="button" class="btn btn-light btn-rounded" href="https://github.com/" >Live</a>
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="bg-black card h-100" className="portfolio" style={styles.portfolioStyles}>
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" class="card-img-top" alt="Palm Springs Road" />
          <div class="card-body">
            <h5 class="card-title text-white text-center p-4">Card title</h5>
            <p class="card-text text-white">Project 2</p>
            <a type="button" class="btn btn-light btn-rounded" href="https://github.com/" >Code</a>
            <a type="button" class="btn btn-light btn-rounded" href="https://github.com/" >Live</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="bg-black card h-100" className="portfolio" style={styles.portfolioStyles}>
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" class="card-img-top" alt="Los Angeles Skyscrapers" />
          <div class="card-body">
            <h5 class="card-title text-white text-center p-4">Card title</h5>
            <p class="card-text text-white">Project 3</p>
            <a type="button" class="btn btn-light btn-rounded" href="https://github.com/" style={styles.portfolioStyles}>Light</a>
            <a type="button" class="btn btn-light btn-rounded" href="https://github.com/" style={styles.portfolioStyles}>Light</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="bg-black card h-100" className="portfolio" style={styles.portfolioStyles}>
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" class="card-img-top" alt="Skyscrapers" />
          <div class="card-body">
            <h5 class="card-title text-center text-white p-4">Card title</h5>
            <p class="card-text text-white">
              Project 4
            </p>
            <a type="button" class="btn btn-light btn-rounded" href="https://github.com/" style={styles.portfolioStyles}>Code</a>
            <a type="button" class="btn btn-light btn-rounded" href="https://github.com/" style={styles.portfolioStyles}>Live</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="bg-black card h-100" className="portfolio" style={styles.portfolioStyles}>
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" class="card-img-top" alt="Los Angeles Skyscrapers" />
          <div class="card-body">
            <h5 class="card-title text-center text-white p-4">Card title</h5>
            <p class="card-text text-white">Project 3</p>
            <a type="button" class="btn btn-light btn-rounded" href="https://github.com/" style={styles.portfolioStyles}>Code</a>
            <a type="button" class="btn btn-light btn-rounded" href="https://github.com/" style={styles.portfolioStyles}>Live</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="bg-black card h-100" className="portfolio" style={styles.portfolioStyles}>
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" class="card-img-top" alt="Los Angeles Skyscrapers" />
          <div class="card-body">
            <h5 class="card-title text-center text-white p-4">Card title</h5>
            <p class="card-text text-white">Project 3</p>
            <a type="button" class="btn btn-light btn-rounded" href="https://github.com/" style={styles.portfolioStyles}>Code</a>
            <a type="button" class="btn btn-light btn-rounded" href="https://github.com/" style={styles.portfolioStyles}>Live</a>
          </div>
        </div>
      </div>
    </div>

  );
}