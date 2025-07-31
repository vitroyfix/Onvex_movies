import './Navbar.css';
import GooeyNav from './GooeyNav'; // Make sure this path is correct

const Navbar = (props) => {
  const navbarLinks = [
    { label: "Home", link: "#" },
    { label: "Movies", link: "#" },
    { label: "TV Shows", link: "#" },
    { label: "Top Rated", link: "#" },
    { label: "Upcoming", link: "#" },
  ];

  return (
   <nav className="navbar">
      <div className="navbar-left">
        <ul className="nav-list">
          {navbarLinks.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div style={{ height: '100px', position: 'relative' }}>
          <GooeyNav
            items={navbarLinks}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>
      </div>

      <div className="navbar-right">
        <div className="navbar-search-container">
          <input
            type="text"
            className="navbar-search"
            placeholder="Search Movies, TV Shows, Upcoming..."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="search-icon"
          >
            <path d="m21 21-4.34-4.34" />
            <circle cx="11" cy="11" r="8" />
          </svg>
        </div>
        <button>
          {props.buttonName}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
