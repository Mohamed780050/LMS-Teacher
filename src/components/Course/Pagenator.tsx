import { RootState } from "@/Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { changePageCount } from "@/Redux/pagenator";

function Pagenator() {
  const dispatch = useDispatch();
  const { pageSize, pageCounter, total } = useSelector(
    (state: RootState) => state.pagenator
  );
  const { loading } = useSelector((state: RootState) => state.global);
  return (
    <>
      <div className="w-full flex items-center justify-center space-x-2">
        <Button
          disabled={pageCounter === 1 || loading}
          className="space-x-2"
          onClick={() => dispatch(changePageCount(pageCounter - 1))}
        >
          <ArrowLeft size={20} />
          <p>Prev</p>
        </Button>
        <p>
          {pageCounter} of {Math.ceil(total / pageSize) || loading}
        </p>
        <Button
          disabled={pageCounter === Math.ceil(total / pageSize)}
          onClick={() => dispatch(changePageCount(pageCounter + 1))}
          className="space-x-2"
        >
          <p>Next</p>
          <ArrowRight size={20} />
        </Button>
      </div>
    </>
  );
}
export default Pagenator;
