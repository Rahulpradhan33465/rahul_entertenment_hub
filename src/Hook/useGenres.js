 

const useGenres = (selectGenres) => {
    if(selectGenres.length<1)return '';

    const GenerId=selectGenres.map((g)=>g.id);
    return GenerId.reduce((acc,curr)=> acc+','+curr);
}

export default useGenres
