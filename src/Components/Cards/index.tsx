import { PropsCard } from "@Types"
import { AuthContext } from "Helpers/Context/AuthProvider";
import { useContext } from "react";
import ReactPaginate from "react-paginate";
import '../../../src/pagination.css'

export const Cards = ({ data, searchTerm, pageNumber, handlePageChange, onclick }: PropsCard) => {

    const { setValueId } = useContext(AuthContext);
  
    // PAGINAÇÃO COM FILTRO
    const CharactersPerPage = 8;
    const pagesVisited = pageNumber * CharactersPerPage;
  
    const displayCharacters = data
      .filter((users) => {
        if (searchTerm === "") {
          return users;
        } else if (
          users.name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return users;
        }
        return false;
      })
      .slice(pagesVisited, pagesVisited + CharactersPerPage)
      .map((users) => {
        return (
          <>
            <div key={users.name} onClick={() => setValueId(users._id)} className="h-72 w-64 mt-16 ml-4 rounded-md bg-gradient-to-r from-stone-900 to-stone-900 cursor-pointer hover:border-2 border-orange-400"> 
                <img src={users.imageUrl} alt="imageuser" className="w-full h-52 rounded-t-md" />
                <p className="text-white text-base font-bold p-5 mt-2 hover:text-orange-400">Nome: {users.name}</p>
            </div>
          </>
        );
      });
  
    const pageCount = Math.ceil(
        data.filter((users) => {
        if (searchTerm === "") {
          return users;
        } else if (
            users.name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return data;
        }
        return false;
      }).length / CharactersPerPage
    );
    
    return (
        <>
        <div onClick={onclick} className="grid grid-cols-4 gap-5 mb-8 max-laptop:grid-cols-3 max-770px:grid-cols-2 max-414px:grid-cols-1">
            {displayCharacters}
        </div>
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </>  
    )
}