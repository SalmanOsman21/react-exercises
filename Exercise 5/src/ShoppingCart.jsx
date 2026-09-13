
import { useState } from "react";

const ShppingCart = () => {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState('');
    const [price, setPrice] = useState('');

    const handleProductAdd = () => {
      if(product.trim() !== '' && price.trim() !== ''){
          const newProduct = {
            id: crypto.randomUUID(),
            name: product.trim(),
            price: parseFloat(price),
            quantity: 1,
        };
        setProducts([...products, newProduct]);
        setProduct('');
        setPrice('')
      }
    }

    const increase = (id) => {
        const updatedProducts = products.map((product) =>
            product.id === id ? { ...product, quantity: product.quantity + 1}
            : product );
         setProducts(updatedProducts)
    };
     const decrease = (id) => {
        const updatedProducts = products.map((product) =>
            product.id === id && product.quantity > 1 ? { ...product, quantity: product.quantity-1} : product
    );
    setProducts(updatedProducts);
    };
  const remove = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

    const totalPrice = products.reduce((total, product) => total + product.price * product.quantity,0);

    return(
        <>
        <div>
        <h2>Shopping Cart</h2>
        <h4>Add A Product</h4>
        <input type="text" placeholder="Product Name"
        value={product} onChange={(e)=>setProduct(e.target.value)}
        />
        <input type="number" placeholder="Price"
        value={price} onChange={(e)=>setPrice(e.target.value)}
        />
        <button onClick={handleProductAdd}>Add To Cart</button>
        </div>
        {products.length > 0 ? (
            <div>
               <h4>Products In Cart</h4>

                <ul>
                    {products.map((product)=>(
                        <li key={product.id}><span>{product.name}</span>-${product.price.toFixed(2)}
                        <div>
                            Quantity:
                            <button onClick={()=>decrease(product.id)}>-</button>
                            {product.quantity}
                            <button onClick={()=>increase(product.id)}>+</button>
                            <button onClick={()=>remove(product.id)}>Remove</button>
                        </div>
                        </li>
                    ))}
                </ul>
                <h5>Total Price: ${totalPrice.toFixed(2)}</h5>
            </div>
        ): (
                <h4>Products In Card Is Empty</h4>
        )
        
        }
        </>
    )
}

export default ShppingCart;
