import "./cat.scss";
import { catsApi } from "../../api/cats";
import { useQuery } from "@tanstack/react-query";

export function Cat() {
  const { data, error, isPending } = useQuery({
    queryKey: ["cats", "random"],
    queryFn: (meta) => catsApi.getRandomCat(meta),
  });

  return (
    <div className="cat">
      {error && <div className="cat__error">{error.message}</div>}
      {isPending && <div className="cat__loader">Loading...</div>}
      {data && <img className="cat__image" src={data[0].url} alt="cat" />}
    </div>
  );
}
