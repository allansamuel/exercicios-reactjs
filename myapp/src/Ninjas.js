import React from 'react';

const Ninjas = ({ninjas/*,age, shopping */}) => {

    // /* const { ninjas } = props; */
    // const ninjaList = ninjas.map(ninja => {
    //     if(ninja.age > 20){
    //         return(
    //             <div key={ninja.id}>
    //                 <div>Name: {ninja.name}</div>
    //                 <div>Age: {ninja.age}</div>
    //                 <div>Belt: {ninja.belt}</div>
    //                 <hr/>
    //                 <hr/>
    //             </div>
    //         )
    //     }else{
    //         return null
    //     }
    // })
    // /* isso é igual ao de baixo */

    const ninjaList = ninjas.map(ninja => {
        return ninja.age > 20 ? (
            <div key={ninja.id}>
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
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