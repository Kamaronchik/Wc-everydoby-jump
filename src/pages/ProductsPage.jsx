import { Link } from "react-router-dom";
import data from "../data/product";

const ProductsPage = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <h2 className="mb-10 text-center text-4xl font-bold">
        Products
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {data.products.map((product) => (
          <div
            key={product.id}
            className="w-80 overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-2 hover:shadow-xl"
          >
            <img
              src={product.img}
              alt={product.name}
              className="h-60 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-2xl font-bold">{product.name}</h3>

              <p className="mt-2 text-gray-500">{product.brand}</p>

              <p className="mt-4 text-2xl font-bold text-indigo-600">
                ${product.price}
              </p>

              <Link
                to={`/products/${product.id}`}
                className="mt-5 inline-block rounded-lg bg-indigo-600 px-5 py-2 text-white transition hover:bg-indigo-700"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;