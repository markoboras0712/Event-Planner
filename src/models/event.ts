export interface Event {
  id?: string;
  title: string;
  image: string;
  address: string;
  description: string;
  isFavorite: boolean;
}

export class Event {
  constructor({ id, title, image, address, description, isFavorite }: Event) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.address = address;
    this.description = description;
    this.isFavorite = isFavorite;
  }
}

export interface AllEvents {
  allMeetups: Event[];
  meetup: Event;
  loading: boolean;
  error: string | unknown;
}
