import { useEffect, useState } from "react";
import { apiFetch } from "../api/api-fetch";
import { normalizeEvolutionChain } from "../api/formatData";

function useEvolution(id){
    const[evolution,setEvolution] = useState([])
    const getEvolutionChain = async (id) =>{
        
        try{
            const { evolution_chain } = await apiFetch(`pokemon-species/${id}`);
            const res = await fetch(evolution_chain.url);
            const { chain } = await res.json();
            setEvolution(normalizeEvolutionChain(chain));
            
        }catch(error){
            if(error.status === 404){
                return []
            }
            throw error
        }
        
    } 
    useEffect(()=>{
        getEvolutionChain(id)
    },[id])
    return evolution
};

export default useEvolution;

