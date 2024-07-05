import React, { useState, useEffect } from 'react';
import { assets } from '../../assets/assets.js';
import './Header.css';

const Header = () => {
  const branches = [
    { name: 'Mechanical Engineering', image: assets.mechanical },
    { name: 'Electrical Engineering', image: assets.electrical },
    { name: 'Civil Engineering', image: assets.civil },
    { name: 'Chemical Engineering', image: assets.chemical },
    { name: 'Computer Engineering', image: assets.computer },
    { name: 'Aerospace Engineering', image: assets.aerospace }
  ];

  const [currentBranch, setCurrentBranch] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBranch((prevBranch) => (prevBranch + 1) % branches.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        {branches.map((branch, index) => (
          <li
            key={index}
            data-target="#carouselExampleIndicators"
            data-slide-to={index}
            className={index === currentBranch ? 'active' : ''}
            onClick={() => setCurrentBranch(index)}
          ></li>
        ))}
      </ol>
      <div className="carousel-inner">
        {branches.map((branch, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentBranch ? 'active' : ''}`}
            style={{ backgroundImage: `url(${branch.image})` }}
          >
            <h1 className="branch-name">{branch.name}</h1>
          </div>
        ))}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
        onClick={() => setCurrentBranch((prevBranch) => (prevBranch - 1 + branches.length) % branches.length)}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only"></span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
        onClick={() => setCurrentBranch((prevBranch) => (prevBranch + 1) % branches.length)}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only"></span>
      </a>
    </div>
  );
};

export default Header;
