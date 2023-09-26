import mongoose from 'mongoose';

// Remplacez les valeurs entre < > par vos informations
const connectionString =
        'mongodb+srv://raphael:raphael141104@dbclusterraphael.2poqbl0.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp'


export const connectToDatabase = async (): Promise<void> => {
    try {
      await mongoose.connect(connectionString);
      console.log('Connecté à MongoDB Atlas');
    } catch (error) {
      console.error('Erreur de connexion à MongoDB :', error);
      process.exit(1); // Quitte l'application en cas d'erreur de connexion
    }
  };
  