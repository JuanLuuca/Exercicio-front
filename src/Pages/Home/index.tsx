import { PropsPagination, TypeDisney } from "@Types";
import { Header } from "Components/Header"
import { ModalCharacters } from "Components/ModalCharacters";
import { useEffect, useState } from 'react';
import { api } from "Services/api";

export const Home = () => {
    const [data, setData] = useState<TypeDisney[]>([]);

    const [searchTerm, setSearchTerm] = useState("");
    const [pageNumber, setPageNumber] = useState(0);

    // MANIPULANDO O REACT-PAGINATE
    const handlePageChange = ({ selected }: PropsPagination) => {
        setPageNumber(selected);
    };

    useEffect(() => {
        const DisneyData = async () => {
            const response = await api.get('/characters');
            const data = await response.data.data;
            setData(data);    
        }
        DisneyData();
    }, [])

    return (
        <main className="bg-backgroundDisney bg-no-repeat bg-cover h-screen font-fontePadrao max-laptop:h-[84rem] max-414px:h-full max-770px:h-[106rem]">
            <div className="flex items-center flex-col max-w-[1140px] m-auto">
            <Header />
                    <input onChange={(e) => {
                    setSearchTerm(e.target.value);
                    handlePageChange({ selected: 0 });
                }} 
                    type="text" 
                    className="flex items-center border border-gray-600 h-10 w-3/5 p-3 mt-8 bg-neutral-100 rounded-md outline-none placeholder:text-gray-500" 
                    placeholder="Filtrar Personagem" 
                />
                <ModalCharacters data={data} searchTerm={searchTerm} pageNumber={pageNumber} handlePageChange={handlePageChange} />
            </div>
        </main>
    )
}