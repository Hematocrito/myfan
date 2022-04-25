import { useEffect, useRef, useState } from 'react';

export default function RangeDouble({
  initialMin,
  initialMax,
  min,
  max,
  step,
  price,
}: any) {
  const progressRef: any = useRef(null);
  const [minValue, setMinValue] = useState(initialMin);
  const [maxValue, setMaxValue] = useState(initialMax);

  const handleMin = (e: any) => {
    if (maxValue - minValue >= price && maxValue <= max) {
      if (parseInt(e.target.value) > parseInt(maxValue)) {
      } else {
        setMinValue(parseInt(e.target.value));
      }
    } else {
      if (parseInt(e.target.value) < minValue) {
        setMinValue(parseInt(e.target.value));
      }
    }
  };

  const handleMax = (e: any) => {
    if (maxValue - minValue >= price && maxValue <= max) {
      if (parseInt(e.target.value) < parseInt(minValue)) {
      } else {
        setMaxValue(parseInt(e.target.value));
      }
    } else {
      if (parseInt(e.target.value) > maxValue) {
        setMaxValue(parseInt(e.target.value));
      }
    }
  };

  useEffect(() => {
    progressRef.current.style.left = (minValue / max) * step + '%';
    progressRef.current.style.right = step - (maxValue / max) * step + '%';
  }, [minValue, maxValue]);

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between items-center my-1">
        <div className="rounded-dm">
          <span className="font-semibold text-lg">Price up to</span>
          {/* <input
            onChange={(e: any) => setMinValue(e.target.value)}
            type="number"
            value={minValue}
            className="w-24 font-semibold text-lg"
          /> */}
        </div>
        {/* <div className="ml-2 font-semibold text-lg"> - </div> */}
        <div className="rounded-dm">
          {/* <span className="p-2 font-semibold">Max</span> */}
          <input
            onChange={(e: any) => setMaxValue(e.target.value)}
            type="number"
            value={maxValue}
            className="w-24 text-right font-semibold text-lg"
          />
        </div>
      </div>

      <div className="mb-4">
        <div className="slider relative h-1 rounded-md bg-gray-300">
          <div
            className="progress absolute h-1 bg-blue-450 rounded"
            ref={progressRef}
          ></div>
        </div>
        <div className="range-input relative">
          {/* <input
            type="range"
            onChange={handleMin}
            value={minValue}
            min={min}
            step={step}
            max={max}
            className="range-min absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none"
          /> */}
          <input
            type="range"
            onChange={handleMax}
            value={maxValue}
            min={min}
            step={step}
            max={max}
            className="range-max absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}
