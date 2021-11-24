import Pagination from '../components/Pagination';
import Products from '../components/Products';

export default function OrderPage() {
  return (
    <div>
      <Pagination page={11} />
      <Products />
      <Pagination page={1} />
    </div>
  );
}
