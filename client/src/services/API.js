export const useAPI = () => {
    const updateJourney = async(journey) => {
        const options = {
            method: "POST",
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify(journey)
        };

        try {
            let response = await fetch('http://localhost:5000/journey', options);
            let data = await response.json();
            // let data = response;

            if (data.erro) {
                // Alerta de erro
                console.log("Erro: " + data.erro);
                return {erro: data.erro};
            } else {
                console.log(data);
                return data;
            }
        } catch(error)  {
            console.log("Erro: " + error);
            return {erro: error}
        }
    }

    const getJourneys = async(user_id) => {
        const options = {
            method: "GET",
            headers: new Headers({'content-type': 'application/json'})
        };

        try {
            let response = await fetch('http://localhost:5000/journey?user=' + user_id, options);
            let data = await response.json();
            // let data = response;

            if (data.erro) {
                // Alerta de erro
                console.log("Erro: " + data.erro);
                return {erro: data.erro};
            } else {
                console.log(data);
                return data;
            }
        } catch(error)  {
            console.log("Erro: " + error);
            return {erro: error}
        }
    }

	return {updateJourney, getJourneys};
}
