import React, { FunctionComponent } from 'react';
import { priceFormatter } from '../../../helpers/priceFormatter';

interface CarPriceProps {
  price: number;
}

type Props = CarPriceProps;

const CarPrice: FunctionComponent<Props> = ({ price }): JSX.Element => {
  return <span>{priceFormatter.format(price)}</span>;
};

export default CarPrice;
