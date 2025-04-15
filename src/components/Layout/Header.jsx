import foodTable from '../../assets/foodtable.jpg'
import classcss from "./header.module.css";
import Button from './Button';

const Header=(props)=>{

    return<>
<header className={classcss.header}>
    <h1>Food meals</h1>
   <Button/>
</header>
<div className={classcss['main-imge']}>
    <img src={foodTable} alt="Food table" />
</div>
    </>
};
export default Header;
// const Header=(props)=>{

//     return  <>
//     <header className={classes.Header}>
//  <h1>       Food meals</h1>
//         <button>
//             Cart
//         </button>
//     </header>
//     <div className={classes['main-image']}>
//         <img src={foodTeble} alt='Teble full of food'/>
//     </div>
    
//     </>
// };
// export default Header;

