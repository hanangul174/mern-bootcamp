
// import React from 'react'

// export default function Counter() {
//     let [count,set_count]=React.useState(0);
//    let handle_on_add=() =>{
//     set_count(count++)
// };
// let handle_on_subtract=() =>{
//     set_count(count--)
// };

// return(
//     <>
//     <button onClick={handle_on_add}> add </button>
//     <span> {count}</span>
//     <button onClick={handle_on_subtract}> subtract </button>
//     </>
// );
// };



import React from 'react'

export default function Counter() {
    let [count,set_count]=React.useState(0);
    const handle_on_click= (a)=> {
        a.target.value==="add" ? set_count(++count) : set_count(--count);
    }

  return (
     <>
    <button value="add" onClick={handle_on_click} style={{' textAlign:center'}}> add </button>
    <span> {count}</span>
    <button value="sub" onClick={handle_on_click}> subtract </button>
    </>
);
};

