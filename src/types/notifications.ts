export type Notifications = {
  id: string;
  address: Address;
  notifications: boolean;
};

export type Address = {
  city: string;
  district: string;
  street: string;
  house: string;
  korpus: string;
  liter: string;
};
