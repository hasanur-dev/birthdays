import { useState } from "react";
import BirthdayCard from "./BirthdayCard";
import { AnimatePresence, motion } from "framer-motion";
import AddBirthday from "./AddBirthday";
import { useQuery } from "@tanstack/react-query";
// import { getBirthdays } from "../services/apiBirthdays";
import Spinner from "./Spinner";
import { groupByMonth } from "../Helper/SortDates";
import Months from "./Months";
import { getBirthdays } from "../services/apiBirthdays";

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");
  const [showAdd, setShowAdd] = useState(false);
  const handleTab = (tab) => setActiveTab(tab);
  const handleShowAdd = () => setShowAdd((prev) => !prev);

  const { data, isPending } = useQuery({
    queryKey: ["birthdays"],
    queryFn: getBirthdays,
  });

  // if (isPending) return <p>Loading.</p>;

  // console.log(data);
  let filteredData = data ? groupByMonth(data) : [];
  // let filteredData = ;
  // console.log(filteredData);

  return (
    <div className=" min-h-dvh bg-gray-900 px-6 py-14 font-mulish ">
      <div className="mx-auto flex max-w-96 flex-col gap-6 rounded-md bg-gray-900  py-6">
        <div className="flex justify-end font-sometype text-gray-100">
          <ul className="flex gap-2 rounded-md bg-gray-800/50 p-2 font-semibold">
            <li
              onClick={() => handleTab("all")}
              className={`${activeTab === "all" ? "text-gray-900" : "text-gray-100"} relative cursor-pointer rounded-sm px-4 py-1.5 transition-colors duration-300 hover:bg-accent/10`}
            >
              <span className="relative z-20">All</span>
              {activeTab === "all" && (
                <motion.div
                  layoutId="tab"
                  className="absolute inset-0 rounded-sm bg-accent"
                ></motion.div>
              )}
            </li>
            <li
              onClick={() => handleTab("upcoming")}
              className={`${activeTab === "upcoming" ? "text-gray-900" : "text-gray-100"} relative cursor-pointer rounded-sm px-4 py-1.5 transition-colors duration-300 hover:bg-accent/10`}
            >
              <span className="relative z-20">Upcoming</span>
              {activeTab === "upcoming" && (
                <motion.div
                  layoutId="tab"
                  className="absolute inset-0 rounded-sm bg-accent"
                ></motion.div>
              )}
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-8">
          {isPending ? (
            <div className="flex justify-center py-12">
              <Spinner />
            </div>
          ) : (
            filteredData.map((i) => {
              return <Months key={i.month} data={i} />;
            })
          )}
        </div>
        <button
          className="rounded-md bg-accent px-6 py-2 font-sometype text-xl font-bold"
          onClick={handleShowAdd}
        >
          Add
        </button>
      </div>
      <AnimatePresence>
        {showAdd && (
          <motion.div
            className="fixed inset-0 z-20"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.25 }}
          >
            <AddBirthday handleShowAdd={handleShowAdd} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
