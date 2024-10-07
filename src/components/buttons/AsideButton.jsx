function AsideButton(props) {
  return (
    <button className="w-full flex items-center justify-start cursor-pointer hover:bg-[#343a80] py-4 rounded-md">
      <i className={`${props.icon.type} ${props.icon.icon} text-white font-bold text-2xl w-[15%]`}></i>
      <span className="text-gray-200 text-xl w-[75%] text-start">
        {props.content}
      </span>
      {props.haveArrow ? (
        <a href="#">
          <i className="fa-solid fa-chevron-down font-bold text-white text-xl"></i>
        </a>
      ) : (
        ""
      )}
    </button>
  );
}

export default AsideButton;
