import { s3Client } from "./s3";
import { logger } from "./logger";

/**
 * Defines the structure of an S3 object as returned by the list method.
 */
interface S3Object {
  key: string;
  size?: number;
  lastModified?: string;
  eTag?: string;
}

/**
 * Tests the connection to the S3 bucket by listing its objects.
 * Logs the result and exits with an error code on failure.
 */
async function testS3Connection() {
  logger.info("Attempting to connect to S3 bucket...");

  try {
    const result = await s3Client.list();
    logger.info("Successfully connected to S3 bucket.");

    if (result.contents) {
        logger.info(`Found ${result.contents.length} objects in the bucket.`);
        // To provide more detailed feedback, let's log the first few object keys
        if (result.contents.length > 0) {
          const keys = result.contents.slice(0, 5).map((o: S3Object) => o.key);
          logger.info(`First few object keys: ${keys.join(", ")}`);
        }
    } else {
        logger.info("The bucket is empty.");
    }

  } catch (error) {
    logger.error("Failed to connect to S3 bucket.");
    if (error instanceof Error) {
      logger.error(error.message);
    } else {
      logger.error(String(error));
    }
    process.exit(1);
  }
}

testS3Connection();
