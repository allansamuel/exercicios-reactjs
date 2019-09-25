import React from 'react';

const Ninjas = ({ninjas, deleteNinja}) => {
    const ninjaList = ninjas.map(ninja => {
        return ninja.age > 20 ? (
            <div key={ninja.id}>
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
                <button onClick={({/* () => {} faz com que a funçao não seja chamada diretamente, e sim quando o botão é clicado */})=>{deleteNinja(ninja.id)}}>Delete ninja</button>
                <hr/>
                <hr/>
            </div>
        ) : null
    })

    return(
        <div className="ninja-list">
            {ninjaList}
        </div>
    )
}

export default Ninjas