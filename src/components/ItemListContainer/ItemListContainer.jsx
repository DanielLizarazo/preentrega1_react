const categories = [
    {
        "id": 1,
        "nombre": "ALOCASIA CUPRE",
        "precio": 100,
        "imagen": "https://www.mygarden.com.co/wp-content/uploads/2020/05/PLANTA-ALOCACIA-CUPREA-.jpg",
        "cantidad": 1,
        "categoria": "calathea",
        "stock": true
    },
    {
        "id": 2,
        "nombre": "ANTURIO HOLANDES",
        "precio": 100,
        "imagen": "https://www.mygarden.com.co/wp-content/uploads/2020/05/PLANTA-ANTURIO-ANARANJADO.jpg",
        "cantidad": 1,
        "categoria": "flor",
        "stock": true
    },
    {
        "id": 3,
        "nombre": "HIERBABUENA",
        "precio": 100,
        "imagen": "https://www.mygarden.com.co/wp-content/uploads/2020/01/HIERBABUENA.png",
        "cantidad": 1,
        "categoria": "aromaticas",
        "stock": true
    }
]

function ItemListContainer({ greetings }) {

    return (
        <>
            <h2>{greetings}</h2>

            {categories.map(category =>(

            <div key={category.id} className="card" style={{width: '18rem'}}>
                <img src={category.imagen} class="card-img-top" alt={category.name}/>
                    <div className="card-body">
                        <p className="card-text">{category.categoria}</p>
                    </div>
            </div>
            ))}

        </>

    )
}

export default ItemListContainer