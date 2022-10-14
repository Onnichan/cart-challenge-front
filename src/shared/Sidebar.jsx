/* eslint-disable react/prop-types */

const Sidebar = ({ categories, onHandleFilter }) => {
  return (
    <div className="flex flex-row md:flex-col w-full md:w-1/5 md:mb-4 p-3 border-r-2 border-slate-300">
      <div className="flex flex-col">
        <h3 className="text-slate-800 mb-5">Categories</h3>
        <div className="pl-5 flex md:flex-col gap-2 flex-wrap">
          {categories.map((category) => {
            return (
              <button
                className=" rounded-md border p-2 bg-slate-800 text-slate-200"
                key={category.id}
                onClick={() => {
                  onHandleFilter(category.name);
                }}
              >
                {category.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
