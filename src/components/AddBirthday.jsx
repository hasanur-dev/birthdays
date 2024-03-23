import { useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import { enIN } from "date-fns/locale/en-IN";
registerLocale("enIN", enIN);
import "react-datepicker/dist/react-datepicker.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { addBirthday } from "../services/apiBirthdays";
import toast from "react-hot-toast";
import { addBirthday } from "../services/apiBirthdays";
import Spinner from "./Spinner";

export default function AddBirthday({ handleShowAdd }) {
  const [startDate, setStartDate] = useState(new Date());
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: addBirthday,
    onSuccess: () => {
      handleShowAdd();
      queryClient.invalidateQueries(["birthdays"]);
    },
  });

  const handleSubmit = (e) => {
    // console.log(typeof startDate);
    e.preventDefault();
    mutate({ name, date: startDate, image: image });
  };

  const handleImage = (e) => {
    e.preventDefault();
    console.log("dropped");
    const image = e.dataTransfer?.items[0].getAsFile() || e.target.files[0];
    console.log(image.type.startsWith("image"));
    console.log(image);
    if (!image.type.startsWith("image")) {
      toast.error("Invalid file type");
      return;
    }
    // const imageSize = image.size / 1000;
    // if (imageSize > 2000) {
    //   // toast.error("Max file size is 2MB");
    //   return;
    // }
    // console.log(imageSize);
    // uploadImage(image);
    setImage(image);
  };

  return (
    <div className="fixed inset-0 z-30 bg-gray-900 px-4  py-16 backdrop-blur-sm">
      <form
        onSubmit={handleSubmit}
        className="relative  mx-auto flex max-w-96 flex-col gap-10 py-16 font-mulish text-lg text-gray-100"
      >
        <div className="flex flex-col ">
          <label htmlFor="name" className="px-2  font-sometype">
            Name
          </label>
          <input
            type="text"
            className="w-full border-b-2 border-b-accent bg-transparent px-3 py-1 text-lg outline-none"
            id="name"
            onChange={(e) => setName(e.target.value)}
            disabled={isPending}
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="date" className="px-2 font-sometype">
            Date
          </label>
          <DatePicker
            locale="enIN"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            id="date"
            disabled={isPending}
            className="w-full border-b-2 border-b-accent bg-transparent px-3 py-1 text-lg outline-none"
          />
        </div>
        <div>
          <input
            onChange={handleImage}
            type="file"
            className=" bg-transparent py-1 text-lg outline-none"
            disabled={isPending}
          />
        </div>
        <button
          disabled={isPending}
          className="mt-5 rounded-md bg-accent py-2 font-sometype text-lg font-bold text-gray-900"
        >
          {isPending ? <Spinner /> : "Add"}
        </button>
        <button
          onClick={handleShowAdd}
          type="button"
          disabled={isPending}
          className="absolute right-0 top-0 w-12 rounded-md bg-accent py-2 font-sometype text-lg font-bold text-gray-900"
        >
          X
        </button>
      </form>
    </div>
  );
}
