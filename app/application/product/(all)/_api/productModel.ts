export interface ProductPrice {
    amount: number;
    currency: string
}


export interface ProductModel {
    id: string;
    name: string;
    description: string;
    images: string[];
    type: string; // shirt, pant
    isRack: boolean;
    category: ProductCategory;
    careInformation: string;
    color: string[];
    material: string[];
    quantity: number;
    price: ProductPrice;
    tax: ProductPrice;
    isPublished: boolean;
    isPaused: boolean;
    fitType: string;
    style: string;
    refundPolicy: string;
    returnPolicy: string;
    userFitCount: number;
    averageReviewCount: number;
    createdAt: string;
    updatedAt: string
}

export interface ProductBasicInfo {
    name: string;
    description: string;
    quantity: number;
    price: ProductPrice;
    tax: ProductPrice;
    isPublished: boolean;
    isPaused: boolean;
    type: string; // shirt, pant
    isRack: boolean;
}

export interface ProductVisuals {
    images: string[];
}

export interface ProductPrice {
    amount: number;
    currency: string
}
export interface ProductCategory {

}

export interface ProductLocation {

}

export interface ProductReview {

}

export interface TopMeasurement {

}

export interface BottomMeasurement {

}