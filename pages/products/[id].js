import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Detail.module.css"


export async function getStaticPaths() {
    const res = await fetch("https://dummyjson.com/products?limit=12");
    const data = await res.json();
    const paths = data.products.map((item) => {
        return{
            params:{id:String(item.id)}
        }
    })
    // console.log(paths)
    return{
        paths,
        fallback:false
    } 
}

export async function getStaticProps({params}) {
    const  id = params.id
    const res = await fetch("https://dummyjson.com/products/"+id);
    const data = await res.json();
    console.log(data);
    return {
      props: {
        products: data
      },
    };
}

export default function ProductDetail({products}) {

    return(
        <>
            <Head>
                <title>{products.title}</title>
            </Head>
            <div className={styles.container}>
                <div>
                    <Image src={products.thumbnail} width={300} height={300} />
                </div>
                <div className={styles.detail}>
                    <h1>Name :{products.title}</h1>
                    <h1>Price :{products.price}</h1>
                    <h1>Category :{products.category}</h1>
                    <h1>Brand :{products.brand}</h1>
                    <h1>Rating :{products.rating}/5</h1>
                    <h4>Infomation : {products.description}</h4>
                </div>
            </div>
        </>
    )
}