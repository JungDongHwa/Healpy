'use strict';

class DownloadImage {
    constructor(bucketName, srcFilename, destFilename) {
        this.bucketName = bucketName;
        this.srcFilename = srcFilename;
        this.destFilename = destFilename;
    }

    async downloadFile() {
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

        const options = {
            // The path to which the file should be downloaded, e.g. "./file.txt"
            destination: this.destFilename,
        };

        // Downloads the file
        await storage
            .bucket(this.bucketName)
            .file(this.srcFilename)
            .download(options);

        console.log(
            `gs://${this.bucketName}/${this.srcFilename} downloaded to ${this.destFilename}.`
        );
        // [END storage_download_file]        
    }
}

module.exports = DownloadImage;
