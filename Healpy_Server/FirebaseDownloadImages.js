'use strict';
    
module.exports.downloadFile = async function(bucketName, srcFilename, destFilename) {
    // [START storage_download_file]
    // Imports the Google Cloud client library
    const {Storage} = require('@google-cloud/storage');

    // Creates a client
    const storage = new Storage();

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const bucketName = 'Name of a bucket, e.g. my-bucket';
    // const srcFilename = 'Remote file to download, e.g. file.txt';
    // const destFilename = 'Local destination for file, e.g. ./local/path/to/file.txt';
    // const bucketName = 'happy-d02bd.appspot.com';
    // const srcFilename = 'COCO_val2014_000000000241.jpg';
    // const destFilename = './public/images/COCO_val2014_000000000241.jpg';

    const options = {
        // The path to which the file should be downloaded, e.g. "./file.txt"
        destination: destFilename,
    };

    // Downloads the file
    await storage
        .bucket(bucketName)
        .file(srcFilename)
        .download(options);

    console.log(
        `gs://${bucketName}/${srcFilename} downloaded to ${destFilename}.`
    );
    // [END storage_download_file]
}
