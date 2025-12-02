const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const iconSizes = {
    'mipmap-mdpi': 48,
    'mipmap-hdpi': 72,
    'mipmap-xhdpi': 96,
    'mipmap-xxhdpi': 144,
    'mipmap-xxxhdpi': 192,
};

const sourceIcon = path.join(__dirname, 'app-icon-1024.png');
const androidResPath = path.join(__dirname, 'android', 'app', 'src', 'main', 'res');

async function generateIcons() {
    console.log('🎨 Generating Android app icons...');

    for (const [folder, size] of Object.entries(iconSizes)) {
        const outputDir = path.join(androidResPath, folder);

        // Ensure directory exists
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        // Generate ic_launcher.png
        const outputPath = path.join(outputDir, 'ic_launcher.png');
        await sharp(sourceIcon)
            .resize(size, size)
            .png()
            .toFile(outputPath);

        console.log(`✅ Generated ${folder}/ic_launcher.png (${size}x${size})`);

        // Generate ic_launcher_round.png
        const outputPathRound = path.join(outputDir, 'ic_launcher_round.png');
        await sharp(sourceIcon)
            .resize(size, size)
            .png()
            .toFile(outputPathRound);

        console.log(`✅ Generated ${folder}/ic_launcher_round.png (${size}x${size})`);

        // Generate ic_launcher_foreground.png (108dp, so multiply by density)
        const foregroundSize = Math.round(108 * (size / 48)); // 48dp is mdpi baseline
        const outputPathForeground = path.join(outputDir, 'ic_launcher_foreground.png');
        await sharp(sourceIcon)
            .resize(foregroundSize, foregroundSize)
            .png()
            .toFile(outputPathForeground);

        console.log(`✅ Generated ${folder}/ic_launcher_foreground.png (${foregroundSize}x${foregroundSize})`);
    }

    console.log('🎉 All Android app icons generated successfully!');
}

generateIcons().catch(err => {
    console.error('❌ Error generating icons:', err);
    process.exit(1);
});
