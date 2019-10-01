const initState = {
    posts: [
        {id: '1', title: 'Bulbasaur', body: 'Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun\'s rays, the seed grows progressively larger.'},
        {id: '2', title: 'Charmander', body: 'The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.'},
        {id: '3', title: 'Squirtle', body: 'Squirtle\'s shell is not merely used for protection. The shell\'s rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.'}
    ]
}

const rootReducer = (state = initState,action) => {
    return state;
}

export default rootReducer