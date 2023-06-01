import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Busqueda = () => {

    const [idPokemon, setIdPokemon] = useState("");
    const [listaPokemones, setListaPokemones] = useState([]);
    const navigate = useNavigate();

    const getPokemones = async () => {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await res.json();

        let dataSelect = [];
        data.results.map((pokemon) => {
            dataSelect.push({ url: pokemon.url, nombre: pokemon.name });
        });

        setListaPokemones(dataSelect);
        console.log(dataSelect);
    }

    const verDetalle = () => {
       
        let id = idPokemon.replace('https://pokeapi.co/api/v2/pokemon/','');
        id = id.replace('/','');
        console.log(id)
        navigate(`/pokemones/${id}`);
    }

    useEffect(() => {
        getPokemones();
    }, []);


    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>

            <h2 style={{ marginTop: "30px" }}>Selecciona tu personaje</h2>

            <select name="id" id="id"
                style={{ marginTop: "30px" }}
                onChange={(e) => setIdPokemon(e.target.value)} >
                    <option value="">Seleccione</option>
                {
                    listaPokemones.map((p) => <option key={p.url} value={p.url}>{p.nombre}</option>)
                }
            </select>

            <button 
            style={{ backgroundColor: "black", color: "white", marginTop: "30px", borderRadius: "5px" }}
            onClick={(e) => verDetalle()}> Ver Detalle</button>

        </div>
    )
}

export default Busqueda