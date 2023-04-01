import { Countrydata } from "@/data";
import Image from "@/components/common/Image";
import Icon from "@/components/common/Icon";

export default function TopCountries() {
  return (
    <div className="flex p-4 flex-col h-full">
      <div className="flex justify-between items-center">
        <div className="text-white font-bold">Top Countries</div>
        <Icon path="res-react-dash-plus" className="w-5 h-5" />
      </div>
      <div className="">favourites</div>
      {Countrydata.map(({ name, rise, value, id }) => (
        <div className="flex items-center mt-3" key={id}>
          <div className="">{id}</div>

          <Image path={`res-react-dash-flag-${id}`} className="ml-2 w-6 h-6" />
          <div className="ml-2">{name}</div>
          <div className="flex-grow" />
          <div className="">{`$${value.toLocaleString()}`}</div>
          <Icon
            path={
              rise ? "res-react-dash-country-up" : "res-react-dash-country-down"
            }
            className="w-4 h-4 mx-3"
          />
          <Icon path="res-react-dash-options" className="w-2 h-2" />
        </div>
      ))}
      <div className="flex-grow" />
      <div className="flex justify-center">
        <div className="">Check All</div>
      </div>
    </div>
  );
}
