import React, { useEffect, useState } from "react";
import './Home.css';

const Home = () => {
    let [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(x => setData(x))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div id="homediv">
            {data.map((x) => {
                return (
                    <div id="card">
                    <div key={x.id} >
                        <img id="cardimage" src={x.image} alt="product" />
                        <h4>{x.title}</h4>
                        <h3>${x.price}</h3>
                        <h3>{x.rating.rate}⭐</h3>
                    </div>
                    <div id="addbuy">
                        <div id="add">ADD</div>
                        <div id="buy">BUY</div>
                    </div>
                    
                    </div>
                );
            })}
        </div>
    );
};

export default Home;
















// import React, { useEffect, useState } from "react";
// import './Home.css';

// const Home = () => {
//     let [data, setData] = useState([]);

//     useEffect(() => {
//         fetch("https://fakestoreapi.com/products")
//             .then(response => response.json())
//             .then(x => setData(data))
//             .catch(error => console.error("Error fetching data:", error));
//     }, []);

//     console.log(data);

//     return (
//         <div id="homediv">
//             {data.map((x) => {
//                 return(
//                     <div key={x.id} id="card">
//                     <img id="cardimage" src={x.image} alt="product" />
//                     <h4>{x.title}</h4>
//                     <h3>${x.price}</h3>
//                     <p>{x.description}</p>
//                     <h3>{x.rating.rate}⭐</h3> {/* Access the nested rating object */}
//                 </div>
//                 )
//             })}
//         </div>
//     );
// };

// export default Home;












// import React, { useEffect, useState } from "react";
// import './Home.css'
// const Home =()=>{
//     let[data,setdata]=useState([])
//     useEffect(()=>{
//         let api=fetch("https://fakestoreapi.com/products").then(x=>x.json()).then(x=>setdata(x))
//     },[])
//     console.log(data);
    
//     return(

//         <div id="homediv">
//             {data.map(x=>{
//                 <div id="card">
//                 <img src={x.image} alt="image" />
//                 <h4>{x.title}</h4>
//                 <h3>{x.price}</h3>
//                 <p>{x.description}</p>
//                 <h3>{x.rate}⭐</h3>

//             </div>
//             })}
//         </div>
//     )
// }
// export default Home