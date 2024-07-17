import { IoStarSharp } from "react-icons/io5";

export default function CurrencyDropdown({
  currencies,
  currency,
  setCurrency,
  favorites,
  handleFavorite,
  titlle = "",
}) {
  return (
    <div>
      <label
        className="block text-sm font-medium text-gray-700"
        htmlFor={titlle}
      >
        {titlle}
      </label>

      <div className="mt-1 relative">
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {/* //! render favorites */}
          {favorites.map((currency) => {
            return (
              <option className="bg-gray-200" value={currency} key={currency}>
                {currency}
              </option>
            );
          })}
          {currencies.map((currency) => {
            return (
              <option value={currency} key={currency}>
                {currency}
              </option>
            );
          })}
        </select>

        <button
          onClick={() => handleFavorite(currencies)}
          className="absolute inset-y-0 right-0 pr-5 flex items-center text-sm leading-5"
        >
          <IoStarSharp />
        </button>
      </div>
    </div>
  );
}
