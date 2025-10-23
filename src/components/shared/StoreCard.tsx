import Image from "next/image";
import { BookmarkIcon } from "../icons";

function StoreCard() {
  return (
    <div className="bg-white pt-5 rounded-[10px] shadow-[0px_0px_3px_0px_#00000040]">
      <div className="flex items-center justify-between">
        <button
          type="button"
          className="shadow-[0px_0px_2px_0px_#00000040] ms-5 w-12 h-12 rounded-full overflow-hidden flex items-center justify-center"
        >
          <BookmarkIcon className="text-primary size-6" />
        </button>

        <div className="w-[115px] h-9.5 flex items-center justify-center bg-primary-light rounded-tr-[50px] rounded-br-[50px] mt-[5px] text-primary">
          الاكثر استعمالا
        </div>
      </div>

      <div className="flex items-center justify-center flex-col -mt-[15px]">
        <Image
          src="/noon.png"
          alt="store"
          width={129}
          height={129}
          className="max-w-[129px] max-h-[129px] rounded-full"
        />

        <h3 className="text-xl font-semibold mt-5">نون</h3>

        <p className="text-center text-[22px] font-semibold">
          احصل علي خصومات تصل الي 40%
        </p>
      </div>
    </div>
  );
}

export default StoreCard;
