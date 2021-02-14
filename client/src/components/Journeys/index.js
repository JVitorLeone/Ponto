import React, {useState, useContext, useEffect} from 'react';
import {getDateString, getHourNoSecString, getTimeToHourString} from '../../utils/DateUtils'

import {Wrapper, Box, Journey, 
    Date, Start, Status, Header, Col, Pages
} from './style';

import Context from '../../GlobalContext';

function Journeys(props) {
    const {getJourneys, updateJourneys, journeys} = useContext(Context);
    const numberByPage = 6;

    const [page, setPage] = useState(0);
    const [journeysList, setJourneysList] = useState(getJourneys(0,numberByPage));
    const [numberOfPages, setNumberOfPages] = useState();

    useEffect(() => {
        let start = page * numberByPage;
        let finish = (page + 1) * numberByPage;
        setJourneysList(getJourneys(start, finish));

        let journeyCount = journeys.length;
        let pagesCount = Math.ceil(journeyCount/numberByPage);
        setNumberOfPages(pagesCount);
    },[page, journeys]);

    useEffect(() => {
        updateJourneys();
    },[]);

    function sumPeriods(periods) {
		let sum = 0;
		for (var period of periods) {
			if (period.finish !== null)
				sum += period.finish - period.start;
		}
		return sum;
	}

    return (
        <Wrapper>
            <Box>
                <Header>
                    <Col>Data</Col>
                    <Col>Início</Col>
                    <Col>Duração</Col>
                    <Col>Status</Col>
                </Header>
                { journeysList.map((journey, key) => {
                    return (
                        <Journey key={journey.id}>
                            <Date>{getDateString(journey.date)}</Date>
                            <Start>{getHourNoSecString(journey.periods[0].start)}</Start>
                            <Start>{getTimeToHourString(sumPeriods(journey.periods))}</Start>
                            <Status finished={journey.finished}>{journey.finished ? "Finalizada" : "Não finalizada"}</Status>
                        </Journey>
                    )
                })}
                <Pages>
                    <button 
                        disabled={!(page !== 0)}
                        onClick={()=> setPage(page - 1)}>
                        Anterior
                    </button>
                    <span>Página {page + 1} de {numberOfPages}</span>
                    <button 
                        disabled={!((page + 1) < numberOfPages)}
                        onClick={()=> setPage(page + 1)}>
                        Próxima
                    </button>
                </Pages>
            </Box>
        </Wrapper>
    )
}

export {Journeys};