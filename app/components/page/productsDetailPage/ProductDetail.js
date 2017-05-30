/**
 * Created by YUN on 26/05/2017.
 */
import React from 'react';

import PremiumInfantFormula from'./premiumInfantFormula/PremiumInfantFormula';
import PremiumFollowOnFormula from './premiumFollowOnFormula/PremiumFollowOnFormula';
import PremiumToddlerNutritious from'./premiumToddlerNutritious/PremiumToddlerNutritious';
import InstantFullCreamMilkPowder from './instantFullCreamMilkPowder/InstantFullCreamMilkPowder';
import NutritionalFormulaChildren from './nutritionalFormulaChildren/NutritionalFormulaChildren';
import NutritionalFormulaPregnant  from './nutritionalFormulaPregnant/NutritionalFormulaPregnant';
import NutritionalFormulaElderly from'./nutritionalFormulaElderly/NutritionalFormulaElderly';


class ProductDetail extends React.Component {
    
    render() {
        const productId = this.props.match.params.id;
        return (
            <div>
                <h1>This Product Detail</h1>
                {productId == 1 &&
                    <PremiumInfantFormula/>
                }
                {productId == 2 &&
                <PremiumFollowOnFormula/>
                }

                {productId == 3 &&
                <PremiumToddlerNutritious/>
                }
                {productId == 4 &&
                <InstantFullCreamMilkPowder/>
                }
                {productId == 5 &&
                <NutritionalFormulaChildren/>
                }
                {productId == 6 &&
                <NutritionalFormulaPregnant/>
                }

                {productId == 7 &&
                <NutritionalFormulaElderly/>
                }


            </div>
        )
    }
}


export default ProductDetail;