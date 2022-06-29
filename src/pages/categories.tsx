import { NextPage } from "next";
import useSWR from "swr";
import Category from "../components/Category";
import Title from "../components/Title";
import http from "../utils/http";
import { SearchOutput } from "../utils/models";

const fetcher = (url: string) => http.get(url).then((res) => res.data);

const CategoriesPage: NextPage = () => {
  const { data: categories } = useSWR<SearchOutput>("categories", fetcher, {
    refreshInterval: 5000,
  });

  return (
    <div>
      <Title>Categories</Title>
      {categories?.items.map((c, key) => (
        <Category key={key} category={c} />
      ))}
    </div>
  );
};

export default CategoriesPage;
