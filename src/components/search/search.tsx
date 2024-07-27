import { useContext, useRef, useState } from "react";
import searchLogo from "../../assets/img/search.png";
import MyContext from "../context/context";
import ItemList from "../ItemList/ItemList";


const SearchItem = () => {
  let search: any= useRef()
  const context = useContext(MyContext);
  const [data, setData] = useState(context);

  const Search = (evt: any) => {
		evt.preventDefault();
    let filteredData = context?.value.data.filter((e: { title:string}) => e.title === search.current.value );
    setData(filteredData)
    console.log(filteredData);
    
  }
  return (
    <form
					className="search-form"
					action="post">
					<input
          ref={search}
						className="search-txt"
						type="text"
						required
						placeholder="search..."
					/>
					<button className="search-btn" onClick={Search}>
						<img
							src={searchLogo}
							className="search-icon"
							alt="the search logo"
						/>
					</button>
				</form>
  )
}

export default SearchItem