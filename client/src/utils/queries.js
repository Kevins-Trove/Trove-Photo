import { gql } from '@apollo/client';

export const QUERY_EVENT_LIST = gql`
query getEventList {
  events {
    _id
    name
    description
    start
    end
    venue
    latitude
    longitude
    createdAt
  }
}`;

export const QUERY_EVENT_SINGLE = gql`
query getSingleThought($eventId: ID!) {
  event(eventId: $eventId) {
    _id
    name
    description
    start
    end
    venue
    latitude
    longitude
  }
  
}`;


