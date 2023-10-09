import { gql } from "./__generated__/gql";

export const GET_EPISODES = gql(`

    query GetEpisodes { 
    episodes{
            results{
                name
                air_date
                episode
            characters{
            image
            name
            }
        }
    }
}
`);
