import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CreateUserDto, UpdateUserDto, UserDto } from "../models/user";

const baseUrl: string = 'http://localhost:3000/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
    constructor(private http: HttpClient) {}


    public create(user: CreateUserDto): Observable<UserDto> {
        return this.http.post<UserDto>(baseUrl, user);
    }


    public findAll(): Observable<UserDto[]> {
        return this.http.get<UserDto[]>(baseUrl.concat('/list'));
    }


    public findOneById(id: string): Observable<UserDto> {
        return this.http.get<UserDto>(baseUrl.concat('/', id));
    }


    public findOneByEmail(email: string): Observable<UserDto> {
        return this.http.get<UserDto>(baseUrl.concat('/email/', email));
    }


    public update(id: string, user: UpdateUserDto): Observable<UserDto> {
        return this.http.patch<UserDto>(baseUrl.concat('/', id), user);
    }


    public delete(id: string): Observable<string> {
        return this.http.delete<string>(baseUrl.concat('/', id));
    }
}
