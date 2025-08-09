import { Metadata } from "next";
 type props = {
 params:{productId:string};
 };
 export const generateMetadata = async({params} :props) => {
    const productId = (await params.productId);
    return {
        title: `Product Details for ${productId}`,
        description: `Product Details for ${productId}`,
    };  
 };
export default async function ProductDetails({params}:props){
    const productId = (await params.productId);
    return <h1>
        Product Details Page for {productId}
    </h1>
}