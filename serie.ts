export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    url: string;
    image: string;

    constructor(id: number, title: string, studio: string, seasons: number, description: string, url: string, image: string) {
        this.id = id;
        this.name = title;
        this.channel = studio;
        this.seasons = seasons;
        this.description = description;
        this.url = url;
        this.image = image;
    }


}
