import { useState } from "react";

export default function Colors() {
  const colors = ["#C1BDB3", "#58737D", "#545454", "#CBA5A5"];
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex items-center gap-4">
      {colors.map((item, index) => (
        <button
          key={index}
          onClick={() => setSelected(index)}
          className={`size-4 rounded-full ${selected === index ? `ring-4 ring-opacity-40 ring-gray-400` : "ring-0"}`}
          style={{
            background: item,
          }}
        />
      ))}
    </div>
  );
}
