export class Series {
    // Propiedad de la clase Series
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    webpage: string;
    poster: string;

    // Constructor para inicializar propiedad de la clase Series
    constructor(id: number, name: string, channel: string, seasons: number, description: string, webpage: string, poster: string) {
        this.id = id
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.webpage = webpage;
        this.poster = poster;
    }
}