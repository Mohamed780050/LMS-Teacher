import unsplash from "@/config/unsplash";
import updateCourseInfo from "@/config/UpdateCourseInfo";
import { unsplashObject } from "@/interfaces/interfaces";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Spiner from "./Spiner";

function Unsplash({ setEdit }: { setEdit: (v: boolean) => void }) {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: [""],
    queryFn: unsplash.getPhotos,
  });
  return (
    <div className="w-full photoScroll h-60  p-3 overflow-y-scroll border bg-white">
      {isLoading ? (
        <span className="absolute  flex items-center justify-center w-full h-full top-0 left-0 rounded-sm bg-slate-400/50 ">
          <Spiner />
        </span>
      ) : (
        <ul className="grid grid-cols-2 gap-1.5">
          {data?.map((item: unsplashObject, index: number) => (
            <li key={index * 304.7}>
              <img
                loading="lazy"
                onClick={() => {
                  updateCourseInfo({
                    id: id,
                    values: { ImageURL: `${item.urls.thumb}&w=720` },
                  });
                  setEdit(false);
                }}
                className="cursor-pointer w-full h-full"
                src={item.urls.raw}
                alt=""
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Unsplash;
