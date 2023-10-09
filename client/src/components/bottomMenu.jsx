
export const BottomMenu = () => {
    return (
        <div className="fixed bottom-0 right-0 left-0 w-full py-2.5 px-7 bg-white border-t-2">
            <ul className="flex justify-between">
                <li>
                    <button className="flex flex-col justify-center gap-1 items-center text-accent-green-1">
                        <i className="ri-home-4-line text-2xl"></i>
                        <span className="text-md font-semibold">Home</span>
                    </button>
                </li>
                <li>
                    <button className="flex flex-col justify-center gap-1 items-center text-gray-500">
                        <i className="ri-calendar-todo-line text-2xl"></i>
                        <span className="text-md font-semibold">Create Events</span>
                    </button>
                </li>
                <li>
                    <button className="flex flex-col justify-center gap-1 items-center text-gray-500">
                        <i class="ri-compass-4-line text-2xl"></i>
                        <span className="text-md font-semibold">Discover</span>
                    </button>
                </li>
            </ul>
        </div>

    )
}