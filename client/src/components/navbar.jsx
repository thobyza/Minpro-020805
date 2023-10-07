
export const Navbar = () => {
    return (
        <nav className="flex justify-between items-center shadow-sm px-20 py-4">
            <div>
                Logo
            </div>
            <div class="text-gray-600">
                <input class="border-2 border-gray-300 bg-white px-5 py-1 pr-16 rounded-2xl text-sm focus:outline-none"
                type="search" name="search" placeholder="Search"/>
                <button type="submit" class="absolute right-0 top-0 mt-5 mr-4"></button>
            </div>
            <div className="flex gap-8">
                <div>Browse Events</div>
                <div>Create Events</div>
                <div>Sign in</div>
                <div>Register</div>
            </div>
        </nav>
    )
}