# Architecture Document

## Changes Summary
### I fixed the issue of fetching all the Pokémons, I replaced it with fetching only 10 of them.
I choose this issus since it has the most impact on the user experience. It was small fix in a specific scope of the code.
I made the assumption that displaying random items may be not fully / true random.
When manually testing my code I found that the fetch data request was sent twice. Investigating this taught me about React fetching data in dev environment and the use of hooks 
In addition to the logic fix's, I created a test for evaluating how many times the fetching request is sent even in dev mode. 
This required me to add the infrastructure for unit testing to the project, addressing another main issue in the project.

## Scaling Considerations
In the case we need to display more items, we can change the value of AMOUNT_TO_DISPLAY.
If we need to display more than half of the total amount of items in one view, then my logic should be removed and we will fetch all items, but in this scenario we will use all the data.


## Production Readiness
- I would track the response time of fetching the items, monitoring API (https://pokeapi.co/api/v2/pokemon?limit=<limit>&offset=<offset>). Evaluating data size and latency are within the parameters (16ms, 1kb)
- I would track the UI rendering time.
- In production scale I would log the response metrics of the API call in Grafana and create a dashboard for it
- For rendering issue I would use DataDog synthetic tests
- Both Grafana and DataDog can alert via messaging (mail, slack, text, etc.) in case the App is broken or there a long latency.
- For rollback, I would revert my commit and deploy.
