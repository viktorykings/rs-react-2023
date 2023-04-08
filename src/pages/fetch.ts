const fetchCards = async(name: string, id?: string) => {
    let res = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
    if(id) res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    if(!res.ok){
        const message = 'Failed to fetch'
        throw new Error(message)
    }
    const data = await res.json();
    return data;
}
export default fetchCards;