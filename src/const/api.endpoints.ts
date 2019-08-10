import { AppGlobals } from './app.global';

export const ApiEndPoints=Object.freeze({
    addAuthor:AppGlobals.AppHost+"api/Author/SaveAuthor",
    addGenre:AppGlobals.AppHost+"api/Genre/SaveGenre",
})