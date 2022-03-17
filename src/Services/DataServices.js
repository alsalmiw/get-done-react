async function createAccount(createdUser){

    let res= await fetch('https://task-tracker-web-app.azurewebsites.net/user/AddUser', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(createdUser)
    });
    if(!res.ok)
    {
        const message = `An Error has Occured ${res.status}`
        throw new Error (message)
    }
    let data = await res.json();
    console.log(data);
   return data;
   
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

async function createProject(newProject){

    let res= await fetch('https://task-tracker-web-app.azurewebsites.net/project/createproject', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newProject)
    });
    if(!res.ok)
    {
        const message = `An Error has Occured ${res.status}`
        throw new Error (message)
    }
    let data = await res.json();
    console.log(data);
    return data;
}

async function getProjectItemsByUserId(userId)
{
    let result = await fetch(`https://task-tracker-web-app.azurewebsites.net/project/GetProjectByUserId/${userId}`);
    let data = await result.json();
    console.log(data)
    return data;
}

async function getAllProjects()
{
    let result = await fetch(`https://task-tracker-web-app.azurewebsites.net/project/getallprojects`);
    let data = await result.json();
    console.log(data)
    return data;
}

async function updateProjectDetails(updatedProject)
{
    let res= await fetch('https://task-tracker-web-app.azurewebsites.net/project/createproject', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedProject)
    });
    if(!res.ok)
    {
        const message = `An Error has Occured ${res.status}`
        throw new Error (message)
    }
    let data = await res.json();
    console.log(data);
    return data;
}

async function GetLoggedInUserData(username)
{
    let result = await fetch(`https://task-tracker-web-app.azurewebsites.net/user/GetUserByUsername/${username}`);
    let data = await result.json();
   let userData = data;
   //save information into a provider
   console.log(userData);
   return userData;
}

async function GetAllUsersInfo()
{
    let result = await fetch(`https://task-tracker-web-app.azurewebsites.net/user/GetAllUsers`);
    let data = await result.json();
   let userData = data;
   //save information into a provider
   console.log(userData);
   return userData;
}

async function DeleteUser(userToDelete)
{
    let res = await fetch(`https://task-tracker-web-app.azurewebsites.net/user/DeleteUser/${userToDelete}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userToDelete)
    });
    if(!res.ok)
    {
        const message = `An Error has Occured ${res.status}`
        throw new Error (message)
    }
    let data = await res.json();
    console.log(data);
    return data;
}

async function ChangeRole(Username)
{
    let res = await fetch(`https://task-tracker-web-app.azurewebsites.net/user/UpdateUserRole/${Username}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(Username)
    });
    if(!res.ok)
    {
        const message = `An Error has Occured ${res.status}`
        throw new Error (message)
    }
    let data = await res.json();
    console.log(data);
    return data;
}

async function ChangeRevokeUserAccess(id)
{
    let res = await fetch(`https://task-tracker-web-app.azurewebsites.net/user/ChangeRevokeUserAccess/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(id)
    });
    if(!res.ok)
    {
        const message = `An Error has Occured ${res.status}`
        throw new Error (message)
    }
    let data = await res.json();
    console.log(data);
    return data;
}

export { login, getProjectItemsByUserId, createAccount, createProject, updateProjectDetails, getAllProjects, GetLoggedInUserData, GetAllUsersInfo, DeleteUser, ChangeRole, ChangeRevokeUserAccess }