import React from "react";

const ShippingContent = () => {
  const shippingMethods = [
    {
      method: "Standard",
      time: "Arrives in 5-8 business days",
      cost: (
        <div className="space-y-1">
          <p>Orders up to $49.99: $6.95</p>
          <p>Orders $50 and over: FREE</p>
        </div>
      ),
    },
    { method: "Express", time: "Arrives in 2-3 business days", cost: "$14.95" },
    { method: "Rush", time: "Arrives in 1-2 business days", cost: "$24.95" },
    {
      method: "Truck",
      time: "Arrives in 1-3 weeks once shipped",
      cost: "Cost may vary",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="overflow-hidden border border-gray-200 rounded-sm">
        <table className="w-full text-[11px] text-gray-600 border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="py-3 px-2 border-r border-gray-200 font-bold text-gray-900 uppercase tracking-tight">
                Method
              </th>
              <th className="py-3 px-2 border-r border-gray-200 font-bold text-gray-900 uppercase tracking-tight">
                Shipping Time
              </th>
              <th className="py-3 px-2 font-bold text-gray-900 uppercase tracking-tight">
                Cost
              </th>
            </tr>
          </thead>
          <tbody>
            {shippingMethods.map((item, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-200 last:border-b-0"
              >
                <td className="py-4 px-2 border-r border-gray-200 text-center font-medium">
                  {item.method}
                </td>
                <td className="py-4 px-2 border-r border-gray-200 text-center">
                  {item.time}
                </td>
                <td className="py-4 px-2 text-center">{item.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-[11px] leading-relaxed text-gray-500">
        <p>
          Rush Shipping may not be available for all orders depending on
          fulfillment location.
        </p>
      </div>
      <div>
        <h4 className="text-xs text-gray-900 mb-2 uppercase tracking-wide">
          Returns
        </h4>
        <p className="text-[11px] text-gray-500">
          Visit{"  "}
          <button className="underline hover:text-black">
            Returns & Exchanges
          </button>{"  "}
          for more information on completing a return.
        </p>
      </div>
    </div>
  );
};

export default ShippingContent;
