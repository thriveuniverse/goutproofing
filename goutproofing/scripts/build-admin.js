// Script to build TinaCMS admin with standard Vite
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Building TinaCMS admin...');
console.log('Temporarily using standard Vite for admin build...');

// Save current package.json
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const originalOverrides = packageJson.overrides;

// Temporarily remove vite override
delete packageJson.overrides;

try {
  // Write temporary package.json
  fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
  
  // Install standard vite temporarily
  console.log('Installing standard vite...');
  execSync('npm install vite@latest --save-dev --no-save', { stdio: 'inherit' });
  
  // Build admin
  console.log('Building admin...');
  execSync('npx tinacms build', { stdio: 'inherit' });
  
} finally {
  // Restore original package.json
  packageJson.overrides = originalOverrides;
  fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
  console.log('Restored original package.json');
}

console.log('Admin build complete!');

