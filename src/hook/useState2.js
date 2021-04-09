function useState2(param) {
    function setMyState(newParam){
       initValue.modified = newParam;
       return initValue;
    }
   var initValue = param;
    return [initValue,setMyState];
}