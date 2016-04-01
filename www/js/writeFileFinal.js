//Should work, final


// device APIs are available
//

/*
DOM should have
<div id="writerFileName">path/to/foo.bar</div>
and 
<div id="writerFileContent">CONTENT</div>
*/

var errorHandler = function (fileName, e) {  
    var msg = '';

    switch (e.code) {
        case FileError.QUOTA_EXCEEDED_ERR:
            msg = 'Storage quota exceeded';
            break;
        case FileError.NOT_FOUND_ERR:
            msg = 'File not found';
            break;
        case FileError.SECURITY_ERR:
            msg = 'Security error';
            break;
        case FileError.INVALID_MODIFICATION_ERR:
            msg = 'Invalid modification';
            break;
        case FileError.INVALID_STATE_ERR:
            msg = 'Invalid state';
            break;
        default:
            msg = 'Unknown error';
            break;
    }

    console.log('Error (' + fileName + '): ' + msg);
};


function readFromFile(fileName, cb) {
    var pathToFile = cordova.file.externalRootDirectory + fileName;
    window.resolveLocalFileSystemURL(pathToFile, function (fileEntry) {
        fileEntry.file(function (file) {
            var reader = new FileReader();

            reader.onloadend = function (e) {
                cb(JSON.parse(this.result));
            };

            reader.readAsText(file);
        }, errorHandler.bind(null, fileName));
    }, errorHandler.bind(null, fileName));
}

function writeToFile(fileName, data) {
    console.log("function entered");
    window.resolveLocalFileSystemURL(cordova.file.externalRootDirectory, function (directoryEntry) {
        console.log("resolved");
        directoryEntry.getFile(fileName, { create: true }, function (fileEntry) {
            console.log("got file");
            fileEntry.createWriter(function (fileWriter) {
                console.log("something");
                // fileWriter.onwriteend = function (e) {
                //     // for real-world usage, you might consider passing a success callback
                //     console.log('Write of file "' + fileName + '" completed.');
                // };

                // fileWriter.onerror = function (e) {
                //     // you could hook this up with our global error handler, or pass in an error callback
                //     console.log('Write failed: ' + e.toString());
                // };

                var blob = new Blob([data], { type: 'text/plain' });
                console.log(blob);
                fileWriter.write(blob);
                console.log("written");
            }, errorHandler.bind(null, fileName));
        }, errorHandler.bind(null, fileName));
    }, errorHandler.bind(null, fileName));
}
