const initState = {
    posts: [
        {id: '1', title: 'Bulbasaur', body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem est itaque ipsam repudiandae odio veritatis nostrum aliquam corrupti quo esse molestiae tempora sit, voluptatem distinctio vitae ab accusamus sequi! Nobis?'},
        {id: '2', title: 'Charmander', body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem est itaque ipsam repudiandae odio veritatis nostrum aliquam corrupti quo esse molestiae tempora sit, voluptatem distinctio vitae ab accusamus sequi! Nobis?'},
        {id: '3', title: 'Squirtle', body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem est itaque ipsam repudiandae odio veritatis nostrum aliquam corrupti quo esse molestiae tempora sit, voluptatem distinctio vitae ab accusamus sequi! Nobis?'}
    ]
}

const rootReducer = (state = initState,action) => {
    return state;
}

export default rootReducer