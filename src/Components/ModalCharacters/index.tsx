import React, { useContext, useEffect, useState } from "react";
import '../../../src/modal.css'
import Modal from "react-modal";
import { PropsCardModal, TypeDisney } from "@Types";
import { Cards } from "Components/Cards";
import { AuthContext } from "Helpers/Context/AuthProvider";
import { api } from "Services/api";

Modal.setAppElement("#root");

export function ModalCharacters({ data, searchTerm, pageNumber, handlePageChange }: PropsCardModal) {

  const { valueId } = useContext(AuthContext);  

  const [isOpen, setIsOpen] = useState(false);

  const [characters, setCharacters] = useState({} as TypeDisney);

  async function toggleModal() {
    if(characters !== null) {
      setIsOpen(!isOpen); 
    } else {
      return console.log('error');
    }

  }

  useEffect(() => {
    if(isOpen) {
      api.get(`/characters/${valueId}`)
        .then((response) => {
          setCharacters(response.data)
        })
        .catch(error => console.log(error))
    }
  }, [isOpen])

  return (
    <div>
      <Cards onclick={toggleModal} data={data} searchTerm={searchTerm} pageNumber={pageNumber} handlePageChange={handlePageChange} />
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={200}
      >
        <div className="flex rounded-md bg-gradient-to-r from-stone-900 to-stone-900 cursor-pointer font-fontePadrao max-414px:flex-col">
          <img src={characters.imageUrl} className="h-60 w-64" />
          <div className="p-4">
              <p className="text-white text-base font-bold hover:text-orange-400"><strong>Nome:</strong> {characters.name === undefined ? "Não encontrado" : characters.name}</p>
              <p className="mt-3 text-white text-base font-bold hover:text-orange-400"><strong>Tv's Shows:</strong> {characters.tvShows === undefined ? "Não Encontrado" : characters.tvShows}</p>
              <p className="mt-3 text-white text-base font-bold hover:text-orange-400"><strong>Filmes:</strong> {characters.films === undefined ? "Não encontrado" : characters.films}</p>
              <p className="mt-3 text-white text-base font-bold hover:text-orange-400"><strong>Video Games:</strong> {characters.videoGames === undefined ? "Não Encontrado" : characters.videoGames}</p>
              <p className="mt-3 text-white text-base font-bold hover:text-orange-400"><strong>Inimigos:</strong> {characters.enemies === undefined ? 'Não Encontrado' : characters.enemies}</p>
              <p className="mt-3 text-white text-base font-bold hover:text-orange-400"><strong>Alidados:</strong> {characters.allies === undefined ? 'Não Encontrado' : characters.allies}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}