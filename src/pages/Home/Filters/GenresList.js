import React from "react";

const GenresList = ({ data }) => {
  console.log(data);
  return (
    <ul className="text-left">
      {data &&
        data.map(({ name, id }) => {
          return (
            <li className="form-check" key={id} data-id={id}>
              <label className="form-check-label" htmlFor={`check${id}`}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`check${id}`}
                />
                {name}
              </label>
            </li>
          );
        })}
    </ul>
  );
};
export default GenresList;
