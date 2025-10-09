import { toast } from "react-toastify";

const getApp = () =>{
   const appStore = localStorage.getItem('install');
   if(appStore){
    const storedApp = JSON.parse(appStore);
    return storedApp;
   }
   else{
    return [];
   }
}

const addApp = (id) =>{
   const storedAppData = getApp();
   if(storedAppData.includes(id)){
    alert('This App is Already Installed');
   }
   else{
    storedAppData.push(id);
    const appData = JSON.stringify(storedAppData);
    localStorage.setItem('install', appData);
   }
   
}

const removeApp = (id) =>{
   const storedApp = getApp();
   const updateApp = storedApp.filter(appId => parseInt(appId) !== parseInt(id));
   localStorage.setItem('install', JSON.stringify(updateApp));
}

export {getApp};
export {addApp};
export {removeApp};