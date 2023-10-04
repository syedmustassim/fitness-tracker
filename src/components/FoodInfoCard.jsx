import "./FoodInfoCard.css"

const FoodInfoCard = (food) => {
    const {data} = food;
    return(
        <div className="food-card">
            <h2>Name: {data?.foodName}</h2>
            <h3>Calories: {data?.calories}</h3>
            <h3>Carbohydrates: {data?.carbohydrates}</h3>
            <h3>Proteins: {data?.proteins}</h3>
            <h3>Fat: {data?.fat} </h3>
        </div>
    )
}

export default FoodInfoCard