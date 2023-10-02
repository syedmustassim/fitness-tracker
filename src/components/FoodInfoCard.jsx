const FoodInfoCard = (data) => {
    const {food} = data;
    return(
        <div>
            <h2>Name: {food.foodName}</h2>
            <h3>Calories: {food.calories}</h3>
            <h3>Carbohydrates: {food.carbohydrates}</h3>
            <h3>Proteins: {food.proteins}</h3>
            <h3>Fat: {food.fat} </h3>
        </div>
    )
}

export default FoodInfoCard