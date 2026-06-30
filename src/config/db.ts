import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
  try {
    const mongoURI =
      process.env.MONGO_URI ||
      "mongodb://jonathansme01_db_user:dyWPoQvM3cZWsPsc@ac-ynb1hkq-shard-00-00.wg6i5wr.mongodb.net:27017,ac-ynb1hkq-shard-00-01.wg6i5wr.mongodb.net:27017,ac-ynb1hkq-shard-00-02.wg6i5wr.mongodb.net:27017/usercrud?ssl=true&replicaSet=atlas-akj6nt-shard-0&authSource=admin&appName=usercrud-cluster";
    await mongoose.connect(mongoURI);
    console.log("🚀 MongoDB conectado exitosamente");
  } catch (error) {
    console.error("❌ Error conectando a MongoDB:", error);
    process.exit(1);
  }
};
