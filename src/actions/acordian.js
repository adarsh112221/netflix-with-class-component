import { SHOW_BODY } from "./actionType";

export  function showbody(val,id)
{
    return{
        type:SHOW_BODY,
        val,
        id
    }
}