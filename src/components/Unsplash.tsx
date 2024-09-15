import unsplash from "@/config/unsplash";
import updateCourseInfo from "@/config/UpdateCourseInfo";
import { unsplashObject } from "@/interfaces/interfaces";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Spiner from "./Spiner";

function Unsplash() {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: [""],
    queryFn: unsplash.getPhotos,
  });
  return (
    <div className="w-full photoScroll h-60  p-3 overflow-y-scroll border bg-white">
      {true ? (
        <Spiner />
      ) : (
        <ul className="grid grid-cols-2 gap-1.5">
          {data?.map((item: unsplashObject) => (
            <li>
              <img
                onClick={() =>
                  updateCourseInfo({
                    id: id,
                    values: { ImageURL: item.urls.thumb },
                  })
                }
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
