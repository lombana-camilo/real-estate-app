import { filterOptions } from "./../../utils/filterOptions";

const FilterBar = () => {
  return (
    <div className="p-4 m-9 bg-secondary text-bg font-medium">
      <h1>Filter Your Search</h1>
      <form action="/properties" method="/get" className="flex flex-wrap h-28 content-around " >

        {filterOptions.map((filter) => {
          return (
            <select name={filter.name} c className="text-primary">
              <option value={filter.placeholder} disabled selected>
                {filter.placeholder}
              </option>
              {filter.options.map((o) => {
                return <option value={o}>{o}</option>;
              })}
            </select>
          );
        })}
      </form>
    </div>
  );
};

export default FilterBar;
