import { readdirSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Obtenir le répertoire courant avec ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const WEBSITE_URL = 'https://prepa-metier-louis-braille.fr';

// Fonction pour vérifier si un chemin existe
function pathExists(path) {
    try {
        return existsSync(path);
    } catch (error) {
        console.error(`Erreur lors de la vérification du chemin ${path}:`, error);
        return false;
    }
}

// Fonction pour obtenir toutes les pages du projet Next.js
function getAllPages(directory) {
    console.log(`Recherche de pages dans: ${directory}`);
    
    // Initialiser pages comme un tableau vide
    let pages = [];

    try {
        // Vérifier si le répertoire existe
        if (!pathExists(directory)) {
            console.error(`Le répertoire ${directory} n'existe pas`);
            return pages;
        }

        const files = readdirSync(directory, { withFileTypes: true });
        
        for (const file of files) {
            const fullPath = join(directory, file.name);
            
            if (file.isDirectory()) {
                // Exclure les répertoires commençant par _ (convention Next.js)
                if (!file.name.startsWith('_')) {
                    // Fusionner avec les pages retournées par l'appel récursif
                    pages = [...pages, ...getAllPages(fullPath)];
                }
            } else if (file.name === 'page.tsx' || file.name === 'page.js') {
                // Convertir le chemin du fichier en route
                let route = directory
                    .replace(join(process.cwd(), 'src/app'), '')
                    .replace(/\\/g, '/');
                
                // Supprimer les barres obliques au début si elles existent
                route = route.startsWith('/') ? route : `/${route}`;
                
                if (route === '/') {
                    pages.push('');
                } else {
                    pages.push(route);
                }
                
                console.log(`Page trouvée: ${route || '/'}`);
            }
        }
    } catch (error) {
        console.error('Erreur lors de la lecture du répertoire:', error);
    }

    return pages;
}

function generateSitemap() {
    // Chemin vers le répertoire src/app
    const appDirectory = join(process.cwd(), 'src/app');
    console.log(`Chemin du répertoire appDirectory: ${appDirectory}`);
    
    // Vérifier si le répertoire existe
    if (!pathExists(appDirectory)) {
        console.error(`Le répertoire ${appDirectory} n'existe pas`);
        return;
    }
    
    // Récupérer toutes les pages
    const pages = getAllPages(appDirectory);
    const currentDate = new Date().toISOString();

    // Vérifier que pages existe et est un tableau non vide
    if (!Array.isArray(pages) || pages.length === 0) {
        console.warn('⚠️ Aucune page trouvée pour générer le sitemap');
        return;
    }

    console.log(`Nombre de pages trouvées: ${pages.length}`);
    console.log(`Pages trouvées: ${pages.join(', ')}`);

    // Générer le contenu du sitemap
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `    <url>
        <loc>${WEBSITE_URL}${page}</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>`).join('\n')}
</urlset>`;

    try {
        // Créer le fichier sitemap.xml dans le répertoire public
        const sitemapPath = join(process.cwd(), 'public/sitemap.xml');
        writeFileSync(sitemapPath, sitemapContent);
        console.log(`✅ Sitemap généré avec succès dans ${sitemapPath}`);
    } catch (error) {
        console.error('Erreur lors de l\'écriture du sitemap:', error);
    }
}

// Exécuter la fonction de génération du sitemap
console.log('Début de la génération du sitemap...');
generateSitemap();