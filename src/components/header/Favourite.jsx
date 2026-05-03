import heartIcon from "../../assets/heart.svg";

export default function Favourite({ onToggle }) {
  return (
    <div
      onClick={onToggle}
      className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all text-white"
    >
      <img src={heartIcon} alt="" />
      <span>Favourite Locations</span>
    </div>
  );
}
