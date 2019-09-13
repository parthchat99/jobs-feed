import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobsFetchService {

    constructor(private http: HttpClient) {
    }

    fetchJobs(url: string) {

        const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8', 'Accept': 'application/json', 'Access-Control-Allow-Origin': '*' }); // create header object

        // return this.http.get(url,{headers: headers});
        return this.http.get(url);
    }

}
