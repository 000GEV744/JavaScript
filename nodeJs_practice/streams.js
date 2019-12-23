/* read Stream and write Stream both use a chunk of data to write or read.

why we should use streams over readFile() method ?
because in readFile it loads the whole file to be read
at once and for that the buffer size needs to be large enough to accomodate the whole file otherwise 
it will show error whereas incase of streams it uses small small chunks which means buffer size need not be large enough
hence, it can easily read or write the whole file.
*/

const fs = require("fs");
const zlib = require("zlib");
const readStream = fs.createReadStream("./example1.txt", "utf8");
const writeStream = fs.createWriteStream("example2.txt");

readStream.on("data", readChunk => {
  console.log(readChunk + "\n");
  writeStream.write(readChunk); //writing the chunks into another file.
});

// //another way to write the chunks into anothe file
readStream.pipe(writeStream);

//now compress the content for that use : require('zlib');
const gzlib = zlib.createGzip(); //return a transformed string
writeStream1 = fs.createWriteStream("example3.txt.gz"); //writeSTream will write into the content into the zip folder
readStream.pipe(gzlib).pipe(writeStream1);

//now read the cntent form a zipped file
const gunzip = zlib.createGunzip();
readStream1 = fs.createReadStream("./example3.txt.gz");
writeStream2 = fs.createWriteStream("uncompressed.txt");
readStream1.pipe(gunzip).pipe(writeStream2);
