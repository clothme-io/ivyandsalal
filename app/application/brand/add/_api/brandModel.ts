export interface BrandModel {
    id: string;
    name: string;
    description: string;
    logo: string;
    brandType: string;
}

export interface AddBrandBasicModel {
    name: string
    description: string,
    contact: BrandContact,
    genderType: string;
    brandType: string,
    vendorId: string,
}

export interface BrandContact {
    firstName: string;
    lastName: string;
    position: string;
    email: string;
    phoneNumber: string;
    isVerified: boolean;
}