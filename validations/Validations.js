/**
 *  
 * isRequired                   IMPLEMENTED
 * isNumbers
 * isValidEmail                 IMPLEMENTED
 * isCharacters
 * isDateBefore
 * isAtLeastCharacters
 * 
 * 
 */

export const validation={
    isRequired:function(value){
            if (!value){
                return true;
            }
            return false;
    },


    isValidEmail:function(value){
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)){
            return true;
        }
        return false;  
    }






}