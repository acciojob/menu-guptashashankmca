import React, { useState } from 'react'
import cards from './cards'

const data = [
    {
        id: 1,
        title:'buttermilk pancakes',
        category:'breakfast',
        price:15.99,
        img:'./images/item-1.jpeg',
        desc:`I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`
    },
    {
        id: 2,
        title:'diner double',
        category:'lunch',
        price:13.99,
        img:'./images/item-2.jpeg',
        desc:`vaporware iPhone mumblecore selvage raw denim slow-carb salvia, banjo tumeric`
    },
    {
        id: 3,
        title:'godzilla milkshake',
        category:'shakes',
        price:6.99,
        img:'./images/item-3.jpeg',
        desc:`ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral`
    },
    {
        id: 4,
        title:'country delight',
        category:'breakfast',
        price:20.99,
        img:'./images/item-4.jpeg',
        desc:`Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut`
    },
    {
        id: 5,
        title:'egg attack',
        category:'lunch',
        price:22.99,
        img:'./images/item-5.jpeg',
        desc:`franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up`
    },
    {
        id: 6,
        title:'oreo dream',
        category:'shakes',
        price:18.99,
        img:'./images/item-6.jpeg',
        desc:`Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`
     },
    {
        id: 7,
        title:'bacon overflow',
        category:'breakfast',
        price:8.99,
        img:'./images/item-7.jpeg',
        desc:`carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird on it`
    },
    {
        id: 8,
        title:'american classic',
        category:'lunch',
        price:12.99,
        img:'./images/item-8.jpeg',
        desc:`on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut`
    },
    {
        id: 9,
        title:'quarantine buddy',
        category:'shakes',
        price:16.99,
        img:'./images/item-9.jpeg',
        desc:`skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing`
    },
]

const App = () => {
   const [menuData, setMenuData] = useState(data)
   const [filterMenuData, setFilterMenuData] = useState(data)
 
  return (
    <div style={{width:"80vw", margin:"auto"}}>
            <h1 style={{margin:"auto", border:"1px solid black", width:"100px"}}>Our Menu</h1>
            <div>
            <button onClick={()=>{
                setFilterMenuData(menuData)
            }}>All</button>

            <button onClick={() =>{
                const nArr = menuData.filter((item)=>{return item.category == "breakfast"})

                setFilterMenuData(nArr)

            }}>Breakfast</button>

            <button onClick={() =>{
                const nArr = menuData.filter((item)=>{return item.category == "Lunch"})

                setFilterMenuData(nArr)}}>Lunch</button>

            <button onClick={() =>{
                const nArr = menuData.filter((item)=>{return item.category == "Shakes"})

                setFilterMenuData(nArr)}}>Shakes</button>

            </div>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", margin}} >
            {menuData.map(()=>{
                return <cards key={itme.id} item={item.title} price={item.price} category={item.category}/>
            })}
        </div>
    </div>
  )
}


export default App