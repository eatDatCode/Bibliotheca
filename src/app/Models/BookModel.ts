import { DimensionModel } from '../indexModel';


export class BookModel{
    name:string;
    ISBN:string;
    Author:number;
    publisher:string;
    pageNo:number;
    dimension:DimensionModel;
    FirstPublish:Date;
    Genre:number;
    Path:string;
}