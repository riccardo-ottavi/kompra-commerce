export type User = {
    id: number;
    email: string;
    username: string;
    name: {
        firstname: string;
        lastname: string;
    };
    phone: string;
    address: Address;
};

export type Address = {
    geolocation: {
        lat: string;
        long: string;
    };
    city: string;
    street: string;
    number: number;
    zipcode: string;
};

