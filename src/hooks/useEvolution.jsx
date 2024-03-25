import { useEffect, useState } from "react";
import { apiFetch } from "../api/api-fetch";
import { normalizeEvolutionChain } from "../api/formatData";

function useEvolution(id){
    const[evolution,setEvolution] = useState([])
    const[isLoading,setIsLoading] = useState(false)
    const getEvolutionChain = async (id) =>{
        setIsLoading(true)
        try{
            const { evolution_chain } = await apiFetch(`pokemon-species/${id}`);
            const res = await fetch(evolution_chain.url);
            const { chain } = await res.json();
            setEvolution(normalizeEvolutionChain(chain));
            setIsLoading(false)
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
    return {evolution,
            isLoading}
};

export default useEvolution;

