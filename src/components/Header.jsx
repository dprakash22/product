const Header=()=>{
    return (
        <div className="flex p-5 bg-slate-700">
            <span className="text-xl font-bold-100 my-2 text-white">Logo</span>
            <div className="container pr-5">
                <ul className="flex justify-end text-xl font-bold-100 text-white">
                <li className="pr-6 my-2"><a href="">Home</a></li>
                <li className="pr-6 my-2"><a href="">Cart</a></li>
                <li className="pr-6 my-2"><a href="">Contact</a></li>
                <li className="pr-6 my-2"><a href="">Profile</a></li>
                </ul>
                
            </div>

        </div>
    )
}
export default Header