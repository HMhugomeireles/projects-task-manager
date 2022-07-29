const config = {
  CONNECTING_MONGODB: `mongodb+srv://${process.env.MONGO_ATLAS_USER}:${process.env.MONGO_ATLAS_PASSWORD}@usertaskmanagement.jpe2a.mongodb.net/taskmanagement?retryWrites=true&w=majority`,
  TOKEN_EXPIRE_TIME: `${process.env.TOKEN_EXPIRE_TIME}h`,
};

export default config;