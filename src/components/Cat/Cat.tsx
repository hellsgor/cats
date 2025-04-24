import "./cat.scss";
import { CatDto } from "../../api/cats";
import { FC } from "react";

export interface CatProps {
  data: CatDto[] | undefined;
  isFetching: boolean;
  error?: Error;
}

export const Cat: FC<CatProps> = ({ data, isFetching, error }) => {
  return (
    <div className="cat">
      {error && <div className="cat__error">{`Failed to load image`}</div>}
      {isFetching && <div className="cat__loader">Loading...</div>}
      {!isFetching && !error && data && (
        <img
          key={data[0].id}
          className="cat__image"
          src={data[0].url}
          alt="cat"
        />
      )}
    </div>
  );
};
