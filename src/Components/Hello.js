import React from "react";

const Hello = () => {
    // return (
    //     <div className='dummyClass'>
    //         <h1>Hello JSX!</h1>
    //     </div>
    // )
    // The above version is JSX

    return React.createElement('div', {id: 'hello', className: 'dummyClass'}, React.createElement('h1', null, 'Hello HTML'));

}

export default Hello;