import classesCard from './Card.module.css'
const Card=props=>{
return <>
<div className={classesCard.card}>
    {props.children}
</div>
</>
};
export default Card;