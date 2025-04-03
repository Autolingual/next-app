import { useState } from "react";

export default function DynamicText() {
  const [isTextChange, setIsTextChange] = useState(false);

  return (
    <div className="grid grid-flow-col grid-cols-2 gap-3 items-center">
      <button
        className="text-blue-500 px-4 py-2 rounded "
        onClick={() => setIsTextChange((prev) => !prev)}
      >
        Change Text
      </button>
      <p className="font-semibold text-gray-500">
        {isTextChange ? "Changed !" : "Original Text"}
      </p>
    </div>
  );
}
