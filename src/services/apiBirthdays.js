import toast from "react-hot-toast";
import supabase, { supabaseUrl } from "./supabase";

export const getBirthdays = async function () {
  let { data: birthdays, error } = await supabase.from("birthdays").select("*");
  return birthdays;
};
export const addBirthday = async function (data) {
  const imageName = `${Math.random()}-${data.image.name}`.replaceAll("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/dp/${imageName}`;
  const { data: imageData, error: imageError } = await supabase.storage
    .from("dp")
    .upload(imageName, data.image);

  if (imageError) {
    toast.error("Something went wrong uploading image");
    console.log(imageError);
    throw new Error("Something went wrong");
  }
  // console.log(data);
  // console.log(data.image);
  const { error } = await supabase
    .from("birthdays")
    .insert([{ ...data, image: imagePath }])
    .select();
  return null;
};
