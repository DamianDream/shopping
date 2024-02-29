import { useNavigate, useParams } from 'react-router-dom';
import { useGetProductQuery } from '../../features/api/apiSlice';
import { useEffect } from 'react';
import { ROUTES } from '../../utils/routes';
import Product from './Product';

const SingleProduct = () => {

  const { id } = useParams();
  const { data, isLoading, isFetching } = useGetProductQuery(id);
  const redirect = useNavigate();

  useEffect(() => {
    if (!isFetching && !isLoading && !data) {      
      redirect(ROUTES.HOME);
    }
  }, [isLoading, isFetching, data, redirect]);
  

  return !data ? 
    <section className="preloader">Loading...</section> 
    : (
    <div>
      <Product {...data} />
    </div>
  )
}

export default SingleProduct
