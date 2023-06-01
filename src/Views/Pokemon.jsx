import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Pokemon = () => {

    const [pokemon, setPokemon] = useState({});
    const [cargando, setCargando] = useState(true);

    const { id } = useParams();

    
    const getDetallePokemon = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json();

        setPokemon(data);
        setCargando(false);
    }

    
    useEffect(() => {
        getDetallePokemon();

    }, [])


    return (
cargando ?
<h1>Cargando datos...</h1> :

        <div style={{display:"flex", justifyContent:"center", marginTop:"30px"}}>
            <img src={pokemon.sprites.front_default} alt="imagen pokemon" style={{height:"300px"}}></img>
            <div>
                <p><h3><strong> {pokemon.name}</strong></h3></p>
                <ul>
                    <li>Hp: {pokemon.stats[0].base_stat} </li>
                    <li>Ataque: {pokemon.stats[1].base_stat}</li>
                    <li>Defensa: {pokemon.stats[2].base_stat} </li>
                    <li>Ataque especial: {pokemon.stats[3].base_stat}</li>
                    <li>Defensa especial: {pokemon.stats[4].base_stat}</li>
                    <li>Velocidad: {pokemon.stats[5].base_stat}</li>
                    <li>Tipo: {pokemon.types[0].type.name}</li>
                </ul>
            </div>

        </div>
    )
}

export default Pokemon