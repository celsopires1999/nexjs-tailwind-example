import TimeAgo from "javascript-time-ago";
import pt from "javascript-time-ago/locale/pt";

TimeAgo.addDefaultLocale(pt);
const timeAgo = new TimeAgo("pt-PT");

type CategoryProps = {
  category: {
    name: string;
    description?: string;
    is_active: boolean;
    created_at: Date;
  };
};
export const Category: React.FunctionComponent<CategoryProps> = (props) => {
  const { category: c } = props;
  return (
    <>
      <div className="border-b" />
      <div className="flex p-4 pb-0">
        <div className="flex items-center ml-3">
          <p className="text-base leading-6 font-medium text-black">
            {c.name}
            <span className="text-sm font-normal text-gray-600">{` - Ativo?: ${isActiveText(
              c.is_active
            )} - ${createdAtText(c.created_at)}`}</span>
          </p>
        </div>
      </div>
      <div className="pl-16">
        <p className="text-black">{c.description}</p>
      </div>
      <div className="m-4" />
    </>
  );
};

const isActiveText = (is_active: boolean): string => {
  return is_active ? "Sim" : "Não";
};

const createdAtText = (created_at: Date): string => {
  return timeAgo.format(new Date(created_at));
};

export default Category;
