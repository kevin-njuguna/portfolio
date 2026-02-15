const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6">
        <h1 className="text-lg font-semibold">Kevin Njuguna</h1>
        
            <div className="space-x-10 text-sm text-gray-400">
                <a href="#" className="hover:text-white">Home</a>
                <a href="#" className="hover:text-white">Projects</a>
                <a href="#" className="hover:text-white">Skills</a>
                <a href="#" className="hover:text-white">Contact</a>
            </div>
    </nav>
  )
}

export default Navbar