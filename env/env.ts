import * as dotenv from 'dotenv';

dotenv.config({ path: `${__dirname}/config/.${process.env.NODE_ENV ? process.env.NODE_ENV : 'development' }.env` });
