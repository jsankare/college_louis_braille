import { readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const WEBSITE_URL = 'https://prepa-metier-louis-braille.fr/';

function getAllPages(directory){
    // Initialiser pages comme un tableau vide
    let pages = [];

    try {
        const files = readdirSync(directory, { withFileTypes: true });

        for (const file of files) {
            const fullPath = join(directory, file.name);

            if (file.isDirectory()) {
                // Fusionner avec les pages retournées par l'appel récursif
                pages = [...pages, ...getAllPages(fullPath)];
            } else if (
                file.name === 'page.tsx' &&
                !fullPath.includes('_') &&
                !fullPath.includes('layout.tsx')
            ) {
                // Convertir le chemin du fichier en route
                const route = directory
                    .replace(join(process.cwd(), 'src/app'), '')
                    .replace(/\\/g, '/');

                if (route === '') {
                    pages.push('/');
                } else {
                    pages.push(route);
                }
            }
        }
    } catch (error) {
        console.error('Erreur lors de la lecture du répertoire:', error);
    }

    return pages;
}

function generateSitemap() {
    const pages = getAllPages(join(process.cwd(), 'src/app'));
    const currentDate = new Date().toISOString();

    // Vérifier que pages existe et est un tableau
    if (!Array.isArray(pages) || pages.length === 0) {
        console.warn('⚠️ Aucune page trouvée pour générer le sitemap');
        return;
    }

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
        writeFileSync('public/sitemap.xml', sitemapContent);
        console.log('✅ Sitemap généré avec succès dans public/sitemap.xml');
    } catch (error) {
        console.error('Erreur lors de l\'écriture du sitemap:', error);
    }
}

generateSitemap();