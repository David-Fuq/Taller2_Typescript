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

//     //Getters and Setters

//     getId(): number {
//         return this.id;
//     }
//     setId(id: number) {
//         this.id = id;
//     }
//     getName(): string {
//         return this.name;
//     }
//     setName(name: string) {
//         this.name = name;
//     }
//     getChannel(): string {
//         return this.channel;
//     }
//     setChannel(channel: string) {
//         this.channel = channel;
//     }
//     getSeasons(): number {
//         return this.seasons;
//     }
//     setSeasons(seasons: number) {
//         this.seasons = seasons;
//     }
//     getDescription(): string {
//         return this.description;
//     }
//     setDescription(description: string) {
//         this.description = description;
//     }
//     getUrl(): string {
//         return this.url;
//     }
//     setUrl(url: string) {
//         this.url = url;
//     }
//     getImage(): string {
//         return this.image;
//     }
//     setImage(image: string) {
//         this.image = image;
//     }
}
