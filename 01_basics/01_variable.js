const accountId=144535
let accountEmail="kanhaiya@chrome.com"
var accountPassword="12456"
accountCity="Mumbai" //Not good practice
let accountState;// default value is undefined.

//accountId=24321  //Not allowed as it is constant

//Do not use var keyword for creating variables as it has scope problem which means variable of same name leads to misconfusion.
 accountEmail="abc@222.com"
 console.table([accountId,accountEmail,accountPassword,accountState,accountCity])