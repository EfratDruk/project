import { Adjustment } from "./adjustment"

export interface Matchmaker{
     id:number,
     name:string ,
     password: string ,
     email:string ,
     phone:string ,
     requirements: Adjustment[],
    
}