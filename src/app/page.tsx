// app/page.tsx
"use client";

import React from "react";
import { ZustandTracker } from "zustand-tracker";
import useCounterStore from "@/store/counterStore";

const Page = () => {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <>
      <ZustandTracker
        stores={{
          CounterStore: useCounterStore.getState(),
        }}
      />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Zustand Counter</h1>
        <div className="mb-4 text-2xl">Count: {count}</div>
        <div className="flex space-x-4">
          <button
            className="px-4 py-2 w-32 bg-blue-300 text-white rounded"
            onClick={increment}
          >
            Increment
          </button>
          <button
            className="px-4 py-2 w-32 bg-pink-400 text-white rounded"
            onClick={decrement}
          >
            Decrement
          </button>
          <button
            className="px-4 py-2 w-32 bg-gray-500 text-white rounded"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Page;
