//returns a promise which will return a JSON with the list of NST previews.

export default function checkNSTStatus() {
    const init = {
        method: "GET",
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    };

    const url = "http://ec2-3-235-179-211.compute-1.amazonaws.com:5000/logic/temp_list";
    
    return fetch(url, init)
        .then((response) => {
            return response.json().then((data) => {
                //console.log(data);
                return data;
            }).catch((err) => {
                console.log(err);
            });
        })
        .catch((e) => {
            console.log(e);
        });
}