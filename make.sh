#!/usr/bin/env bash

flavor=chromium
configuration=production
zip=0

# Command-line Arguments
# -c for Chromium
# -f for Firefox
# -p for Production
# -d for Development
# -z for Zip (Package)
while getopts "cfpdz" opt; do
    case $opt in
        c)
            flavor=chromium
            ;;
        f)
            flavor=firefox
            ;;
        p)
            configuration=production
            ;;
        d)
            configuration=development
            ;;
        z)
            zip=1
            ;;
    esac
done

echo "---> Jumble"

echo "---> Building '$configuration' configuration for '$flavor'..."
# Install NPM packages and build project.
npm install
#npm audit fix
npm run _build-$configuration

echo "---> Copying files..."

# Pre-build clean-up.
DES=package/$flavor
rm -rf $DES
mkdir -p $DES

# Copy all files from build folder to package folder.
cp -R build/* $DES/

# Copy appropriate web extension manifest file to package folder.
cp platform/$flavor/manifest.json $DES/

# Copy appropriate configuration file to package folder.
cp configuration/$configuration/constants.js $DES/

# Zip (package) web extension.
if [ $zip = 1 ]; then
    echo "---> Creating package..."
    pushd $DES > /dev/null
    zip ../$(basename $DES).zip -qr *
    popd > /dev/null
fi

echo "---> Cleaning up..."
# Post-build clean-up.
rm -rf build

echo "---> Done."
