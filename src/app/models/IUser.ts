import {IHair} from "@/app/models/IHair";
import {IAddress} from "@/app/models/IAddres";


export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: IHair;
  ip: string;
  address: IAddress;
  macAddress: string;
  university: string;
}