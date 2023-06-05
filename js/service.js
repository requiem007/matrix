export const fate = await fetch("matrix.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // console.log(data);
        return data;
    });
