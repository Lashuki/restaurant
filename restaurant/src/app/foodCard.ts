


// აქ foodCard-ი გაგვაქვს app კომპონენტში რომ შემდეგ მივწვდეთ ნებისმიერი კომპონეტიდან, ამისთვის მკაცრად ვუწერთ ტიპებს 
export interface foodCard {
    name: string,
    imgSrc: string,
    peppery: string,
    nut: boolean,
    veg: boolean,
    rate: number,
    com: string,
    sale: boolean,
    price: number,
    hot: boolean,
    cold: boolean,
    jucy: boolean,
    salad: boolean,
    beef: boolean,
    pig: boolean,
    currency?: string,
    id: number
}

