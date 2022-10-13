import CartIcon from "../../assets/icons/cart_icon.png";

const Card = () => {
  return (
    <div className="flex flex-col rounded-lg border-slate-900 shadow-lg">
      <div className="w-full ">
        <img
          src="https://http2.mlstatic.com/D_NQ_NP_879603-MLA49171604463_022022-V.webp"
          alt="asdas"
          className="block w-1/3 m-auto"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <span className="text-slate-500">
          Samsung Galaxy S21 FE 5G 256 GB grafito 8 GB RAM
        </span>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span>Price:</span>
            <span className="font-bold text-slate-900">$200</span> 
          </div>
          <button type="button" className="bg-violet-500 w-16 flex justify-center items-center border rounded-lg">
            <img src={CartIcon} alt="" width={28} height={28} className=""/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
