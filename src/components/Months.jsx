import BirthdayCard from "./BirthdayCard";

export default function Months({ data }) {
  //   console.log(data);
  const { month, values } = data;
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-sometype text-xl font-semibold text-gray-100">
        {month}
      </h1>
      <div className="flex flex-col gap-4">
        {values.map((i) => (
          <BirthdayCard key={i.id} info={i} />
        ))}
      </div>
    </div>
  );
}
