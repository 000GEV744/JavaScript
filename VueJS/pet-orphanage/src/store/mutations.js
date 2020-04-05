export default{
    appendPet:(state, {species, pet}) => {
        state[species].push(pet)
        alert("pet Added!")
    }
}