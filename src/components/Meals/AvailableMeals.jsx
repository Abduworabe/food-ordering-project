import calssMele from './AvailableMeals.module.css'
import Card from '../UI/Card';
const DUMMY_MEALS=[
    {
        id:'m1',
        mame:'Sushi',
        description:'Finest fish and veggies',
        price:33.3,
    },
    {
        id:'m2',
        mame:'Sushi',
        description:'Finest fish and veggies',
        price:33.3,
    },
    {
        id:'m3',
        mame:'Sushi',
        description:'Finest fish and veggies',
        price:33.3,
    },
    {
        id:'m4',
        mame:'Sushi',
        description:'Finest fish and veggies',
        price:33.3,
    },
    {
        id:'m5',
        mame:'Sushi',
        description:'Finest fish and veggies',
        price:33.3,
    },
]


const AvailableMeals=()=>{
    const mealsList=DUMMY_MEALS.map((meal)=><li>{meal.name}</li>)
return <>
<section className={calssMele.meals}>
    <Card>
    <ul>
        {mealsList}
    </ul>
    </Card>
</section>
</>
};
export default AvailableMeals;