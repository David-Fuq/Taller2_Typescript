var Serie = /** @class */ (function () {
    function Serie(id, title, studio, seasons, description, url, image) {
        this.id = id;
        this.name = title;
        this.channel = studio;
        this.seasons = seasons;
        this.description = description;
        this.url = url;
        this.image = image;
    }
    return Serie;
}());
export { Serie };
