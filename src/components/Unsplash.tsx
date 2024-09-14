import unsplash from "@/config/unsplash";
import { unsplashObject } from "@/interfaces/interfaces";
import { useQuery } from "@tanstack/react-query";

function Unsplash() {
  const { data, isLoading } = useQuery({
    queryKey: [""],
    queryFn: unsplash.getPhotos,
  });
  return (
    <div className="w-full min-h-96 p-3 border bg-white">
      {isLoading ? (
        "Loading"
      ) : (
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {data?.map((item: unsplashObject) => (
            <li>
              <img
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
