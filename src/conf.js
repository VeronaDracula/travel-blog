export const postOptions = (body = {}) => {
    return {
        method: "POST",
        cache: "no-cache",
        credentials: "same-origin",
        mode: 'cors',
        // signal: cancelSearchCompany.signal,
        headers: {
            // 'Authorization':`Bearer ${token}`,
            "Content-Type": "application/json",
            "Accept" : "application/json"
        },
        body: body
    }
}

export const putOptions = (body = {}) => {
    return {
        method: "POST",
        cache: "no-cache",
        credentials: "same-origin",
        mode: 'cors',
        // signal: cancelSearchCompany.signal,
        headers: {
            // 'Authorization':`Bearer ${token}`,
            "Content-Type": "application/json",
            "Accept" : "application/json"
        },
        body: body
    }
}

export const getOptions = () => {
    return {
        method: "GET",
        cache: "no-cache",
        credentials: "same-origin",
        mode: 'cors',
        headers: {
            // 'Authorization':`Bearer ${token}`,
            "Content-Type": "application/json",
            "Accept" : "application/json"
        },
    }
}