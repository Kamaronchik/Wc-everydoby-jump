import { Link, useParams } from "react-router-dom";
import data from "../data/product";

const ProductPage = () => {
  const { productId } = useParams();

  const product = data.products.find(
    (item) => item.id === Number(productId)
  );

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold mb-6">Product Not Found</h2>

        <Link
          to="/products"
          className="rounded-lg bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl rounded-2xl bg-white p-8 shadow-lg">
      <div className="grid gap-10 md:grid-cols-2">
        <img
          src={product.img}
          alt={product.name}
          className="h-96 w-full rounded-xl object-cover"
        />

        <div>
          <h1 className="text-4xl font-bold">{product.name}</h1>

          <p className="mt-2 text-gray-500">{product.brand}</p>

          <p className="mt-6 text-3xl font-bold text-indigo-600">
            ${product.price}
          </p>

          <p className="mt-4">
            <span className="font-semibold">Category:</span>{" "}
            {product.category}
          </p>

          <p className="mt-2">
            <span className="font-semibold">Color:</span>{" "}
            {product.color}
          </p>

          <p className="mt-2">
            <span className="font-semibold">Rating:</span>{" "}
            ⭐ {product.rating}
          </p>

          <p className="mt-2">
            <span className="font-semibold">Stock:</span>{" "}
            {product.stock}
          </p>

          <p className="mt-6 text-gray-700">
            {product.description}
          </p>

          <Link
            to="/products"
            className="mt-8 inline-block rounded-lg bg-indigo-600 px-6 py-3 text-white transition hover:bg-indigo-700"
          >
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;