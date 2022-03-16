let userData={};

function checkToken(){
    let result = false;
    let lsData = localStorage.getItem('Token');
    if(lsData && lsData !=null)
    {
       result = true
    }
    return result;
}

async function login(loginUser){

    let res= await fetch('https://task-tracker-web-app.azurewebsites.net/user/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginUser)
    });
    if(!res.ok)
    {
        const message = `An Error has Occured ${res.status}`
        throw new Error (message)
    }
    let data = await res.json();
   return data;

}

async function getProjectItemsByUserId(userId)
{
    let result = await fetch(`http://localhost:5262/Project/getItemsByUserId/${userId}`);
    let data = await result.json();
    return data;
}
async function getDashboardProjects()
{
    let result = await fetch(`http://localhost:5262/Project/getPublishedItems`);
    let data = await result.json();
    return data;
}

export {checkToken, login, getProjectItemsByUserId, getDashboardProjects }