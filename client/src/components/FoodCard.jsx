import { connect } from "react-redux";
import { getFoodCards } from "../store/actions/index";

export default function FoodCard(props) {
  // Le paso por props un arreglo con las recetas a mostrar
  console.log(props);
  //   props.getFoodCards();
  return (
    <div>
      {props.foodCard?.map((food) => {
        return (
          <div>
            <p>{food.title}</p>
            <img src={food.image} />
          </div>
        );
      })}
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     foodCard: state.food,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getFoodCards: () => dispatch(getFoodCards()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(FoodCard);

// export default connect(mapStateToProps)(FoodCard);
