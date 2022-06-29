import { NextPage } from "next";
import { FormEvent } from "react";
import http from "../utils/http";
import Title from "../components/Title";
import { Button } from "../components/Button";

const CategoryPage: NextPage = () => {
  return (
    <div>
      <Title>Category</Title>

      <form onSubmit={onSubmit}>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <label
          htmlFor="description"
          className="block text-lg font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          className="border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          rows={10}
        ></textarea>
        <Button>Save</Button>
      </form>
    </div>
  );
};

async function onSubmit(event: FormEvent) {
  event.preventDefault();
  const description = document.getElementById(
    "description"
  ) as HTMLTextAreaElement;
  const name = document.getElementById("name") as HTMLTextAreaElement;

  const input = {
    name: name.value,
    description: description.value,
  };

  await http.post("categories", input);
}

export default CategoryPage;
