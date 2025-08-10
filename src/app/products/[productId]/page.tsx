import { Metadata } from "next";
 type props = {
 params:{productId:string};
 };
 export const generateMetadata = async({params} :props) => {
    const Id = (await params.productId);
    const title = await new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            resolve(`Product Details for ${Id}`);
        }, 1000);
    });
    return {
        title: `Product Details for ${Id}`,
        description: `Product Details for ${Id}`,
    };  
 };
export default async function ProductDetails({params}:props){
    const productId = (await params.productId);
    return <h1>
        Product Details Page for {productId}
    </h1>
}