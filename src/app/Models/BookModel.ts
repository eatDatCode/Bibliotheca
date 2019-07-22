import { GenreModel } from "./GenreModel"

export class BookModel{
    isbn:string;
    title :string;
    price: number;
    writtenBy :number;
    genre: GenreModel;
    language: string;
    publisher:string;
    pageNo:number;
    firstPublish:Date;
    bookCover :string;
}