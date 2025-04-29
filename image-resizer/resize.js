const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Folder containing original images
const inputFolder = path.join(__dirname, 'images');

// Output folder - save into public/images/
const outputFolder = path.join(__dirname, '..', 'public', 'images');

// Sizes to create
const sizes = [
    { width: 397, height: 256 },
    { width: 794, height: 512 },
    { width: 1191, height: 767 },
    { width: 1460, height: 941 }
];

// Ensure output folder exists
if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
}

// Read all images from input folder
fs.readdir(inputFolder, (err, files) => {
    if (err) {
        console.error('❌ Error reading input folder:', err);
        process.exit(1);
    }

    files.forEach(file => {
        const inputImagePath = path.join(inputFolder, file);

        // Check if file is actually an image
        if (!file.match(/\.(jpg|jpeg|png)$/i)) {
            console.log(`⚠️ Skipping non-image file: ${file}`);
            return;
        }

        // Export original size as webp
        const { name } = path.parse(file);
        const originalWebpPath = path.join(outputFolder, `${name}.webp`);
        sharp(inputImagePath)
            .webp()
            .toFile(originalWebpPath)
            .then(() => console.log(`✅ Created ${path.basename(originalWebpPath)}`))
            .catch(err => console.error(`❌ Error processing ${file}:`, err));

        sizes.forEach(size => {
            const outputImagePath = path.join(outputFolder, `${name}-${size.width}x${size.height}.webp`);

            sharp(inputImagePath)
                .resize(size.width, size.height)
                .webp()
                .toFile(outputImagePath)
                .then(() => console.log(`✅ Created ${path.basename(outputImagePath)}`))
                .catch(err => console.error(`❌ Error processing ${file}:`, err));
        });
    });
});
