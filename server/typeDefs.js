const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    uid: String!
    email: String
    bio: String
    avatar: String
    url: String
    github: String
    followingIDs: [String]
    followersIDs: [String]
    projects: [Project]
    stories: [Story]
    followers: [User]
    followings: [User]
  }
  type Project {
    id: ID!
    name: String!
    desc: String
    link: String
    userID: String!
    imageURL: String!
  }
  type Story {
    id: ID!
    link: String
    userID: String!
    imageURL: String!
  }
  type Query {
    users: [User]
    projects: [Project]
    stories: [Story]
    userByUID(uid: String!): User
  }
  type Mutation {
    addUser(
      name: String!
      uid: String!
      email: String
      bio: String
      avatar: String
      url: String
      github: String
    ): User
    addProject(
      name: String!
      userID: String!
      imageURL: String!
      desc: String
      link: String
    ): Project
    addStory(userID: String!, imageURL: String!, link: String): Story
    followUser(userID: String!, selfID: String!): User
  }
`;

module.exports = typeDefs;
