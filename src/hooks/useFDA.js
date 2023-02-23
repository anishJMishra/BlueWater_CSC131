import {createVendiaClient} from "@vendia/client";

const client = createVendiaClient({
    apiUrl: `https://9w6gq7w2ue.execute-api.us-west-2.amazonaws.com/graphql/`,
    websocketUrl: `wss://a57wvpqzj6.execute-api.us-west-2.amazonaws.com/graphql`,
    apiKey:`5egPs6jdNWNX1GgBowskix1iPGtTLNBFffvsnbg3LDLM`, 
  })


export default useFDA;