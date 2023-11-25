export default function FoodCard({
  title,
  icon,
  selected,
  onClick,
}: {
  title: string;
  icon: string;
  selected: boolean;
  onClick: Function;
}) {
  return (
    <div
      onClick={() => onClick()}
      className={`w-28 h-28 sm:w-36 sm:h-36 sm cursor-pointer ${
        selected ? "bg-green-200" : "bg-slate-100"
      } rounded-lg shadow-md shadow-slate-100 flex flex-col items-center`}
    >
      <div className="h-full flex justify-center items-center">
        <i className={"fa-duotone text-[2.5em] sm:text-[3em] fa-" + icon}></i>
      </div>
      <p className="mb-2 text-lg sm:text-xl font-bold">{title}</p>
    </div>
  );
}
