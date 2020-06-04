import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const Search = () => {
  let history = useHistory();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => history.push(`recipes/${data.ingredient}`);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row flex-center">
        <div className="col-8">
          <div className="form-group">
            <input
              name="ingredient"
              ref={register}
              className="input-block"
              type="text"
              placeholder="Cheese..."
            />
          </div>
        </div>
        <div className="form-group">
          <input type="submit" value="Submit" />
        </div>
      </div>
    </form>
  );
};

export default Search;
