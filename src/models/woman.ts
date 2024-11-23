import { Adjustment } from "./adjustment";
import { Cover, Studies } from "./enums";
import { Her } from "./her";

export interface Woman{
    
   studies:  Studies ,
    occupation: string ,
    cover :Cover ,
    requirements: Adjustment[] ,
    her :Her ,
}