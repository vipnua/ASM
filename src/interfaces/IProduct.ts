export interface IProduct{
    name :string;
    id :number;
    originalPrice:string;
    sellerPrice:number;
    description: string;
    longDescription:string;
    category:string;
    images:[
        thumbnail:string,
        image:string,
    ];
    rate:number
}