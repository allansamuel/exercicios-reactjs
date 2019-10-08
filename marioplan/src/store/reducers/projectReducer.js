const initState = {
    projects: [
        {id: '1', title: 'grookey', content: 'best one'},
        {id: '2', title: 'sobble', content: 'okay'},
        {id: '3', title: 'scorbunny', content: 'meeh'}
    ]
}
const projectReducer = (state = initState,action) => {
    switch (action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
    }
    return state;
}

export default projectReducer