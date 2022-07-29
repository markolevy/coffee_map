import axios from 'axios';
const instance = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export function htmlizeResponse(res) {
    return `<div class="alert alert-secondary mt-2" role="alert"><pre>` + JSON.stringify(res, null, 2) + "</pre></div>";
}

export async function getAllUsers() {
    let resultElement = document.getElementById("getResult");
    resultElement.innerHTML = "";
    try {
        const res = await instance.get("/Users/");
        const result = {
            status: res.status + "-" + res.statusText,
            headers: res.headers,
            data: res.data,
        };
        resultElement.innerHTML = htmlizeResponse(result);
    } catch (err) {
        resultElement.innerHTML = htmlizeResponse(err);
    }
}

export async function getUsersById() {
    let resultElement = document.getElementById("getResult");
    resultElement.innerHTML = "";
    const id = document.getElementById("get-id").value;
    if (id) {
        try {
            const res = await instance.get(`/Users/${id}`);
            const result = {
                status: res.status + "-" + res.statusText,
                headers: res.headers,
                data: res.data,
            };
            resultElement.innerHTML = htmlizeResponse(result);
        } catch (err) {
            resultElement.innerHTML = htmlizeResponse(err);
        }
    }
}
export async function getUsersByUsername() {
    let resultElement = document.getElementById("getResult");
    resultElement.innerHTML = "";
    const username = document.getElementById("get-username").value;
    if (username) {
        try {
            // const res = await instance.get(`/tutorials?title=${title}`);
            const res = await instance.get("/Users/", {
                params: {
                    username: username
                }
            });
            const result = {
                status: res.status + "-" + res.statusText,
                headers: res.headers,
                data: res.data,
            };
            resultElement.innerHTML = htmlizeResponse(result);
        } catch (err) {
            resultElement.innerHTML = htmlizeResponse(err);
        }
    }
}
export async function postUser() {
    let resultElement = document.getElementById("getResult");
    resultElement.innerHTML = "";
    const username = document.getElementById("post-username").value;
    const email = document.getElementById("post-email").value;
    const password = document.getElementById("post-password").value;
    if (username == "" || email == "" || password == "") {
        resultElement.innerHTML = "Please fill all fields";
        return;
    }
    // check regex for email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        resultElement.innerHTML = "Please enter a valid email";
        return;
    }
    // check regex for username
    if (!/^[a-zA-Z0-9]{3,20}$/.test(username)) {
        resultElement.innerHTML = "Please enter a valid username (3-20 characters, only letters and numbers)";
        return;
    }
    // check regex for password
    if (!/^[a-zA-Z0-9]{3,20}$/.test(password)) {
        resultElement.innerHTML = "Please enter a valid password (3-20 characters, only letters and numbers)";
        return;
    }
    try {
        const res = await instance.post("/Users/", {
            username: username,
            email: email,
            password: password
        });
        const result = {
            status: res.status + "-" + res.statusText,
            headers: res.headers,
            data: res.data,
        };
        resultElement.innerHTML = htmlizeResponse(result);
    } catch (err) {
        resultElement.innerHTML = htmlizeResponse(err);
    }
}
export async function putUser() {
    let resultElement = document.getElementById("putResult");
    resultElement.innerHTML = "";
    const username = document.getElementById("put-username").value;
    const email = document.getElementById("put-email").value;
    const password = document.getElementById("put-password").value;
    const id = document.getElementById("put-id").value;
    try {
        const res = await instance.put(`/Users/${id}`, {
            username: username,
            email: email,
            password: password
        });
        const result = {
            status: res.status + "-" + res.statusText,
            headers: res.headers,
            data: res.data,
        };
        resultElement.innerHTML = htmlizeResponse(result);
    } catch (err) {
        resultElement.innerHTML = htmlizeResponse(err);
    }
}
export async function deleteAllUsers() {
    let resultElement = document.getElementById("deleteResult");
    resultElement.innerHTML = "";
    try {
        const res = await instance.delete("/Users/");
        const result = {
            status: res.status + "-" + res.statusText,
            headers: res.headers,
            data: res.data,
        };
        resultElement.innerHTML = htmlizeResponse(result);
    } catch (err) {
        resultElement.innerHTML = htmlizeResponse(err);
    }
}
export async function deleteUserById() {
    let resultElement = document.getElementById("deleteResult");
    resultElement.innerHTML = "";
    const id = document.getElementById("delete-id").value;
    try {
        const res = await instance.delete(`/Users/${id}`);
        const result = {
            status: res.status + "-" + res.statusText,
            headers: res.headers,
            data: res.data,
        };
        resultElement.innerHTML = htmlizeResponse(result);
    } catch (err) {
        resultElement.innerHTML = htmlizeResponse(err);
    }
}
export function clearGetOutput() {
    document.getElementById("test").innerHTML = "";
    document.getElementById("getResult").innerHTML = "";
}
export function clearPostOutput() {
    document.getElementById("postResult").innerHTML = "";
}
export function clearPutOutput() {
    document.getElementById("putResult").innerHTML = "";
}
export function clearDeleteOutput() {
    document.getElementById("deleteResult").innerHTML = "";
}