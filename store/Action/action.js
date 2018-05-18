export function Department() {

    return dispatch => {
        

 return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApigetDepartments')
        .then((response) => response.json())
     .then((responseJson) => {
    //    console.log("action Dapartment data",responseJson);
       var Departmentdata=JSON.parse(responseJson.d);
    
//        console.log(b.length)
// console.log("b",b);
           dispatch({ type: "DEPARTMENTS", payload:Departmentdata })
  })
  .catch((error) => {
       console.error(error);
     });
}}

export function getCustomerType() {

    return dispatch => {
      

 return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApigetCustomerType')
        .then((response) => response.json())
     .then((responseJson) => {
    //    console.log("action getcustomer data",responseJson);
       var getCustomerType=JSON.parse(responseJson.d);
//        console.log(b.length)
// console.log("b",b);
           dispatch({ type: "CUSTOMERTYPE", payload:getCustomerType })
  })
     .catch((error) => {
       console.error(error);
     });
}}








export function getPriority() {

  return dispatch => {
    

return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApigetPriority')
      .then((response) => response.json())
   .then((responseJson) => {
  //    console.log("action getcustomer data",responseJson);
     var priority=JSON.parse(responseJson.d);
//        console.log(b.length)
// console.log("b",b);
         dispatch({ type: "PRIORITY", payload:priority })
})
   .catch((error) => {
     console.error(error);
   });
}}



export function getInitiotor() {

  return dispatch => {
    

return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApigetInitiator')
      .then((response) => response.json())
   .then((responseJson) => {
     console.log("action getcustomer data",responseJson);
     var init=JSON.parse(responseJson.d);
//        console.log(b.length)
console.log("action initiator",init);
         dispatch({ type: "INITIATOR", payload:init })
})
   .catch((error) => {
     console.error(error);
   });
}}

export function getProduct() {

  return dispatch => {
    

return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApigetProduct')
      .then((response) => response.json())
   .then((responseJson) => {
     console.log("action getproduct data",responseJson);
     var pro=JSON.parse(responseJson.d);
//        console.log(b.length)
console.log("action Prod",pro);
         dispatch({ type: "PRODUCT", payload:pro })
})
   .catch((error) => {
     console.error(error);
   });
}}

export function getRequesttype() {

  return dispatch => {
    

return fetch('http://192.168.61.33:5001/wcf/TicketService.svc/ApigetRequestType')
      .then((response) => response.json())
   .then((responseJson) => {
     console.log("action getrequest type data",responseJson);
     var req=JSON.parse(responseJson.d);
//        console.log(b.length)
console.log("action Request data",req);
         dispatch({ type: "REQUESTTYPE", payload:req })
})
   .catch((error) => {
     console.error(error);
   });
}}