export interface IProduct{
    name :string;
    id :number;
    originalPrice:string;
    description: string;
    category:string;
    images:[
        thumbnail:string,
        image:string,
    ];
}