interface AddressBaseline {
    addressee: string;
    town: string;
    county: string;
    postcode: string;
}
export interface AddressDTO extends AddressBaseline {
    street1: string;
    street2: string;
}

export interface AddressUI extends AddressBaseline {
    streetLineOne: string;
    streetLineTwo: string;
}

export interface Address extends AddressDTO {
    addressId: string;
}

export class AddressApiMapper {
    static apiMap(data: any): AddressDTO {
        return {
            addressee: data.addressee,
            street1: data.streetLineOne,
            street2: data.streetLineTwo ? data.streetLineTwo : '',
            town: data.town,
            county: data.county,
            postcode: data.postcode
        }
    }
}

export class AddressMapper {
    static map(data: any): AddressUI {
        return {
            addressee: data.addressee,
            streetLineOne: data.street1,
            streetLineTwo: data.street2 ? data.street2 : '',
            town: data.town,
            county: data.county,
            postcode: data.postcode
        }
    }
}