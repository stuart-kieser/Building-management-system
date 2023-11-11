// serivce import
import { Injectable } from "@angular/core";
import { maintenanceComplaints } from 'src/mock-data/maintenancelist';
import { roomsList } from 'src/mock-data/roomlist';
import { tenantList } from 'src/mock-data/tenantlist';
import { Tenant } from "../components/tenant/tenant";
// Now you can use maintenancelist, roomlist, and tenantlist in this file

@Injectable({
    providedIn: 'root',
})

export class DataService {
    // the data service class will be specifically for fetching/sending data to and from apis
    // CRUD service == Data service?
    // fetch data from an api endpoint
    user: Tenant[] = [];

    fetchmaintenanceData(data: any) {
        console.log("RESPONSE 200");
        return maintenanceComplaints;
    }

    fetchroomsList(data: any) {
        console.log("RESPONSE 200");
        return roomsList;
    }

    fetchtenantList(data: any) {
        console.log("RESPONSE 200");
        return tenantList;
    }

    // put data to an api endpoint
    putMaintenance(data: any) {
        // input into db
        maintenanceComplaints.push(data);
    }

    // put data to an api endpoint
    putTenant(data: any) {
        // input into db
        // this component for hared service
        console.log(data, "put");
        this.user.push(data);
        //tenantList.push(data);
    }

    // put data to an api endpoint
    putRoom(data: any) {
        // input into db
        roomsList.push(data);
    }

    // retrive user from shared service
    getTenant(user: any) {
        return user;
    }




}