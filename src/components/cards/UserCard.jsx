import PropTypes from "prop-types";

function UserCard(props) {
  return (
    <article className="flex justify-between items-center gap-3 py-2 px-5">
      <span className="w-[5%]">
        <i className="fa-solid fa-circle text-green-400"></i>
      </span>
      <span className="w-[90%] leading-4">
        <h3 className="text-white font-extrabold text-2xl">{props.name}</h3>
        <p className="font-bold text-gray-900">{props.email}</p>
      </span>
      <a href="#" className="w-[5%]">
        <i className="fa-solid fa-chevron-down font-bold text-white text-xl"></i>
      </a>
    </article>
  );
}

UserCard.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
};

UserCard.defaultProps = {
  name: "User",
  email: "user@example.com",
};

export default UserCard;
