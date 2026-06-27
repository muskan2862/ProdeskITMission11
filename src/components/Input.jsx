"use client";

import { useState } from "react";

export default function Input({ placeholder = "Enter text" }) {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <p>{value}</p>
    </div>
  );
}