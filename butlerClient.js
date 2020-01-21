const requests = [
    {
        clientId: 1,
        requestId: 'abc',
        hours: 2
    },
    {
        clientId: 2,
        requestId: 'ghi',
        hours: 7
    },
    {
        clientId: 1,
        requestId: 'def',
        hours: 4
    },
    {
        clientId: 1,
        requestId: 'zzz',
        hours: 2
    }
]

const returnValue = {
    butlers: [
        {
            requests: ['abc', 'zzz']
        },
        {
            requests: ['def','ghi']
        }, 
        {
            etc: 'etc...'
        }
    ],
    spreadClientIds: [1,2]
}

            function allocateAndReport(requests) {
            let maximumWorkingHoursForAButler = 8;
            let sortedRequestsByClientHours = requests.sort(function (a, b) {
                if (b.clientId == a.clientId) {
                    return b.hours - a.hours
                } else {
                    return a.clientId - b.clientId
                }
            });

            let butlers = [];
            for (let i = 0; i < sortedRequestsByClientHours.length; i++) {
                
                let taskAssigned = false;
                for (let butler = 0; butler < butlers.length; butler++) {
                    if (butlers[butler].totalHours + sortedRequestsByClientHours[i].hours <= 8) {
                        butlers[butler].totalHours += sortedRequestsByClientHours[i].hours
                        butlers[butler].requests.push(sortedRequestsByClientHours[i].requestId);
                        taskAssigned = true
                        break;
                    }
                }
                if (taskAssigned == false)
                    butlers.push({ requests: [sortedRequestsByClientHours[i].requestId], totalHours: sortedRequestsByClientHours[i].hours })

            }

            console.log(butlers);
        }
allocateAndReport(requests);
