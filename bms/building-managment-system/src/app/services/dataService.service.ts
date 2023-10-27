// serivce import
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class DataService {
    // the data service class will be specifically for fetching/sending data to and from apis
    // CRUD service == Data service?

    // fetch data from an api endpoint
    fetchData(data: any) {
        return data;
    }
    // put data to an api endpoint
    putData(data: any) {
        return data
    }






}