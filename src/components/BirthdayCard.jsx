export default function BirthdayCard({ info }) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const date = new Date(info.date);
  const day = date.getDay();
  const dayOfMonth = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return (
    <div className="flex items-center gap-5 rounded-sm bg-gray-800 p-3 text-gray-100 shadow-md">
      <div>
        <img
          src={info.image}
          className="aspect-square w-16 rounded-full object-cover"
          alt=""
        />
      </div>
      <div className="h-12 w-[2px] bg-gray-400"></div>
      <div className="flex flex-col gap-2">
        <h2 className="font-mulish text-lg font-bold capitalize leading-none">
          {info.name}
        </h2>
        <p className="font-semibold leading-none text-accent">
          {days[day]}, {dayOfMonth} {months[month]} {year}
        </p>
      </div>
    </div>
  );
}
