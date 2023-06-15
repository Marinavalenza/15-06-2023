import "./index.css";

const Navbar = ({
  allTodos,
  filterCompletedTodos,
  filterNotCompletedTodos,
}) => {
  const links = [
    {
      id: 1,
      name: "Your List",
      url: allTodos,
    },
    {
      id: 2,
      name: "Completed",
      url: filterCompletedTodos,
    },
    {
      id: 3,
      name: "Not Completed",
      url: filterNotCompletedTodos,
    },
  ];

  return (
    <div className="Navbar">
      <ul className="Navbar__list">
        {links.map((link) => (
          <li className="Navbar__list-item" key={link.id}>
            <button
              onClick={() => {
                link.url();
              }}
            >
              {link.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
