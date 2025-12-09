/**
 * Reads S3 configuration from environment variables.
 * Exits the process if any required variable is missing.
 */
const getS3Config = () => {
  const endpoint = process.env.S3_ENDPOINT;
  const accessKeyId = process.env.S3_ACCESS_KEY_ID;
  const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY;
  const region = process.env.S3_REGION;
  const bucket = process.env.S3_BUCKET;

  if (!endpoint || !accessKeyId || !secretAccessKey || !region || !bucket) {
    console.error("Missing one or more required S3 environment variables.");
    process.exit(1);
  }

  return {
    endpoint,
    accessKeyId,
    secretAccessKey,
    region,
    bucket,
  };
};

/**
 * A configured S3 client instance.
 */
export const s3Client = new Bun.S3Client(getS3Config());
