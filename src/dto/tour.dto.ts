export interface ITour {
  id: number;
  tripTitle: string;
  country: string;
  accommodation: string;
  eat: string;
  startDateTrip: Date;
  endDateTrip: Date;
  price: Number;
  quota: Number;
  description: String;
  tourImage: ITourImage[];
}

export interface ITourImage {
  id: Number;
  url: String;
}
