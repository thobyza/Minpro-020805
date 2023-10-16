export const BottomMenu = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 w-full border-t-2 bg-white px-7 py-2 lg:hidden">
      <ul className="flex justify-between">
        <li>
          <button className="flex flex-col items-center justify-center gap-1 text-accent-green-1">
            <i className="ri-home-4-line text-xl"></i>
            <span className="text-sm font-semibold">Home</span>
          </button>
        </li>
        <li>
          <button className="flex flex-col items-center justify-center gap-1 text-gray-500">
            <i className="ri-calendar-todo-line text-xl"></i>
            <span className="text-sm font-semibold">Create Events</span>
          </button>
        </li>
        <li>
          <button className="flex flex-col items-center justify-center gap-1 text-gray-500">
            <i className="ri-compass-4-line text-xl"></i>
            <span className="text-sm font-semibold">Discover</span>
          </button>
        </li>
      </ul>
    </div>
  );
};
