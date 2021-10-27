export interface Address {
  street: string;
  suite: string;
  city: string;
  zipCode: string;
  geo: {
    lat: string;
    lng: string;
  };
}
