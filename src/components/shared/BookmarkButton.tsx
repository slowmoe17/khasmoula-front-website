import { BookmarkIcon } from "../icons";

function BookmarkButton() {
  return (
    <button
      type="button"
      className="shadow-[0px_0px_2px_0px_#00000040] bg-white group hover:bg-primary-light-active transition-all duration-300 w-12 h-12 rounded-full overflow-hidden flex items-center justify-center"
    >
      <BookmarkIcon className="text-primary size-6 group-hover:text-white transition-all duration-300" />
    </button>
  );
}

export default BookmarkButton;
