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
    alert('This app is already installed');
   }
   else{
    storedAppData.push(id);
    const appData = JSON.stringify(storedAppData);
    localStorage.setItem('install', appData);
   }
   
}
export {getApp};
export {addApp};