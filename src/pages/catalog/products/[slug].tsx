import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const AddToCartModal = dynamic(
  () => import('../../../components/AddToCartModal'),
  { loading: () => <p>Carregando ...</p>, ssr: true }
  )

export default function Products() {
  const router = useRouter();
  const [isAddToCartModalVisible, setIsAddToCartModalVisible] = useState(false);

  function handleAddToCart() {
    setIsAddToCartModalVisible(true)
  }

  return(
    <div>
      <h1>{router.query.slug}</h1>

      <button onClick={handleAddToCart}>Add to Cart</button>

      { isAddToCartModalVisible && <AddToCartModal /> }
    </div>
  );
}
