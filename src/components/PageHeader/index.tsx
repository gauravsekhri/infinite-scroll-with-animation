import NumberTicker from "../magicui/number-ticker";
import { useSelector } from "react-redux";

const PageHeader = () => {
  const storeData = useSelector((store: any) => store);

  return (
    <>
      <div className="p-6 flex justify-between items-center border border-b-1 sticky top-0 backdrop-blur z-10">
        <div className="flex items-center">
          {" "}
          <div className="font-bold w-[60px] text-right">
            <NumberTicker value={storeData?.products?.loadedCount ?? 0} />
          </div>
          /10,000 Loaded
        </div>
      </div>
    </>
  );
};

export default PageHeader;
