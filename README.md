# Portfolio — Océane Lemaître

## Développement local

```sh
npm ci
npm run dev
```

Le site est accessible sur http://localhost:3000.

## Publication sur GitHub Pages

1. Envoyer les modifications et les fichiers du dossier `public` dans la branche `main` du dépôt.
2. Dans GitHub, ouvrir **Settings → Pages → Build and deployment → Source** et choisir **GitHub Actions**.
3. Dans **Actions**, lancer **Deploy portfolio to GitHub Pages** si nécessaire. Les prochains envois sur `main` déclenchent automatiquement le déploiement.

Le workflow compile toutes les pages dans `out/` puis les publie. Le préfixe d’URL est fourni automatiquement par GitHub Pages : il convient aussi bien à un dépôt de projet qu’à un domaine personnalisé.

Pour le dépôt actuel, l’adresse attendue après déploiement est : https://ugolth.github.io/portfolio_oceane/.

## Vérifier l’export localement

```powershell
$env:NEXT_PUBLIC_BASE_PATH = '/portfolio_oceane'
npm run build
Remove-Item Env:NEXT_PUBLIC_BASE_PATH
npm start
```

Ouvrir ensuite http://localhost:3000/portfolio_oceane/. `npm start` sert directement les fichiers statiques exportés.

Les liens Next.js utilisent le préfixe configuré dans `next.config.ts`. Pour les nouveaux fichiers publics (`src`, PDF, `srcSet`) et liens HTML natifs, utiliser `withBasePath` depuis `lib/site-path.ts`. Les images sont servies directement, car GitHub Pages n’exécute pas de serveur d’optimisation Next.js.
