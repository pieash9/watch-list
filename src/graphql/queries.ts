import { gql } from "@apollo/client";

export const GET_EPISODES = gql(`

    query GetEpisodes { 
    episodes{
            results{
                name
                air_date
            characters{
            image
            name
            }
        }
    }
}
`);
