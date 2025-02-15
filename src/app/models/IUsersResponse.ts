import {IUser} from "@/app/models/IUser";

export interface IUsersResponse {
    users: IUser[];
    total: number;
    skip: number;
    limit: number;
}