export default {
  getAllEvents () {
    return fetch(`http://sample-env.kcv6q5ksgh.us-west-2.elasticbeanstalk.com/charityConnect/allEvents`, {
      method: 'GET',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
      },
      mode: 'no-cors'
    })
      .then((response) => {
        const res = [{
          "eventId": 1,
          "name": "Event1",
          "description": "Descript1",
          "location": "SLC",
          "eventDateTime": 1501545600000,
          "createdBy": "Anonymous",
          "processingDateFrom": 1498790433630,
          "processingDateTo": 253399708740000,
          "eventMentorPojo": [],
          "eventMenteePojo": []
        }, {
          "eventId": 2,
          "name": "Event2",
          "description": "Descript2",
          "location": "SLC",
          "eventDateTime": 1501545600000,
          "createdBy": "Anonymous",
          "processingDateFrom": 1498790502540,
          "processingDateTo": 253399708740000,
          "eventMentorPojo": [],
          "eventMenteePojo": []
        }, {
          "eventId": 3,
          "name": "Event3",
          "description": "Blah",
          "location": "SLC",
          "eventDateTime": 1501545600000,
          "createdBy": "Anonymous",
          "processingDateFrom": 1498791043600,
          "processingDateTo": 253399708740000,
          "eventMentorPojo": [],
          "eventMenteePojo": []
        }];
        return res;
      })
      .catch(error => error);
  },
  registerEvent (eventToRegister) {
    return fetch(`http://sample-env.kcv6q5ksgh.us-west-2.elasticbeanstalk.com/charityConnect/createEvent?name=${eventToRegister.name}&description=${eventToRegister.description}&location=${eventToRegister.location}&eventDateTime=${eventToRegister.eventDateTime}&createdBy=${'Anonymous'}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'no-cors'
    })
      .then(response => response.json())
      .catch(error => error);
  }
}
