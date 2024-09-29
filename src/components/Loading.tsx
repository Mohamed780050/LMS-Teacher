import Spiner from "./Spiner";

function Loading() {
  return (
    <span className="absolute block w-full h-full top-0 left-0 rounded-sm  bg-slate-600/55">
      <Spiner />
    </span>
  );
}
export default Loading;
