export class BlogDTO {
    id : number |undefined;
    title:string|undefined;
    article:string|undefined;
    date:Date|undefined;
    status:string|undefined;
    publshier:string|undefined;

    constructor(id?: number, title?: string, article?: string, date?: Date, status?: string) {
        this.id = id;
        this.title = title;
        this.article = article;
        this.date = date;
        this.status = status;
        this.publshier = "Chat GPT"
    }
}