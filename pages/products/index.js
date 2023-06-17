import Head from "next/head";

export async function getStaticProps() {
  try {
    const res = await fetch("https://dummyjson.com/products?limit=12");
    const data = await res.json();
    console.log(data);
    return {
      props: {
        products: data.product || null,
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      props: {
        products: null,
      },
    };
  }
}

export default function ProductsPage({ products }) {
  return (
    <>
      <Head>
        <title>Product | All products</title>
        <meta name="keywords" content="domain, product, game product" />
      </Head>
      <h1>All products are available</h1>
    </>
  );
}
